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
    <div className="border border-project-gray rounded-[0.25em] px-[0.9375em] py-[0.75em] mb-[0.9375em]">
      <h3 className="font-bold text-[1em] truncate">{title}</h3>
      <h4 className="text-[0.9375em]">Completed on {completeDate}</h4>
      <a href={link} className="flex items-start mt-[0.5em]">
        <CertificateIcon className="w-[2.1875em] h-[1.75em]" />
        <span className="underline">View Certificate</span>
      </a>
    </div>
  );
};

export default CertificateItem;
