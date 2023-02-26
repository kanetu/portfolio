import CertificateItem from "../../components/CertificateItem";
import { UserIcon } from "../../components/Icons";

const About = () => {
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

      <h3 className="text-[1.25em] font-bold mt-[1.625em] mb-[0.625em]">
        Certificates
      </h3>
      <div className="md:grid md:grid-cols-2 md:gap-[2em]">
        <CertificateItem
          title="Foundations of User Experience (UX) Design"
          completeDate="November 16, 2022"
          link="https://www.coursera.org/account/accomplishments/verify/9CU5ZRKZKNQH"
        />
        <CertificateItem
          title="Start the UX Design Process: Empathize, Define, and Ideate"
          completeDate="November 5, 2022"
          link="https://www.coursera.org/account/accomplishments/verify/7VDXKDA8N2QK"
        />
        <CertificateItem
          title="Build Wireframes and Low-Fidelity Prototypes"
          completeDate="December 18, 2022"
          link="https://www.coursera.org/account/accomplishments/verify/UEJ958UFQBBU"
        />
      </div>
    </>
  );
};

export default About;
