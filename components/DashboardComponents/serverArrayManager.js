import Layout from "../../components/MyLayout.js";
import MathArray from "../../functions/MathArray.js";
import { withRouter } from "next/router";
import Link from "next/link";

const Page = withRouter(props => {
  return props.array.map((f, i) => {
    return (
      <tr>
        <th>{f.name}</th>
        <th>
          <img
            className="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${f.id}/${
              f.icon
            }.png?size=64`}
          />
        </th>
        <th>{f.id}</th>
        <th>{f.owner}</th>
        <th>{f.permissions}</th>
      </tr>
    );
  });
});
export default Page;
