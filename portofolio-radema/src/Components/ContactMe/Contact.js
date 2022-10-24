import "./Contact.css";
import wa from "../../assets/Image/wa.png";
import tiktok from "../../assets/Image/tiktok.png";
import linkedin from "../../assets/Image/linkedin.png";
import medium from "../../assets/Image/medium.png";
import ig from "../../assets/Image/ig.png";
import github from "../../assets/Image/github.png";
import gitlab from "../../assets/Image/gitlab.png";

function Contact() {
  return (
    <div className="features" id="contact">
      <section
        className="features__coding"
        style={{ backgroundColor: "#002D91" }}
      >
        <h1>Contact Me</h1>
        <p>Lets Get In Touch...</p>
        <div className="features__languages">
          <a href="https://wa.me/6282267041718">
            <img src={wa} alt="wa logo" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/radema-panjaitan-a69263181/">
            <img src={linkedin} alt="linkedlin logo" />{" "}
          </a>
          <a href="https://gitlab.com/Radema2001">
            {" "}
            <img src={gitlab} alt="gitlab logo" />
          </a>
          <a href="https://github.com/radema2001">
            <img src={github} alt="github logo" />
          </a>
          <a href="https://medium.com/@rademapanjaitan09">
            <img src={medium} alt="medium logo" />{" "}
          </a>
          <a href="https://www.tiktok.com/@radema02">
            <img src={tiktok} alt="tiktok logo" />{" "}
          </a>
          <a href="https://www.instagram.com/rademapanjaitan02_/">
            {" "}
            <img src={ig} alt="ig logo" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
