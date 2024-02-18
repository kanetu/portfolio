import { useEffect, useMemo, useRef } from "react";
import { CopyButton } from "../../CopyButton";

interface CodeBlockProps {
  className: string;
  children: React.ReactNode;
}
const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const { className, children } = props;
  const ref = useRef(null);
  const isShowCopy = useMemo(() => className?.includes("lang-"), [className]);
  const onClickCopy = () => {
    navigator.clipboard.writeText(children?.toString() || "");
  };

  useEffect(() => {
    if (className?.includes("lang-") && window.hljs) {
      window.hljs.highlightElement(ref.current);
      // hljs won't reprocess the element unless this attribute is removed
      (ref.current as any).removeAttribute("data-highlighted");
    }
  }, [className, children]);

  return (
    <>
      <CopyButton
        isShow={isShowCopy}
        onClick={onClickCopy}
        className="absolute right-[22px] top-[22px]"
      />
      <code {...props} ref={ref} />
    </>
  );
};

export default CodeBlock;
