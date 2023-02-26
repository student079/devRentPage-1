import * as React from "react"
import Layout from "../components/Layout/layout"
import QnA from "../container/QnA/QnA"
import useQnADetail from "../hooks/container/QnA/hook"
import Seo from "../components/seo";

const QnAPage = () => {
    const data = useQnADetail()
    const qnas = data.map(element => <QnA question={element.question} answer={element.answer}/>)
  return (
    <main>
      <Layout>
        <QnA/>
      </Layout>
    </main>
  );
}

export default QnAPage

export function Head() {
  return <Seo />;
}
