import Head from "next/head";
import React, { useState, useEffect } from "react";

const About = () => {
  const [metaData, setMetaData] = useState({
    title: "Default Title",
    description: "Default description",
    keywords: "Default keywords",
    author: "Default author",
  });

  useEffect(() => {
    // Fetch the JSON data
    fetch("https://jsonplaceholder.typicode.com/posts/1") // Replace this with your actual JSON URL
      .then((response) => response.json())
      .then((data) => {
        // Update the metadata state with the fetched data
        setMetaData({
          title: data.title || "Fallback Title",
          description: data.body || "Fallback description",
          keywords: "Next.js, SEO, React", // Customize or derive keywords from data
          author: "API Author", // Customize or derive author from data
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>About</div>
    </>
  );
};

export default About;
