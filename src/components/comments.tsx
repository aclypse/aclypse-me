import { FC } from "react";
import Gitalk from "gatsby-plugin-gitalk";
import "@suziwen/gitalk/dist/gitalk.css";

const Comments: FC<{ slug: string; title: string }> = props => {
  let gitalkConfig = {
    id: props.slug,
    title: props.title,
  };
  return <Gitalk options={gitalkConfig} />;
};

export default Comments;
