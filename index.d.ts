import type MarkdownIt from "markdown-it";

/**
 * markdown-it plugin for rendering KaTeX formulas generated by the GPT series LLM
 * @param md 
 * @param options 
 */
declare function markdownItKatexGpt(md: MarkdownIt, options?: MarkdownItKatexGptOptions): void;

/**
 * 分隔符规则
 */
interface DelimiterItem {
  left: string
  right: string
  display: boolean
}

interface MarkdownItKatexGptOptions {
  delimiters: DelimiterItem[]
}

export default markdownItKatexGpt;
