import * as React from "react";

function FileEmbed({ url, language, fileName }) {
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    console.log(url);
    fetch(url).then(async (value) => {
      const text = await value.text();
      console.log(text);
      setContent(text);
    });
  }, []);

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
