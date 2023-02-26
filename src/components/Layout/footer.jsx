import * as React from "react";
import useFooterDetail from "../../hooks/components/footer/hook";

const Footer = () => {
  const { data } = useFooterDetail();
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100px] bg-black">
      <ul className="flex flex-row w-[200px] justify-between mb-[10px] text-white">
        {data.map((data, index) => {
          return (
            <a key={index} href={data.url}>
              {data.name}
            </a>
          );
        })}
      </ul>
      <span className=" text-white">ⓒ devRent. All rights reserved.</span>
    </div>
  );
};

export default Footer;
