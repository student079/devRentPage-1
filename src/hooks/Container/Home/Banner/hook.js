import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function useBannerDetail() {
  const link =
    "https://docs.google.com/forms/d/1EwajjKzeGFgRZ7Tj0j3yYXEgUmDuNmkLQxcPcGVZJNM/edit";
  const DataUrl = './static/banner/BannerImg.jpg';
  return { link, DataUrl };
}
