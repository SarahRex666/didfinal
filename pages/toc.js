import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const volumes = [
  {
    name: "Volume I  (2015 - 2020)",
    url: "/volume-one",
    chapter: [
      { title: "I", url: "/volume-one/1" },
      { title: "II", url: "/volume-one/2" },
      { title: "III", url: "/volume-one/3" },
      { title: "IV", url: "/volume-one/4" },
      { title: "V", url: "/volume-one/5" },
      { title: "VI", url: "/volume-one/6" },
      { title: "VII", url: "/volume-one/7" },
      { title: "VIII", url: "/volume-one/8" },
      { title: "IX", url: "/volume-one/9" },
      { title: "X", url: "/volume-one/10" },
      { title: "XI", url: "/volume-one/11" },
      { title: "XII", url: "/volume-one/12" },
      { title: "XIII", url: "/volume-one/13" },
      { title: "XIV", url: "/volume-one/14" },
      { title: "XV", url: "/volume-one/15" },
      { title: "XVI", url: "/volume-one/16" },
      { title: "XVII", url: "/volume-one/17" },
      { title: "XVIII", url: "/volume-one/18" },
      { title: "XIX", url: "/volume-one/19" },
      { title: "XX", url: "/volume-one/20" },
      { title: "XXI", url: "/volume-one/21" },
      { title: "XXII", url: "/volume-one/22" },
      { title: "XXIII", url: "/volume-one/23" },
      { title: "XXIV", url: "/volume-one/24" },
      { title: "XXXV", url: "/volume-one/25" },
      { title: "XXVI", url: "/volume-one/26" },
      { title: "XXVII", url: "/volume-one/27" },
      { title: "XXVIII", url: "/volume-one/28" },
      { title: "XXIX", url: "/volume-one/29" },
      { title: "XXX", url: "/volume-one/30" },
      { title: "XXXI", url: "/volume-one/31" },
    ],
  },
  {
    name: "Volume II  (2021 - 2022)",
    url: "/volume-two",
    chapter: [
      { title: "Love Poem", url: "/volume-two/1" },
      { title: "What Death Leaves Behind", url: "/volume-two/2" },
      {
        title: "On The Shores of the Sea, the Rocks Quivered",
        url: "/volume-two/3",
      },
      { title: "Remember You", url: "/volume-two/4" },
      { title: "The Sparrow and the Baby", url: "/volume-two/5" },
      { title: "I Have Forgotten The Man's Name", url: "/volume-two/6" },
      { title: "The Body of the Enemy", url: "/volume-two/7" },
      { title: "Tree", url: "/volume-two/8" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 👇 so this 'readline' thing works in reg node.js, idk if/how for next.js yet
// its a way to make command line interactive and able to take input from the user
// const inputFunction = () => {
//   const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });
// }

export default function NewToc() {
  return (
    <div className="">
      {/* <div className="bg-[url('/images/sr-painting-2.jpg')]"> */}
      <Head>
        <title>Days in Dysthymia: Table of Contents</title>
        <meta
          name="description"
          content="Days in Dysthymia: Table of Contents"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 pl-5">
          <Link href="/">
            <a>
              <button
                type="button"
                // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-white hover:bg-gradient-to-l from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
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
          <Link href="/volume-one">
            <a>
              <button
                type="button"
                // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-white hover:bg-gradient-to-r from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
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

      <h1 className="font-garamond text-2xl text-center">Table of Contents</h1>

      <div className="px-4 sm:px-6 lg:px-36 pb-10">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full">
                  <tbody className="bg-white">
                    {/* <tbody className="bg-white/70 backdrop-blur-lg"> */}
                    {volumes.map((volume) => (
                      <Fragment key={volume.name}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={1}
                            scope="colgroup"
                            className="bg-gray-50 px-4 py-2 text-center text-lg font-semibold text-gray-900 hover:text-gray-500 sm:px-6 font-garamond"
                          >
                            <Link href={volume.url}>
                              <a>{volume.name}</a>
                            </Link>
                          </th>
                        </tr>
                        {volume.chapter.map((volume, chapIdx) => (
                          <tr
                            key={volume.title}
                            className={classNames(
                              chapIdx === 0
                                ? "border-gray-300"
                                : "border-gray-200",
                              "border-t"
                            )}
                          >
                            <td className="whitespace-nowrap py-4 pl-10 pr-3 text-lg font-medium text-gray-900 hover:text-gray-500 sm:pl-6 font-garamond">
                              <Link href={volume.url}>
                                <a>{volume.title}</a>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {console.log(`\x1b[95;106m👋 Welcome\x1b[0m
     \x1b[30;103mto \x1b[0m
        \x1b[97;101mDays in Dysthymia\x1b[0m`)} */}
      {console.log(`\x1b[30;97m
   ,   ,
  /////|
 ///// |
|~~~|  | \x1b[95;106m👋 Welcome\x1b[0m
|===|  |
|D  |  | \x1b[30;103mto \x1b[0m
| I |  |
|  D| /  \x1b[97;101mDays in Dysthymia\x1b[0m
|===|/
'---'
\x1b[0m
\x1b[30;40mWe can hide shit with black text on black background.\x1b[0m`)}
    </div>
  );
}
