import { useParams } from "react-router-dom";
import Nav from "./components/nav";

import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { transpile } from "typescript";
SyntaxHighlighter.registerLanguage("jsx", jsx);

function Preview() {
    const [viewCode, setVieCode] = useState(true);
    const params = useParams();
    const Component = require(`./components/404/${params.component}`).default;
    const { htmlTemplate } = require(`./components/404/${params.component}`);
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="translate-y-3 absolute right-6 z-50 cursor-pointer scale-90"
                        onClick={async () => {await navigator.clipboard.writeText(htmlTemplate)}}
                    >
                        <path stroke="white" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="white" />
                    </svg>
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
    );
}

export default Preview;
