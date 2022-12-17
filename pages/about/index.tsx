import CertificateItem from "../../components/CertificateItem";
import { UserIcon } from "../../components/Icons";

const About = () => {
  return (
    <>
      <h2 className="text-[2em] md:flex md:items-center">
        <span className="hidden md:inline mr-[0.34375em]">
          <UserIcon className="w-[2.1875em] h-[2.1875em]" />
        </span>
        <span>About</span>
      </h2>
      <h3 className="text-[1.5em] md:mt-[1.375em]">I&apos;m Hieu</h3>
      <p className="text-[1em]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>

      <h3 className="text-[1.25em] font-bold mt-[1.625em] mb-[0.625em]">
        Certificates
      </h3>
      <div className="md:grid md:grid-cols-2 md:gap-[2em]">
        <CertificateItem
          title="Foundations of User Experience "
          completeDate="November 16, 2022"
          link="google.com"
        />
        <CertificateItem
          title="Foundations of User Experience "
          completeDate="November 16, 2022"
          link="google.com"
        />
      </div>
    </>
  );
};

export default About;
