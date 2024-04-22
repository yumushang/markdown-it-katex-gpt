# markdown-it-katex-gpt

A simple markdown-it plugin for rendering KaTeX formulas generated by the GPT series LLM.

Default parsing of (\\[, \\]) and (\\(, \\)) two sets of tokens.

## Installation

```
npm install markdown-it-katex-gpt
```

## Usage

```
import MarkdownIt from 'markdown-it'
import markdownItKatexGpt from 'markdown-it-katex-gpt'
```

```
const md = new MarkdownIt()
md.use(markdownItKatexGpt)
let result = md.render('\\[ F = G \\frac{{m_1 \\times m_2}}{{r^2}} \\]')
console.log(result)
```

### configure
```
md.use(markdownItKatexGpt, {
  delimiters: [
    { left: '\\[', right: '\\]' },
    { left: '\\(', right: '\\)' },
    { left: '$$', right: '$$' }
  ]
})
```