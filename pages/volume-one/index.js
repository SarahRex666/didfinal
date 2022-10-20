import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { poems } from "../../data/volume-one";

export default function VolumeOne() {
  return (
    <div className="">
      <Head>
        <title>Days in Dysthymia: Vol. 1</title>
        <meta name="description" content="Days in Dysthymia: Volume 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 pl-5">
          <Link href="/toc">
            <a>
              <button
                type="button"
                // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-gray-100 hover:bg-gradient-to-l from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
                className="font-garamond"
              >
                {/* 👇 CHEVRON LEFT SVG */}
                {/* <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                > */}
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
                {/* </svg> */}
                Back
              </button>
            </a>
          </Link>
        </div>
        <div className="col-end-8 pr-5">
          <Link href="/volume-one/1">
            {/* <Link href={`/volume-one/${poem.id}`}> */}
            <a>
              <button
                type="button"
                // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-gray-100 hover:bg-gradient-to-r from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
                className="font-garamond"
              >
                Next
                {/* 👇 CHEVRON RIGHT SVG */}
                {/* <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                > */}
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                {/* </svg> */}
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className="my-5 mx-5 text-3xl text-center font-garamond">
        Volume 1
      </div>

      {/* 👇 testing data */}
      {/* <div className="text-center">
        {poems.map((poem) => (
          <div key={poem.id}>
            <p>{poem.title}</p>
            <p>{poem.lines}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
