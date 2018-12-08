import Header from "../components/Header.js";
import Layout from "../components/ContactLayout.js";
const Page = props => (
  <Layout>
    <div id="wrapper">
      <h1>Contact</h1>
      <h4>Contact AndyIsCool5463.</h4>
      <span align="center" id="imgspan">
        <img
          id="avatar"
          align="center"
          class="transform"
          src="https://cdn.discordapp.com/avatars/201825529333153792/3080cba771fae176926c91122dcdd6c1.png?size=128"
        />
      </span>
      <h2>Methods</h2>
      <div align="center" id="methodDiv">
        <span className="methods">
          <a href="#email">Email</a>
        </span>
        <span className="methods">Discord</span>
        <span className="methods">Twitter</span> <i class="fab fa-discord" />
        <span className="methods">Github</span>
      </div>
      <h1 id="aboutmeHead">About me.</h1>
      <p id="aboutmetext">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <div id="email">
        <h1>Email</h1>
        <p id="emailtext">
          You can email me to None@none.com or use the promt below!
        </p>
        <h2>Form</h2>
        <form align="center">
          <p className="label">First Name</p>
          <input type="text" name="firstname" className="nameInput" />
          <p className="label">Last Name</p>
          <input type="text" name="lastname" className="nameInput" />
          <br />
          <p className="label">Email</p>
          <input type="email" name="email" className="nameInput" />
          <br />
          <p className="label">Message</p>
          <textArea className="textarea" />
          <br />
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Montserrat");
      h1,
      h2,
      h4 {
        color: white;
        font-family: Montserrat;
        text-align: center;
      }
      .transform:hover {
        transform: rotate(360deg);
      }
      #aboutmeHead {
        margin-top: 200px;
      }
      .nameInput {
        max-width: 150px;
        margin: 0px, 10px, 10px, 10px;
      }
      .textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
      }
      .submit {
        margin: 5px;
      }
      #emailtext {
        text-align: center;
        color: white;
        font-family: Montserrat;
        margin-bottom: 140px;
      }
      #aboutmetext {
        margin: 100px;
        color: white;
        text-align: center;
        font-family: Montserrat;
        max-width: -50%;
      }
      #methodDiv {
        margin: 10px auto 20px auto;
      }
      .methods {
        border: 1px solid #fff;
        background: skyblue;
        padding: 10px;
        text-align: center;
        font-size: 24px;
        margin: 20px;
        color: white;
      }
      h2 {
        margin-top: 60px;
      }
      #avatar {
        border-radius: 50%;
        text-align: center;
        border: 1px solid black;
        filter: drop-shadow(0 0 0.75rem white);
        transition: all 1500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      #avatar:hover {
        border-radius: 0%;
        filter: drop-shadow(0 0 0.75rem crimson);
        transform: rotate(360deg);
      }
      #imgspan {
        margin-left: 46.5%;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `}</style>
  </Layout>
);
export default Page;
