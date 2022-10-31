import { useParams } from 'react-router-dom'
import Nav from './components/nav'

import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { transpile } from 'typescript'
SyntaxHighlighter.registerLanguage('jsx', jsx)

function Preview() {
  const [viewCode, setVieCode] = useState(true)
  const params = useParams()
  const Component = require(`./components/404/${params.component}`).default
  const { htmlTemplate } = require(`./components/404/${params.component}`)
  const [copied, setCopied] = useState(false)
  return (
    <>
      <Nav />
      {!viewCode && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Component />
        </div>
      )}
      {viewCode && (
        <div className="overflow-auto text-xs rounded-md m-4">
          {copied === false && (
            <img
              src="/copy-Icon.svg"
              alt="Copy Icon"
              className="translate-y-3 absolute right-6 z-50 cursor-pointer scale-90 h-16"
              onClick={async () => {
                await navigator.clipboard.writeText(htmlTemplate)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
            />
          )}
          {copied === true && (
            <h1 className="translate-y-6 absolute right-6 z-50 text-2xl h-16 text-white">
              Copied
            </h1>
          )}
          <SyntaxHighlighter
            customStyle={{ borderRadius: 5 }}
            language="html"
            style={materialDark}
          >
            {htmlTemplate}
          </SyntaxHighlighter>
        </div>
      )}
    </>
  )
}

export default Preview
