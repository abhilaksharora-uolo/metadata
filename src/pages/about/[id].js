import Head from "next/head";
import React from "react";

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();

  return {
    props: {
      metaData: {
        title: data.title || "Fallback Title",
        description: data.body || "Fallback description",
        keywords: "Next.js, SEO, React",
        author: "API Author",
        ogImage:
          "https://yt3.googleusercontent.com/ht1hTptOqHoqiMB6wimK9DRIBpNejFl9tGLIUcWBgIgfYqHfVkByLCWShcrE7zRVwGm-6RAa=s900-c-k-c0x00ffffff-no-rj", // Replace with dynamic data if available
        ogUrl: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
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
