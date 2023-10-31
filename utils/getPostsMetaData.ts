import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type PostMetaData = {
  slug: string;
  frontmatter: { [key: string]: any };
};
export const getPostMetaDatas = () => {
  const folder = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const postMetaDatas = markdownPosts.map((file) => {
    const slug = file.replace(".md", "");
    const readFile = fs.readFileSync(`${folder}/${file}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    } as PostMetaData;
  });

  return postMetaDatas;
};
