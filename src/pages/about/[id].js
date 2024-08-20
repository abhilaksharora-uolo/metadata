import Head from "next/head";
import React from "react";

// `getStaticPaths` generates the list of paths to be pre-rendered
export async function getStaticPaths() {
  // Fetch the list of posts (or IDs)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Replace with your actual API
  const posts = await response.json();

  // Map over the posts to generate paths
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths, // Paths will look like { params: { id: '1' } }
    fallback: false, // See the "fallback" section below
  };
}

// `getStaticProps` fetches data based on the `id` for each page
export async function getStaticProps({ params }) {
  // Fetch data for the specific post based on `id`
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ); // Replace with your actual API
  const data = await response.json();

  return {
    props: {
      metaData: {
        title: data.title || "Fallback Title",
        description: data.body || "Fallback description",
        keywords: "Next.js, SEO, React", // Customize or derive keywords from data
        author: "API Author", // Customize or derive author from data
        ogImage:
          "https://yt3.googleusercontent.com/ht1hTptOqHoqiMB6wimK9DRIBpNejFl9tGLIUcWBgIgfYqHfVkByLCWShcrE7zRVwGm-6RAa=s900-c-k-c0x00ffffff-no-rj", // Replace with dynamic data if available
        ogUrl: `https://yourwebsite.com/about/${params.id}`, // Dynamic URL based on ID
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
      <div>About Post ID: {metaData.ogUrl.split("/").pop()}</div>
    </>
  );
};

export default About;
