import * as React from "react";
import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import Banner from "../container/home/banner";
import Project from "../container/home/project";
import Vision from "../container/home/vision";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Banner />
        <Project />
        <Vision />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>devRent</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap" rel="stylesheet"></link>
    </>
  );
};

<title>devRent</title>;
