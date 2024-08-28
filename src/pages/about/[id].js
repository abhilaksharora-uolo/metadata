import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

// export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return {
//     paths: [],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       metaData: {
//         title: data.title || "Fallback Title",
//         description: data.body || "Fallback description",
//         keywords: "Next.js, SEO, React",
//         author: "API Author",
//         ogImage:
//           "https://yt3.googleusercontent.com/ht1hTptOqHoqiMB6wimK9DRIBpNejFl9tGLIUcWBgIgfYqHfVkByLCWShcrE7zRVwGm-6RAa=s900-c-k-c0x00ffffff-no-rj", // Replace with dynamic data if available
//         ogUrl: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
//       },
//     },
//   };
// }

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
