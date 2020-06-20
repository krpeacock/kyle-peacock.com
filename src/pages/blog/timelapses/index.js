import React, { useEffect } from "react";
import { navigate } from "gatsby";

function Index() {
  useEffect(() => {
    navigate("blog/timelapses/jfk-great-highway");
  }, []);
  return <>Redirecting...</>;
}

export default Index;
