import * as React from "react";
import useVisionDetail from "../../hooks/container/home/vision/hook.js";

const Vision = () => {
  const { data } = useVisionDetail();
  return (
    <section className="w-auto h-auto flex flex-col justify-start items-center mt-[100px]">
      {data.map((data, index) => {
        return (
          <div
            className=" w-[1000px] mb-[100px] flex flex-row justify-between"
            key={index}
          >
            <span className=" w-[200px] text-[30px] font-semibold mr-[20px]">
              {data.visionTitle}
            </span>
            <ul className=" w-[600px]">
              {data.visionAnswer.map((data, index2) => {
                return (
                  <div className=" relative mb-[50px]">
                    <span className=" text-[60px] font-extrabold absolute opacity-10 -top-[50px] -left-[50px]">
                      0{index2 + 1}
                    </span>
                    <li className="text-[25px] font-medium" key={index2}>
                      {data}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Vision;
