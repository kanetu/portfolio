import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogIcon } from "../../components/Icons";
import { PostMetaData, getPostMetaDatas } from "../../utils/getPostsMetaData";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../utils/imgLoader";
import calculateTime from "../../utils/calculateTime";

export const getStaticProps: GetStaticProps<{
  postMetaData: string;
}> = async () => {
  const postMetaData = JSON.stringify(getPostMetaDatas());
  return { props: { postMetaData } };
};

const Blog: React.FC<{
  postMetaData: string;
}> = ({ postMetaData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const postMetaDataConverted = JSON.parse(postMetaData) as PostMetaData[];
  const preViewSlugs = postMetaDataConverted
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .filter((post) => post.frontmatter.status === "publish")
    .map((metaData) => {
      const publishTime = calculateTime(metaData.frontmatter.date, new Date());
      return (
        <li
          key={metaData.slug}
          className="relative bg-project-black-50 rounded-[1em] m-[.5em]"
        >
          <Link href={`/blog/${metaData.slug}`}>
            <span className="absolute z-10 right-0 text-white bg-project-black-700 px-2 py-1 rounded-[0_1em_0_1em]">
              {publishTime.value} {publishTime.label} ago
            </span>
            <Image
              loader={imageLoader}
              src={metaData.frontmatter.thumbnail}
              width="0"
              height="0"
              sizes="100vw"
              className="max-h-[10em] w-full rounded-t-[1em] object-cover"
              alt={metaData.frontmatter.thumbnail}
            />
            <span className="block p-[1em_1.25em_1.25em_1.25em]">
              <div>
                {metaData.frontmatter.tags.map((tag: string) => (
                  <span
                    key={`${metaData.slug}-${tag}`}
                    className={`pr-2 mr-1 rounded italic`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="font-semibold">{metaData.frontmatter.title}</p>
              <span className="block">
                {metaData.frontmatter.description.slice(0, 100)}...
              </span>
            </span>
          </Link>
        </li>
      );
    });

  return (
    <>
      <h2 className="text-[1.5em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em] md:ml-[-5px]">
          <BlogIcon className="w-[2.1875em] h-[2.1875em]" />
        </span>
        <span>Blog</span>
      </h2>
      <p className="font-normal text-[1em]">Some writing from me! yah 🍕</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1.625em]">
        {preViewSlugs}
      </ul>
    </>
  );
};

export default Blog;
