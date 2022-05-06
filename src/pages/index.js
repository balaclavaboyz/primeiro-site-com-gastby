import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I`m making this by following the gatsby tutorial</p>
      <StaticImage
        alt="eps fillers do one piece"
        src="../images/ex_one_piece_fillers.png"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
