import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";
import cowWords from "../components/cowWords";

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

const Page = withRouter(props => (
  <Layout>
    <h1>Archived Posts</h1>
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
    <PostLink
      id="secret36753720173-26262662180874"
      title="Secret 69"
      text="Secret!"
    />

    <style>{`
			h1 {
				color: orange;
			}
			p:hover {
				color: red;
			}
			`}</style>
  </Layout>
));

export default Page;
