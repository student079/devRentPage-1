import * as React from "react";
import useQnADetail from "../../hooks/container/QnA/hook"

const QnA = () => {
  const data = useQnADetail()
  return (
    <section className="w-auto h-auto flex flex-col justify-start items-center mt-[100px]">
      <h1 class="text-6xl">FAQ</h1>
      <p className="w-auto h-auto flex flex-col justify-start items-center mt-[50px]">자주 묻는 질문</p>
      <br/>
            {data.map(element => {
              return (
                <div
                  className=" w-[1000px] mb-[100px] flex flex-row justify-between"
                >
                  <span className=" w-[200px] text-[30px] font-semibold mr-[20px]">
                    {element.question}
                  </span>
                  <ul className=" w-[600px]">
                    {element.answer}
                  </ul>
                </div>
              );
            })}
      <br/>
      <h1 class="text-6xl" >문의하기</h1>
      <p className="w-auto h-auto flex flex-col justify-start items-center mt-[50px]">Instagram</p>
      <br/>
      <a href="https://www.instagram.com/devrent_official/">https://www.instagram.com/devrent_official/</a>
      <br/>
    
      </section>
  );
};

export default QnA;
