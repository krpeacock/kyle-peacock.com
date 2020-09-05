import React, { useEffect } from "react";
import { navigate } from "gatsby";

function Index() {
  useEffect(() => {
    navigate("blog/air-quality/display");
  }, []);
  return <>Redirecting...</>;
}

export default Index;
