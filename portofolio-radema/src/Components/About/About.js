import "./About.css";
import Sipincur from "../../assets/Image/Sipincur.jpeg";
import wisuda from "../../assets/Image/wisuda.jpeg";

const About = () => {
  return (
    <div className="a" id="About">
      <div className="a-left" About>
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Sipincur} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I’ve always sought out opportunities and challenges that are
          meaningful to me
        </p>
        <p className="a-desc">
          Current Focus: Front End Developer // QA Manual
        </p>
        <div className="a-award">
          {/* <img src={wisuda} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title">EDUCATION</h4>
            <p className="a-award-desc">
              D3 Computer of Technology - Del Institute Of Technology
            </p>
            <p>2019 - 2022</p>
            <p>IPK:3.18</p>
          </div>
        </div>
        <div className="a-award">
          {/* <img src={wisuda} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title">Skill</h4>
            <ul lassName="a-award-desc">
              <li>
                Excel at Web Development: HTML, PHP, CSS, Javascript, React JS{" "}
              </li>
              <li>Knowledge of API, Postman, JSON,Git</li>
              <li>Microsoft Word, Microsoft Excel, Visio, figma </li>
              <li>
                Software Development Life Cycle (SDLC), Software Testing Life
                Cycle (STLC){" "}
              </li>
              <li>Hands-on with Trello and Taiga </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
