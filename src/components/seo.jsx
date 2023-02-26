import * as React from "react";
import useSeoDetail from "../hooks/components/seo/hook";

const Seo = () => {
  const { data } = useSeoDetail();
  return (
    <>
      <html lang="ko" />
      <title>{data.site.siteMetadata.title}</title>
      <meta
        property="description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
    </>
  );
};

export default Seo;
