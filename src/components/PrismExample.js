import React, { useLayoutEffect } from "react";
import Prism from "prismjs";
import PrismDiff from "./PrismDiff";

const PrismExample = () => {
  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-javascript">var str = "text before diff";</code>
      {`
`}
      <PrismDiff
        string1={'const foo = "bar"'}
        string2={'const professionalVariable = "bar";'}
        mode="words"
      />
      {`
`}
      <code className="language-javascript">let textAfterDiff;</code>
    </pre>
  );
};

export default PrismExample;
