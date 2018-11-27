import Layout from "../components/MyLayout.js";
import Link from "next/link";
import MathArray from "../functions/MathArray.js";
import styled from "styled-components";
import Hex from "../functions/hexGen.js";
import colors from "../functions/discordColors.js";
const PostLink = props => (
  <div>
    <li>
      <Link
        as={`/p/${props.id}`}
        href={`/post?title=${props.title}&text=${props.text}`}
      >
        <a>{props.title}</a>
      </Link>
    </li>
    <style jsx>{`
      a {
        margin: 15px;
        color: orange;
      }
      li {
        padding-top: 20px;
        padding-bottom: 4px;
      }
      div {
        border: 1px solid #ddd;
        width: 240px;
      }
    `}</style>
  </div>
);
const cowWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "curabitur",
  "vel",
  "hendrerit",
  "libero",
  "eleifend",
  "blandit",
  "nunc",
  "ornare",
  "odio",
  "ut",
  "orci",
  "gravida",
  "imperdiet",
  "nullam",
  "purus",
  "lacinia",
  "a",
  "pretium",
  "quis",
  "congue",
  "praesent",
  "sagittis",
  "laoreet",
  "auctor",
  "mauris",
  "non",
  "velit",
  "eros",
  "dictum",
  "proin",
  "accumsan",
  "sapien",
  "nec",
  "massa",
  "volutpat",
  "venenatis",
  "sed",
  "eu",
  "molestie",
  "lacus",
  "quisque",
  "porttitor",
  "ligula",
  "dui",
  "mollis",
  "tempus",
  "at",
  "magna",
  "vestibulum",
  "turpis",
  "ac",
  "diam",
  "tincidunt",
  "id",
  "condimentum",
  "enim",
  "sodales",
  "in",
  "hac",
  "habitasse",
  "platea",
  "dictumst",
  "aenean",
  "neque",
  "fusce",
  "augue",
  "leo",
  "eget",
  "semper",
  "mattis",
  "tortor",
  "scelerisque",
  "nulla",
  "interdum",
  "tellus",
  "malesuada",
  "rhoncus",
  "porta",
  "sem",
  "aliquet",
  "et",
  "nam",
  "suspendisse",
  "potenti",
  "vivamus",
  "luctus",
  "fringilla",
  "erat",
  "donec",
  "justo",
  "vehicula",
  "ultricies",
  "varius",
  "ante",
  "primis",
  "faucibus",
  "ultrices",
  "posuere",
  "cubilia",
  "curae",
  "etiam",
  "cursus",
  "aliquam",
  "quam",
  "dapibus",
  "nisl",
  "feugiat",
  "egestas",
  "class",
  "aptent",
  "taciti",
  "sociosqu",
  "ad",
  "litora",
  "torquent",
  "per",
  "conubia",
  "nostra",
  "inceptos",
  "himenaeos",
  "phasellus",
  "nibh",
  "pulvinar",
  "vitae",
  "urna",
  "iaculis",
  "lobortis",
  "nisi",
  "viverra",
  "arcu",
  "morbi",
  "pellentesque",
  "metus",
  "commodo",
  "ut",
  "facilisis",
  "felis",
  "tristique",
  "ullamcorper",
  "placerat",
  "aenean",
  "convallis",
  "sollicitudin",
  "integer",
  "rutrum",
  "duis",
  "est",
  "etiam",
  "bibendum",
  "donec",
  "pharetra",
  "vulputate",
  "maecenas",
  "mi",
  "fermentum",
  "consequat",
  "suscipit",
  "aliquam",
  "habitant",
  "senectus",
  "netus",
  "fames",
  "quisque",
  "euismod",
  "curabitur",
  "lectus",
  "elementum",
  "tempor",
  "risus",
  "cras"
];

export default () => (
  <Layout>
    <link href="../CSS/Pages/index.css" rel="stylesheet" />
    <h1>My Blog</h1>
    <ul>
      <div class="mini" id="min">
        <a id="postTitle">Posts</a>
      </div>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      <PostLink
        id={
          cowWords[MathArray(cowWords.length)] +
          `-` +
          cowWords[MathArray(cowWords.length)] // BAD PRACTICE TO USE LIPSUM AS LINKS
        }
        title="Lorem Ipsum"
        text="I actually have no clue what im doing in this tutorial, please send help. But here some of the things Ive learned on November 26th, 2018. Linking Pages with Next.js, its pretty simple imo, much better than using expess to route shit together. Also I've learned to add global CSS... yea that failed horribly. 😂 And I think ive somewhat mastered functions in javascript ie(function () { //... }) NOT () => { //.. }. I litterally made this as long as I could to test out the Page function. Thanks for wasting your time reading this. :)."
      />
    </ul>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <style jsx>{`
      * {
        font-family: sans-serif;
      }
      h1 {
        color: ${colors.blurple};
        text-align: center;
        font-family: K2D, sans-serif;
      }
      p {
        text-align: center;
        padding: 10px;
        font-family: sans-serif, Arial;
        font-size: 24px;
        color: #99aab5;
      }
      ul,
      li {
        padding-bottom: 10px;
        list-style-type: none;
      }
      #min {
        width: 240px;
        border: 1px solid #ddd;
      }
      #postTitle {
        text-align: center;
        margin-left: 90px;
        font-size: 24px;
      }
      a {
        color: ${colors.blurple};
      }
    `}</style>
  </Layout>
);
