import React from "react";
import Head from "next/head";
import { imageData } from "./data";
import MainComponent from "../page-components/MainComponent";

const Home = (props) => {
  const { query: { id = 1 } = {} } = props;

  return (
    <>
      <Head>
        <meta property="og:image" content={imageData[id]} />
        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
        <link
          rel="stylesheet"
          href="https://www.corcoran.com/homes-for-sale/474-middle-line-highway-bridgehampton-ny-11932/6418974/regionId=3?WebID=885241"
        />
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61c0a46123531ab8"
          async="async"
        ></script>
        <script async src="https://static.addtoany.com/menu/page.js" />
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?15"
          data-telegram-share-url="https://nextjs-addthis-k70scbjjn-ivgomez.vercel.app/"
          data-comment="check this out"
        />
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=61f81cc7ca74b10019d77fe3&product=inline-share-buttons"
          async="async"
        />
      </Head>
      <MainComponent />
    </>
  );
};

export async function getServerSideProps(context) {
  const { query, req, locale } = context;

  return {
    props: {
      query,
    },
  };
}

export default Home;
