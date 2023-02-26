import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useBannerDetail from "../../hooks/Container/Home/Banner/hook";

const Banner = () => {
  const { link, DataUrl } = useBannerDetail();
  // console.log(DataUrl.allFile.edges);
  return (
    <section className="relative">
      <img
        className="bg-center bg-cover w-full h-full align-middle bg-no-repeat"
        src={DataUrl}
        alt="BannerImg"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-2xl sm:text-4xl lg:text-7xl text-black font-bold mb-24 gap-1">
          WANNABE 개발계의 AOMG
        </p>
        <button className=" bg-white sm:w-24 lg:w-36  font-bold py-4 px-8 rounded-full">
          <Link to={link}>지원하기</Link>
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full">
        <button
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          className=" font-bold py-4 px-8 text-4xl mb-20"
        >
          ⇩
        </button>
      </div>
    </section>
  );
};

export default Banner;
