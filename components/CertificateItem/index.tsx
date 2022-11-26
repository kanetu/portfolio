import { CertificateIcon } from "../Icons";

interface ICertificateItem {
  title: string;
  completeDate: string;
  link: string;
}
const CertificateItem: React.FC<ICertificateItem> = ({
  title,
  completeDate,
  link,
}) => {
  return (
    <div className="border rounded-[4px] px-[15px] py-[12px] mb-[15px]">
      <h3 className="font-bold text-[16px] truncate">{title}</h3>
      <h4 className="text-[15px]">Completed on {completeDate}</h4>
      <a className="flex items-start mt-[8px]">
        <CertificateIcon className="w-[35px] h-[28px]" />
        <span className="underline">View Certificate</span>
      </a>
    </div>
  );
};

export default CertificateItem;
