import * as React from "react";
import Layout from "../components/Layout/layout";
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

export const Head = () => <title>Home Page</title>;
