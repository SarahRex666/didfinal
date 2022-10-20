import React from "react";
import Link from "next/link";
import Header from "./Header";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

//  ⚠️ THE ROUTES ARE MANDATORY PROPS ⚠️

export default function Poem(props) {
  const { data, error } = useSWR("/api/volume-one", fetcher);

  console.log(data[0].title);

  return (
    <div>
      <Header />

      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 pl-5">
          <Link href={props.previous_route}>
            <a>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
                </svg>
                Back
              </button>
            </a>
          </Link>
        </div>
        <div className="col-end-8 pr-5">
          <Link href={props.next_route}>
            <a>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                Next
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                </svg>
              </button>
            </a>
          </Link>
        </div>
      </div>

      {/* <h1 className="my-5 mx-5 text-xl">{props.title}</h1>

      <div className="my-5 mx-5 md:mx-12">
        <p>{props.poem}</p>
        <p>{props.poem_line_2}</p>
        <p>{props.poem_line_3}</p>
        <p>{props.poem_line_4}</p>
        <p>{props.poem_line_5}</p>
        <p>{props.poem_line_6}</p>
        <p>{props.poem_line_7}</p>
        <p>{props.poem_line_8}</p>
        <p>{props.poem_line_9}</p>
        <p>{props.poem_line_10}</p>
        <p>{props.poem_line_11}</p>
        <p className="mt-4">{props.poem_paragraph_2}</p>
        <p>{props.poem_paragraph_2_line_2}</p>
        <p>{props.poem_paragraph_2_line_3}</p>
        <p>{props.poem_paragraph_2_line_4}</p>
        <p>{props.poem_paragraph_2_line_5}</p>
        <p>{props.poem_paragraph_2_line_6}</p>
        <p>{props.poem_paragraph_2_line_7}</p>
        <p>{props.poem_paragraph_2_line_8}</p>
        <p>{props.poem_paragraph_2_line_9}</p>
        <p>{props.poem_paragraph_2_line_10}</p>
        <p className="mt-4">{props.poem_paragraph_3}</p>
        <p>{props.poem_paragraph_3_line_2}</p>
        <p>{props.poem_paragraph_3_line_3}</p>
        <p>{props.poem_paragraph_3_line_4}</p>
        <p>{props.poem_paragraph_3_line_5}</p>
        <p>{props.poem_paragraph_3_line_6}</p>
        <p>{props.poem_paragraph_3_line_7}</p>
        <p>{props.poem_paragraph_3_line_8}</p>
        <p>{props.poem_paragraph_3_line_9}</p>
        <p>{props.poem_paragraph_3_line_10}</p>
        <p className="mt-4">{props.poem_paragraph_4}</p>
        <p className="mt-4">{props.poem_paragraph_5}</p>
        <p className="mt-4">{props.poem_paragraph_6}</p>
      </div> */}
    </div>
  );
}
