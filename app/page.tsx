'use client';

import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function Home() {
  const [value, setValue] = useState('');

  const highlightedCode = hljs.highlight(value, {
    language: 'javascript',
  }).value;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl">Beautify your code snippets</h1>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="code whitespace-pre"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>

        <div
          className="text-4xl"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </main>
  );
}
