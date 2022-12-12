import CertificateItem from "../../components/CertificateItem";

const About = () => {
  return (
    <>
      <h2 className="text-[2em]">About</h2>
      <h3 className="text-[1.5em]">I&apos;m Hieu</h3>
      <p className="text-[1em]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>

      <h3 className="text-[1.25em] font-bold mt-[1.625em] mb-[0.625em]">
        Certificates
      </h3>
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
    </>
  );
};

export default About;
