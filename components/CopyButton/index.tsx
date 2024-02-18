import { ButtonHTMLAttributes, useState } from "react";
import { CopyIcon, PasteIcon } from "../Icons";

type CopyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isShow: boolean;
  onClick?: () => void;
};

export const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { isShow, onClick, ...restProps } = props;
  const [isClickCopy, setIsClickCopy] = useState(false);

  const handleClick = async () => {
    onClick?.();
    setIsClickCopy(true);
    setTimeout(() => {
      setIsClickCopy(false);
    }, 2500);
  };

  return isShow ? (
    <button
      {...restProps}
      onClick={handleClick}
      className={`${props.className} text-white`}
    >
      {isClickCopy ? (
        <PasteIcon className="text-white" />
      ) : (
        <CopyIcon className="text-white" />
      )}
    </button>
  ) : null;
};
