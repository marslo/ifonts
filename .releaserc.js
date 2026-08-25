// =============================================================================
// Self-contained changelog config.
//
// WHY THE TEMPLATES ARE INLINED HERE:
//   @semantic-release/release-notes-generator renders with the Handlebars-based conventional-changelog-writer.
//   conventional-changelog-conventionalcommits >= 9 dropped its Handlebars writerOpts in favour of @conventional-changelog/ template, which release-notes-generator does NOT use — so with preset >= 9 the section grouping silently disappears (flat list, no "### Features").
//   To stay compatible with ANY preset version (8, 9, 10, …) we supply the full Handlebars writerOpts (mainTemplate / headerPartial / commitPartial) and the grouping ourselves; the preset is then only used for its commit PARSER.
// =============================================================================

const SECTIONS = [
  { type: 'feat',     section: 'Features' },
  { type: 'fix',      section: 'Bug Fixes' },
  { type: 'refactor', section: 'Code Refactoring' },
  { type: 'style',    section: 'Styles' },
  { type: 'chore',    section: 'Others' },
  { type: 'docs',     section: 'Documentation' },
  { type: 'perf',     section: 'Performance' },
  { type: 'test',     section: 'Tests' },
  { type: 'ci',       section: 'CI/CD' }
];
const TYPE_TO_SECTION = Object.fromEntries(SECTIONS.map(s => [s.type, s.section]));
const SECTION_ORDER   = SECTIONS.map(s => s.section);
const isSignoff       = (line) => /^\s*Signed-off-by:/i.test(line);
const stripSignoff    = (text) => (text || '').split('\n').filter(l => !isSignoff(l)).join('\n').trim();

// ── Handlebars templates (writer-8 compatible; vendored from the conventional-commits preset so they work regardless of the installed preset major) ──
const mainTemplate = `{{> header}}
{{#if noteGroups}}
{{#each noteGroups}}

### ⚠ {{title}}

{{#each notes}}
* {{#if commit.scope}}**{{commit.scope}}:** {{/if}}{{text}}
{{/each}}
{{/each}}
{{/if}}
{{#each commitGroups}}

{{#if title}}
### {{title}}

{{/if}}
{{#each commits}}
{{> commit root=@root}}
{{/each}}
{{/each}}
`;

const headerPartial = `## {{#if @root.linkCompare~}}
  [{{version}}]({{~@root.host}}/{{#if this.owner}}{{~this.owner}}{{else}}{{~@root.owner}}{{/if}}/{{#if this.repository}}{{~this.repository}}{{else}}{{~@root.repository}}{{/if}}/compare/{{previousTag}}...{{currentTag}})
{{~else}}
  {{~version}}
{{~/if}}
{{~#if date}} ({{date}})
{{/if}}
`;

// standard conventionalcommits line: drop the type keyword (it becomes the "### <section>"
// header), bold the scope as **scope:**, keep subject, then append the commit-hash link and
// any issue/PR references; body/footer follow (built + signoff-stripped in transform)
const commitPartial =
  '*{{#if scope}} **{{scope}}:**{{/if}} {{#if subject}}{{subject}}{{else}}{{header}}{{/if}}' +
  '{{#if @root.linkReferences}} ([{{shortHash}}]({{@root.host}}/{{@root.owner}}/{{@root.repository}}/commit/{{hash}})){{/if}}' +
  '{{#if references}}, closes{{#each references}} {{#if @root.linkReferences}}[{{#if this.owner}}{{this.owner}}/{{/if}}{{this.repository}}#{{this.issue}}]({{@root.host}}/{{#if this.owner}}{{this.owner}}{{else}}{{@root.owner}}{{/if}}/{{this.repository}}/issues/{{this.issue}}){{else}}{{#if this.owner}}{{this.owner}}/{{/if}}{{this.repository}}#{{this.issue}}{{/if}}{{/each}}{{/if}}' +
  '\n{{#if body}}\n{{body}}\n{{/if}}\n{{#if footer}}\n\n{{footer}}\n{{/if}}\n';

// ── dynamic changelog title ──
// reuse an existing level-1 header (`# ...`) at the very top of CHANGELOG.md so new
// releases are inserted BELOW it; if there is none, leave changelogTitle unset so
// semantic-release just prepends (no title is forced onto title-less changelogs)
const fs = require('fs');
const path = require('path');
const CHANGELOG_FILE = 'CHANGELOG.md';
function detectChangelogTitle(file) {
  try {
    const text = fs.readFileSync(path.resolve(process.cwd(), file), 'utf8');
    const first = text.split('\n').find(l => l.trim() !== '');
    // a single '#' ATX header (rejects '##', '###', …) with actual text
    if (first && /^#\s+\S/.test(first)) { return first.trim(); }
  } catch (e) { /* missing or unreadable → treat as no title */ }
  return null;
}
const CHANGELOG_TITLE = detectChangelogTitle(CHANGELOG_FILE);

module.exports = {
  "branches": ["main"],
  "tagFormat": "v${version}",
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "conventionalcommits",
      "releaseRules": [
        // { "breaking": true,   "release": "minor" },
        { "breaking": true,   "release": "major" },
        // { "type": "feat",     "release": "patch" },
        { "type": "chore",    "release": "patch" },
        { "type": "refactor", "release": "patch" },
        { "type": "style",    "release": "patch" },
        { "type": "docs",     "release": "patch" },
        { "type": "ci",       "release": "patch" }
      ]
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "conventionalcommits",
      "presetConfig": { "types": SECTIONS },
      "writerOpts": {
        "groupBy": "type",
        // order sections as listed in SECTIONS (not alphabetically)
        "commitGroupsSort": (a, b) => SECTION_ORDER.indexOf(a.title) - SECTION_ORDER.indexOf(b.title),
        "commitsSort": ["header", "subject"],
        "noteGroupsSort": "title",
        "mainTemplate": mainTemplate,
        "headerPartial": headerPartial,
        "commitPartial": commitPartial,
        "footerPartial": "",
        "transform": (commit) => {
          const c = { ...commit };

          // type -> section label (drives the "### <section>" grouping)
          if (TYPE_TO_SECTION[c.type]) {
            c.type = TYPE_TO_SECTION[c.type];
          }

          // drop Signed-off-by trailers from body / footer / notes
          if (c.body) {
            const lines = c.body.split('\n').filter(l => !isSignoff(l));
            c.body = lines.length > 0 ? lines.map(l => '  ' + l).join('\n') : null;
          }
          if (c.footer) {
            c.footer = stripSignoff(c.footer) || null;
          }
          if (Array.isArray(c.notes)) {
            c.notes = c.notes
              .map(n => ({ ...n, text: stripSignoff(n.text) }))
              .filter(n => n.text);
          }

          return c;
        }
      }
    }],
    ["@semantic-release/changelog", Object.assign(
      { "changelogFile": CHANGELOG_FILE },
      CHANGELOG_TITLE ? { "changelogTitle": CHANGELOG_TITLE } : {}
    )],
    ["@semantic-release/exec", {
      "prepareCmd": [
        "sed -i 's/@version.*/@version        ${nextRelease.version}/' ifonts.user.css",
        "pre-commit run --files CHANGELOG.md ifonts.user.css",
        "true"
      ].join(' && ')
    }],
    ["@semantic-release/git", {
      "assets": [ "CHANGELOG.md", "ifonts.user.css" ],
      "message": "chore(release): v${nextRelease.version}"
    }],
    "@semantic-release/github"
  ]
};
