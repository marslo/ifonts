# iFonts (marslo)

Global-wild font customization: configurable sans / mono / handwritten / icon font stacks for (almost) every site.

<!-- earlier version: https://userstyles.org/styles/148804/marslo ( September 28, 2017 ) -->

## Installation

1. install [Stylus](https://github.com/openstyles/stylus): [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) | [Firefox](https://addons.mozilla.org/firefox/addon/styl-us/) | [Edge](https://microsoftedge.microsoft.com/addons/detail/stylus/dmcfbglnmkadeibaoelljihicilhlnjd)
2. click to install:

| STYLE                   | SCOPE             | INSTALL                                                                                                                                                             | REPO                                                                 |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| iFonts (marslo)         | universal domains | 📦 [GitHub raw](https://github.com/marslo/ifonts/raw/main/ifonts.user.css) \| [userstyles.world](https://userstyles.world/api/style/5264.user.css)                  | 🏘 [marslo/ifonts](https://github.com/marslo/ifonts)                 |
| iFonts GitHub (marslo)  | github            | 📦 [GitHub raw](https://github.com/marslo/ifonts-github/raw/main/ifonts-github.user.css) \| [userstyles.world](https://userstyles.world/api/style/30123.user.css)   | 🏘 [marslo/ifonts-github](https://github.com/marslo/ifonts-github)   |
| iFonts Jenkins (marslo) | jenkins           | 📦 [GitHub raw](https://github.com/marslo/ifonts-jenkins/raw/main/ifonts-jenkins.user.css) \| [userstyles.world](https://userstyles.world/api/style/30122.user.css) | 🏘 [marslo/ifonts-jenkins](https://github.com/marslo/ifonts-jenkins) |

> [!NOTE]
> `github` and `jenkins` were split into the standalone styles above — `ifonts` no longer styles them. Install all three for full coverage.

> [!IMPORTANT]
> Fonts are referenced by family name — install them locally first ( see [fonts download](#fonts-download) ). Missing fonts fall back to the next one in the stack.

## Scope

| SECTION       | SITES                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| global        | every `http(s)` site, except the excluded ones below                                                                                       |
| excluded      | jenkins / github ( own styles ), font sites, `localhost` / `127.0.0.1`, `sharepoint.com`, `shields.io`, `*.github.dev`, `w3schools.com`, … |
| site-specific | Groovy Web Console, Confluence ( `ewiki.*` ), jqplay, programmingfonts, gitblit, FOSSA, git-scm, Gemini, Claude                            |

> [!TIP]
> Exclusions live in the first `@-moz-document regexp(...)` negative lookahead — edit it ( Stylus → edit style ) to opt a site in or out.

## Configuration

Stylus → style ⚙ **Configure**:

| OPTION            | VARIABLE                  | DEFAULT ( FIRST ENTRIES )                                                                                                             |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Sans Fonts        | `font-family-sans`        | `Titillium Nerd Font Upright`, `Titillium Nerd Font`, `Gisha Nerd Font`, `Recursive Sans Casual Static Nerd Font`, …                  |
| Mono Fonts        | `font-family-mono`        | `OperatorMonoSSmLig Nerd Font Mono`, `OperatorMonoLig Nerd Font Mono`, `OperatorMono Nerd Font Mono`, `BlexMonoLig Nerd Font Mono`, … |
| Handwritten Fonts | `font-family-handwritten` | `Papyrus Nerd Font`, `fantasy`                                                                                                        |
| Icon Fonts        | `font-family-icon`        | `Google Material Icons`, `Material Icons Extended`, Font Awesome, … ( applied to icon elements so glyphs still render )               |

## Screenshots

| VERSION  | FONT                                        | PREVIEW                                                                      |
| -------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| `v2.2.2` | Operator Mono Lig Nerd Font Mono — devicons | ![devicons](./screenshots/devicons.v2.2.2.png)                               |
| `v2.2.2` | Operator Mono Lig Nerd Font Mono — github   | ![github](./screenshots/github.v2.2.2.png)                                   |
| `v2.1.7` | Recursive Sans Casual Static                | ![Recursive Sans Casual Static](./screenshots/font-ubuntu-v2.1.7-marslo.png) |
| `v2.1.7` | MFeltPenPRC                                 | ![MFeltPenPRC](./screenshots/font-ubuntu-v2.1.7-marslo-MFeltPenPRC.png)      |
| `v2.1.7` | Grandstander                                | ![Grandstander](./screenshots/font-ubuntu-v2.1.7-marslo-Grandstander.png)    |

## Fonts download

> [!TIP]
> More details: [iMarslo: fonts](https://marslo.github.io/ibook/tools/fonts.html)

### Sans

| FONT                         | NERD FONT                                                                                                         | UPSTREAM                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Recursive Sans Casual Static | [Recursive Sans Casual Static Nerd Font](https://github.com/marslo/fonts/tree/fonts/Recursive/RecursiveDesktopNF) | [releases](https://github.com/arrowtype/recursive/releases) \| [Recursive](https://www.recursive.design/)              |
| Ubuntu                       | —                                                                                                                 | [ubuntu](https://design.ubuntu.com/font) \| [preview](https://fonts.google.com/specimen/Ubuntu)                        |
| Candara                      | [Candara Nerd Font](https://github.com/marslo/fonts/tree/fonts/Candara)                                           | [Candara](https://www.dafontfree.io/candara-font)                                                                      |
| Gisha                        | [Gisha Nerd Font](https://github.com/marslo/fonts/tree/fonts/Gisha)                                               | [Gisha](https://learn.microsoft.com/en-us/typography/font-list/gisha)                                                  |
| Titillium                    | [Titillium Nerd Font](https://github.com/marslo/fonts/tree/fonts/Titillium)                                       | [Titillium](https://fonts.adobe.com/fonts/titillium-web) \| [preview](https://fonts.google.com/specimen/Titillium+Web) |

### Mono

| FONT            | NERD FONT                                                                                                                                                                                                  | UPSTREAM                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Operator Mono   | [OperatorMonoLig Nerd Font Mono](https://github.com/marslo/fonts/tree/fonts/Operator/OperatorMonoLigNF) \| [OperatorMono Nerd Font Mono](https://github.com/marslo/fonts/tree/fonts/Operator/OperatorMono) | —                                                                                                                  |
| Monaco          | [Monaco Nerd Font Mono](https://github.com/marslo/fonts/tree/fonts/Monaco)                                                                                                                                 | [Monaco](https://www.cufonfonts.com/font/monaco)                                                                   |
| Rec Mono Casual | [RecMonoCasual Nerd Font Mono](https://github.com/marslo/fonts/tree/fonts/Recursive/RecursiveCodeNF/RecMonoCasual)                                                                                         | [Rec Mono Casual](https://github.com/arrowtype/recursive/tree/main/fonts/ArrowType-Recursive-1.085/Recursive_Code) |
| Comic Mono      | [ComicMono Nerd Font Mono](https://github.com/marslo/fonts/tree/fonts/ComicMono)                                                                                                                           | [Comic Mono](https://dtinth.github.io/comic-mono-font/)                                                            |
| Gohu            | [Gohu](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Gohu)                                                                                                                             | —                                                                                                                  |

### More

- [Nerd Fonts Patched by v3.2.1.1](https://github.com/marslo/fonts/tree/fonts) | [nerd-font](https://www.nerdfonts.com/font-downloads) | [ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts)
- [powerline/fonts](https://github.com/powerline/fonts)

## Features

### Gerrit code review

Code blocks in Gerrit comments render as a dark rounded card in the mono font. Pick a background to match the page:

| BACKGROUND | STYLE                                               | PREVIEW                                                   |
| ---------- | --------------------------------------------------- | --------------------------------------------------------- |
| `#083750`  | [solarized](https://ethanschoonover.com/solarized/) | ![solarized](./screenshots/gerrit-comments-solarized.png) |
| `#303030`  | dark                                                | ![dark](./screenshots/gerrit-comments-dark.png)           |
| `#3a122e`  | ubuntu                                              | ![ubuntu](./screenshots/gerrit-comments-ubuntu.png)       |

Current rule ( [ifonts.user.css#L564-L577](https://github.com/marslo/ifonts/blob/main/ifonts.user.css#L564-L577) ), default background `#272727`:

```css
/* gerrit code block */
.gr-formatted-text-0 gr-linked-text.pre.gr-formatted-text,
gr-linked-text[class*="pre"] {
  font-family: var(--font-family-mono) !important;
  font-size: var(--font-size-normal-mono) !important;
  color: #c8c8c8 !important;
  background: #272727 !important;
  border-radius: .75em !important;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  overflow: auto;
  display: block;
  padding: 12px 12px 1px 12px;
  margin: 0px;
}
```

## Author

[Marslo Jiao](mailto:marslo.jiao@gmail.com) · [MIT License](./LICENSE)
