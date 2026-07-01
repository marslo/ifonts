---
name: claude-ai-widen-stylus
description: Working Stylus userstyle to widen claude.ai conversation + home page to 85vw
metadata:
  type: reference
---

Stylus/userstyle that widens claude.ai to 85vw (mirrors the user's Gemini 85vw style). Verified working on both the conversation page and the empty/new home page as of 2026-06-30.

**Key debugging conclusion:** the real width cap is NOT the message column. It lives on the outermost `<main class="... max-w-7xl ... md:px-14 ...">` element — `max-w-7xl` plus large horizontal padding clamps everything. Widening the inner `max-w-2xl`/`max-w-3xl` containers alone fails because `main` still limits them. Fix = put 85vw on `main`, strip its padding, and let inner containers just fill 100%. claude.ai uses obfuscated Tailwind utility classes; stable hooks found: `data-user-message-bubble="true"` (user bubble), `max-w-3xl` (conversation column ≈816px), `max-w-2xl` (home input container), `max-w-7xl` (`<main>`).

```css
@-moz-document domain("claude.ai") {
  /* real width source: <main> has max-w-7xl + big padding — the outermost limit */
  main {
      max-width: 85vw !important;
      width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
  }
  /* inner containers just fill the widened main */
  div[class*="max-w-7xl"],
  div[class*="max-w-3xl"],
  div[class*="max-w-2xl"] {
      max-width: 100% !important;
      width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
  }
  /* user question bubble — keep at 60%, don't stretch full width */
  [data-user-message-bubble="true"] {
      max-width: 60% !important;
  }
  pre, .code-block, table { max-width: 100% !important; }
}
```

Diagnostic snippet (run in console) that located the width cap — walks up from a message logging every ancestor with a max-width and its rendered width; the layer where width stops growing is the knob:

```js
(() => { let el = document.querySelector('[data-user-message-bubble="true"], .font-claude-response'); const out=[]; while (el && el!==document.body){ const cs=getComputedStyle(el); if(cs.maxWidth!=='none'||cs.width!=='auto') out.push({tag:el.tagName.toLowerCase(),cls:el.className,maxW:cs.maxWidth,w:Math.round(el.getBoundingClientRect().width)+'px'}); el=el.parentElement;} console.table(out); return out;})()
```

If claude.ai redesigns and it breaks, re-run the diagnostic to find the new limiting class.
