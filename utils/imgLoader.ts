import { ImageLoaderProps } from "next/image";

const imageLoader = ({ src }: ImageLoaderProps) => {
  return `https://raw.githubusercontent.com/kanetu/portfolio/main/public/${src}`;
};

export default imageLoader;
