import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { poems } from "../../data/volume-one";
// import axios from 'axios'

export default function PoemPage(props) {
  const router = useRouter();
  const currentRoute = router.asPath;
  const index = props.params.id;

  if (index > 1 && index < 31) {
    return (
      <div>
        <Header />
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 pl-5">
            <Link href={`/volume-one/${parseInt(props.params.id) - 1}`}>
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
            <Link href={`/volume-one/${parseInt(props.params.id) + 1}`}>
              {/* <Link href={`/volume-one/${poem.id}`}> */}
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
        {/* subtracting one from URL ID so we can start at index zero */}
        <h1 className="my-5 mx-5 text-2xl font-garamond">
          {poems[props.params.id - 1].title}
        </h1>
        {/* mapping over poem at the index of the URL ID minus one  */}
        <div className="my-5 mx-5 md:mx-12">
          {poems[props.params.id - 1].lines.map((line) => {
            if (line === "1") {
              return (
                <div key={props.params.id}>
                  <br></br>
                </div>
              );
              // 👆 Missing "key" prop for element in iterator
            } else return <p className="font-garamond text-lg">{line}</p>;
          })}
        </div>
      </div>
    );
  }
  if (index === "1") {
    return (
      <div>
        <Header />
        <div className="grid grid-cols-6 gap-4">
          <div className="col-end-8 pr-5">
            <Link href={`/volume-one/${parseInt(props.params.id) + 1}`}>
              {/* <Link href={`/volume-one/${poem.id}`}> */}
              <a>
                <button
                  type="button"
                  // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-white hover:bg-gradient-to-r from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
                  className="font-garamond"
                >
                  Next
                  {/* 👇 CHEVRON RIGHT SVG */}
                  {/* <svg
                    // className="w-5 h-5"
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
        {/* subtracting one from URL ID so we can start at index zero */}
        <h1 className="my-5 mx-5 text-2xl font-garamond">
          {poems[props.params.id - 1].title}
        </h1>
        {/* mapping over poem at the index of the URL ID minus one  */}
        <div className="my-5 mx-5 md:mx-12">
          {poems[props.params.id - 1].lines.map((line) => {
            if (line === "1") {
              return (
                <div key={props.params.id}>
                  <br></br>
                </div>
              );
            } else return <p className="text-lg font-garamond">{line}</p>;
          })}
        </div>
      </div>
    );
  }
  if (index === "31") {
    return (
      <div>
        <Header />
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 pl-5">
            <Link href={`/volume-one/${parseInt(props.params.id) - 1}`}>
              <a>
                <button
                  type="button"
                  // className="inline-flex items-center px-2 py-1 font-medium rounded-md text-black bg-white hover:bg-gradient-to-l from-white via-slate-400 to-black hover:text-gray-100 opacity-50 hover:opacity-100 text-sm"
                  className="font-garamond"
                >
                  {/* 👇 CHEVRON LEFT SVG */}
                  {/* <svg
                    className="w-5 h-5"
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
        </div>
        {/* subtracting one from URL ID so we can start at index zero */}
        <h1 className="my-5 mx-5 text-xl">
          {poems[props.params.id - 1].title}
        </h1>
        {/* mapping over poem at the index of the URL ID minus one  */}
        <div className="my-5 mx-5 md:mx-12">
          {poems[props.params.id - 1].lines.map((line) => {
            if (line === "1") {
              return (
                <div key={props.params.id}>
                  <br></br>
                </div>
              );
            } else return <p className="font-garamond">{line}</p>;
          })}
        </div>
      </div>
    );
  }
}

// here we only fetch the poem we want using the params as the id
export async function getStaticProps({ params }) {
  // fuck it, lets use the api now that we have endpoints
  // const res = await fetch(`http://localhost:3000/api/volume-one/${params.id}`, {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // const res = await axios.get(`http://localhost:3000/api/volume-one/${params.id}`)
  // what is fucking up here?
  return {
    props: {
      // we werent passing params back in as props so we couldn't access the ID from the URL
      params,
      // something like this,
      // poem: res
      // then we would be only passing in the correct single poem to the main page component
    },
  };
}

// here we fetch all the poems
// and define the dynamic path slug to be the id of the poem
export async function getStaticPaths() {
  //  👇 since we are going back to the api, we should prob use it instead of the global import
  // const res = await fetch("http://localhost:3000/api/volume-one/", {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // const res = await axios.get("http://localhost:3000/api/volume-one/")
  // const paths = res.poems.map((poem) => {
  //   return {params: {id: poem.id.toString()}}
  // })

  // still using global import bc I suck
  const paths = poems.map((poem) => {
    return { params: { id: poem.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
