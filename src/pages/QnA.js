import * as React from "react"
import Layout from "../components/Layout/layout"
import QnA from "../container/QnA/QnA"
import useQnADetail from "../hooks/container/QnA/hook"

const QnAPage = () => {
    const data = useQnADetail()
    const qnas = data.map(element => <QnA question={element.question} answer={element.answer}/>)
  return (
    <main class="bg-black text-white text-center">
      <Layout>
        <h1 class="text-6xl  ">FAQ</h1>
        <p>자주 묻는 질문</p>
        <br/>
        {qnas}
        <br/>
        <h1 class="text-6xl" >문의하기</h1>
        <p>메일</p>
        <br/>
        <p>인스타그램</p>
        <br/>
      </Layout>
    </main>
  )
}

export default QnAPage

export const Head = () => <title>devRent</title>
