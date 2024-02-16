import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getPostMetaDatas } from "../../utils/getPostsMetaData";
import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useRef } from "react";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postMetaDatas = getPostMetaDatas();
  const paths = postMetaDatas.map((metaData) => ({
    params: {
      slug: metaData.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const folder = path.join(process.cwd(), "posts");
  const file = fs.readFileSync(`${folder}/${slug}.md`);
  const { data: frontmatter, content } = matter(file);

  return {
    props: {
      frontmatter: JSON.stringify(frontmatter),
      content,
    },
  };
};

const Post: React.FC<{
  frontmatter: string;
  content: string;
}> = ({ frontmatter, content }) => {
  const fmConverted = JSON.parse(frontmatter);
  return (
    <>
      <h1 className="font-bold text-[2em]">{fmConverted.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown
          options={{
            overrides: {
              code: SyntaxHighlightedCode,
            },
          }}
        >
          {content}
        </Markdown>
      </article>
    </>
  );
};

function SyntaxHighlightedCode(props: any) {
  const ref = useRef(null);

  useEffect(() => {
    if (
      ref.current &&
      props.className?.includes("lang-") &&
      (window as any).hljs
    ) {
      (window as any).hljs.highlightElement(ref.current);

      // hljs won't reprocess the element unless this attribute is removed
      (ref.current as any).removeAttribute("data-highlighted");
    }
  }, [props.className, props.children]);

  return <code {...props} ref={ref} />;
}

export default Post;
