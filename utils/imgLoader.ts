import { ImageLoaderProps } from "next/image";

const imageLoader = ({src}: ImageLoaderProps) => {
    return `/${src}`; 
}

export default imageLoader