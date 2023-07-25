import ProjectSlider from "@/components/Projects/ProjectSlider";
import Seo from "@/components/common/Seo";
import React from "react";
import { NextSeo } from "next-seo";
const projects = () => {
  return (
    <div>
      <Seo pageTitle={"مشاريعنا"}></Seo>
      <NextSeo
        title=" مشاريعنا "
        description="مساكن عريب الغقارية | مشاريعنا العقارية"
        openGraph={{
          type: "",

          url: "whttps://mareeb.vercel.app/projects",
          images: {
            url: "https://mareeb.vercel.app/images/img/kitchen-2400367_1920.jpg",
            width: 800,
            height: 600,
            alt: "مساكن عريب الغقارية | مشاريعنا العقارية",
          },
          site_name: "مساكن عريب العقارية",
        }}
      />
      <ProjectSlider></ProjectSlider>.
    </div>
  );
};

export default projects;
