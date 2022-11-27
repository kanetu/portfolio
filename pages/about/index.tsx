import CertificateItem from "../../components/CertificateItem";

const About = () => {
  return (
    <>
      <h2 className="text-[32px]">About</h2>
      <h3 className="text-[24px]">I&apos;m Hieu</h3>
      <p className="text-[16px]">
        I am Tu Minh Hieu, you could call me Kane, a Frontend engineer. I have
        rich experience in building web applications, especially with ReactJS.
      </p>

      <h3 className="text-[20px] font-bold mt-[26px] mb-[10px]">
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
