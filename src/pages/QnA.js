import * as React from "react"
import Layout from "../components/Layout/layout"
import QnA from "../container/QnA/QnA"

const QnAPage = () => {
  return (
    <main>
      <Layout>
        <QnA/>
      </Layout>
    </main>
  )
}

export default QnAPage

export const Head = () => <title>devRent</title>
