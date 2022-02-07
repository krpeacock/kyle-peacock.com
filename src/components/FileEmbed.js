import * as React from "react";

function FileEmbed({ url, language, fileName }) {
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    fetch(url).then(async (value) => {
      const text = await value.text();
      setContent(text);
    });
  }, [url]);

  return (
    <pre class={`language-${language}`}>
      <code className={`language-${language}`}>
        {fileName
          ? `// ${fileName}
`
          : ``}
        {content}
      </code>
    </pre>
  );
}

export default FileEmbed;
