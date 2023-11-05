import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import shell from 'highlight.js/lib/languages/shell'
import css from 'highlight.js/lib/languages/css'
import plaintext from 'highlight.js/lib/languages/plaintext'
import { gfmHeadingId } from 'marked-gfm-heading-id'
// import domPurify from 'dompurify'
import { marked } from 'marked'
import 'highlight.js/styles/github-dark-dimmed.css'

import { FadeInBox } from '../../../_components/FadeInBox'

const { markedHighlight } = require('marked-highlight')

hljs.registerLanguage('python', python)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('css', css)
hljs.registerLanguage('plaintext', plaintext)

marked.use({
  headerIds: false,
  mangle: false,
})
marked.use(gfmHeadingId())
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: any, lang: any) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
)

type Props = {
  content: string
}

export function Content({ content }: Props) {
  return (
    <FadeInBox className="box w-full md-content">
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </FadeInBox>
  )
}
