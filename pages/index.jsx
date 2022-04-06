import React from "react";
import Head from "next/head";
import AgentList from "./page-components/AgentList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61c0a46123531ab8"
          async="async"
        ></script>
      </Head>
      <AgentList />
    </>
  );
}
