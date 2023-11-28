import CertificateItem from "../../components/CertificateItem";
import { UserIcon } from "../../components/Icons";

const About = () => {
  const certificates = [
    {
      id: 1,
      title: "Foundations of User Experience (UX) Design",
      completeDate: "November 16, 2022",
      link: "https://www.coursera.org/account/accomplishments/verify/9CU5ZRKZKNQH",
    },
    {
      id: 2,
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      completeDate: "November 5, 2022",
      link: "https://www.coursera.org/account/accomplishments/verify/7VDXKDA8N2QK",
    },
    {
      id: 3,
      title: "Build Wireframes and Low-Fidelity Prototypes",
      completeDate: "December 18, 2022",
      link: "https://www.coursera.org/account/accomplishments/verify/UEJ958UFQBBU",
    },
    {
      id: 4,
      title: "Understanding Node.js: Core Concepts",
      completeDate: "November 28, 2023",
      link: "https://www.udemy.com/certificate/UC-544d2905-e7b9-414c-b992-bde18ddeaf02/",
    },
  ];
  return (
    <>
      <h2 className="text-[1.5em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em] md:ml-[-5px]">
          <UserIcon className="w-[2.1875em] h-[2.1875em]" />
        </span>
        <span>About</span>
      </h2>
      <p className="text-[1em]">
        I am proud to possess a wealth of experience and a range of certificates
        that demonstrate my commitment to staying up-to-date with the latest
        technologies.
      </p>

      <h3 className="text-[1.25em] mt-[1.625em] mb-[0.625em]">Certificates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[2em] lg:grid-cols-3 lg:gap-[2em]">
        {certificates.map((cert) => (
          <CertificateItem
            key={cert.id}
            title={cert.title}
            completeDate={cert.completeDate}
            link={cert.link}
          />
        ))}
      </div>
    </>
  );
};

export default About;
