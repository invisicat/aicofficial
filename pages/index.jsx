import Layout from "../components/MyLayout.js";
import Link from "next/link";
import MathArray from "../functions/MathArray.js";
import styled from "styled-components";
import Hex from "../functions/hexGen.js";
import colors from "../functions/discordColors.js";
import cowWords from "../components/cowWords.js";
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

const Archiver = props => (
  <div>
    <li>
      <Link href={`/archive`}>
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
export default () => (
  <Layout>
    <link href="../CSS/Pages/index.css" rel="stylesheet" />
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"
      integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0"
      crossorigin="anonymous"
    />
    <h1>My Blog</h1>
    <ul>
      <div class="mini" id="min">
        <a id="postTitle">Posts</a>
      </div>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink
        id="learn-nextjs"
        title="Learn Next.js is awesome"
        text={
          "Totally its not ${<b>}CONFUSING</b> (see? bold text doesnt work) or does ${<b>this</b>}"
        }
      />
      <PostLink
        id="deploy-nextjs"
        title="Deploy apps with Zeit"
        text="Zeit? Whats Zeit?"
      />
      <PostLink
        id="standard-html"
        title="The Standard HTML."
        text="Standard HTML text is boring asf. Dont bother using it without javascript, jQUERY, Node, CSS etc. Trust me..."
      />
      <PostLink
        id={
          cowWords[MathArray(cowWords.length)] +
          `-` +
          cowWords[MathArray(cowWords.length)] // BAD PRACTICE TO USE LIPSUM AS LINKS
        }
        title="Lorem Ipsum"
        text="I actually have no clue what im doing in this tutorial, please send help. But here some of the things Ive learned on November 26th, 2018. Linking Pages with Next.js, its pretty simple imo, much better than using expess to route shit together. Also I've learned to add global CSS... yea that failed horribly. 😂 And I think ive somewhat mastered functions in javascript ie(function () { //... }) NOT () => { //.. }. I litterally made this as long as I could to test out the Page function. Thanks for wasting your time reading this. :)."
      />
      <Archiver title="Archive" />;
    </ul>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <div className="main">
      <p id="main_p">Next.js Experiemental Website.</p>
      <p>
        Experimental Website made in Next.js. Following the tutorial, this was
        the only way this was made. The Github can be acess from here:
        <i class="fab fa-github-square" />
        <Link href="https://github.com/andyiscool5463/aicofficial">
          <a>Github</a>
        </Link>
      </p>
    </div>
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
      .main {
        border: groove;
      }
      #main_p {
        text-align: center;
        color: orange;
      }
    `}</style>
  </Layout>
);
