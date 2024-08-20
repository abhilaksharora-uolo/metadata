import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  // Fetch the JSON data at build time
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Replace with your actual API
  const data = await response.json();

  return {
    props: {
      metaData: {
        title: data.title || "Fallback Title",
        description: data.body || "Fallback description",
        keywords: "Next.js, SEO, React", // Customize or derive keywords from data
        author: "API Author", // Customize or derive author from data
        ogImage: "https://yourwebsite.com/images/about-us.jpg", // Replace with dynamic data if available
        ogUrl: "https://yourwebsite.com/about", // Replace with dynamic URL if available
      },
    },
  };
}

const About = ({ metaData }) => {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <div>About</div>
    </>
  );
};

export default About;
