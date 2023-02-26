import * as React from "react";
import useQnADetail from "../../hooks/container/QnA/hook";

const QnA = () => {
  const data = useQnADetail();
  return (
    <section className="w-auto h-auto flex flex-col justify-start items-center mt-[100px]">
      <h1 class="text-6xl font-semibold">FAQ</h1>
      <p className="w-auto h-auto flex-col justify-start items-center mt-[20px] mb-[50px] font-semibold">
        자주 묻는 질문
      </p>
      <br />
      <div>
        {data.map((element) => {
          return (
            <div className=" w-[1000px] mb-[100px] ">
              <span className=" w-[200px] text-[30px] font-semibold mr-[20px]">
                {element.question}
              </span>
              <ul className=" px-[30px]">
                {element.answer.map((a) => {
                  return <li className=" w-auto mt-[20px]">{a}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <br />
      
    </section>
  );
};

export default QnA;
