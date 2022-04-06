import React from "react";
import Head from "next/head";
import AgentList from "./page-components/AgentList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AgentList />
    </>
  );
}
