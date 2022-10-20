import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="cursor-pointer mx-5">
      <Link href="/">
        <a>
          <h1 className="text-5xl text-center p-5 font-garamond">Days In Dysthymia</h1>
          <h2 className="text-lg text-center italic font-garamond">
              &quot;Reduce intellectual and emotional noise until you arrive at the silence
              of yourself, and listen to it.&quot;
          </h2>
          <h3 className="text-base text-center font-garamond">
              -Richard Brautigan
          </h3>
        </a>
      </Link>
    </div>
  )
}
