import ProjectSlider from "@/components/Projects/ProjectSlider";
import Seo from "@/components/common/Seo";
import React from "react";

const projects = () => {
  return (
    <div>
      <Seo pageTitle={"مشاريعنا"}></Seo>
      <ProjectSlider></ProjectSlider>
    </div>
  );
};

export default projects;
