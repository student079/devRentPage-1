import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useBannerDetail from "../../hooks/Container/Home/Banner/hook";

const Banner = () => {
  const { link, DataUrl } = useBannerDetail();
  return (
    <section className="relative">
      <img
        className="bg-center bg-cover w-full h-full align-middle bg-no-repeat"
        src={DataUrl}
        alt="BannerImg"
      />
      <div className="absolute xs:top-1/2 sm:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="xs:text-xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-24">
          WANNABE개발계의
          <br /> AOMG
        </p>
        <button className=" bg-white  sm:w-32 md:w-40 md:h-14 lg:w-48 lg:h-16 xl:w-52 xl:h-20 font-bold  px-8 rounded-full">
          <Link
            className=" xs:text-[10px] sm:text-base md:text-xl lg:text-3xl xl:text-3xl "
            to={link}
          >
            지원하기
          </Link>
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          className="absolute xs:hidden sm:hidden md:hidden lg:hidden xl:text-6xl left-1/2 -bottom-[400px] transform -translate-x-1/2 text-center font-bold py-4 px-8 mb-20 text-white"
        >
          ⇩
        </button>
      </div>
    </section>
  );
};

export default Banner;
