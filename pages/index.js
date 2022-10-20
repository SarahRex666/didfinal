import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Days in Dysthymia</title>
        <meta name="description" content="Days in Dysthymia by Sarah Rex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Link href="/toc">
        <a>
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
            class="p-20 mx-auto"
          ></img>
        </a>
      </Link>
    </div>
  );
}
