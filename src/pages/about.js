import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

const About = ({ params }) => {
  const { id } = useParams();
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Hello 123" />

        <meta property="og:title" content="Hello" />
        <meta property="og:description" content="Hello 123" />
        <meta
          property="og:image"
          content="https://cdn.blume.vc/blume/media/images/startups/uolo/logo/uolo-logo-purple.f1670267324.jpeg"
        />
      </Head>
      <div>About Us {id}</div>
    </>
  );
};

export default About;
