import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth bg-white antialiased">
        <Head>
            <meta charSet="utf-8" />
            {/* <link rel="icon" type="image/png" href="/images/favicon.png" /> */}

            {/* ROBOTS.TXT TAG */}
            {/* <meta name="robots" content="index, follow" /> */}

            {/* OPEN GRAPH */}
            {/* COPIED AND PASTED FROM MY PERSONAL SITE: WE CAN CHANGE THIS ALL LATER AFTER DEPLOYMENT */}
            {/* <meta property="og:site_name" content="Adam Hunter" key="ogsitename" />
            <meta property="og:title" content="Adam Hunter" key="og:title" />
            <meta property="og:description" content="Adam Hunter is a full stack developer software engineer specializing in python and javascript with an emphasis on react.  This is his next.js portfolio and blog." key="ogdesc" />
            <meta property="og:url" content="https://www.adamhunter.website/" key="ogurl" />
            <meta property="og:image" content="https://www.adamhunter.website/images/adamlaptop.png" key="ogimage" />
            <meta property="og:type" content="website" />

            <link rel="canonical" href="https://www.adamhunter.website/" /> */}

            {/* GOOGLE FONT CDN */}
                {/* EB Garamond */}
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

// The only tag that Vercel suggests not to use in the _document.js file is the viewport tag

// _document.js file will extend the default document used on every page, which will control the HTML structure. This is where you can put links for external files, such as linking a font from Google Fonts, and is a good place for meta tags that will remain constant throughout the site.