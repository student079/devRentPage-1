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

export function Head() {
  return <Seo />;
}