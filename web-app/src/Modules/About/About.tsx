import "./About.css";
import * as React from "react";
interface IProps {
  height: number;
}
const About: React.SFC<IProps> = props => {
  return (
    <div>
      <div className="about-text">
        <h1>About Ted McCulloch</h1>
        <div style={{ textAlign: "left", margin: 10 }}>
          <div>
            I realize it may seem redundant to have an <i>about</i> page on
            website entirely about me already.
          </div>
          <ul>
            <li>born in Palm Springs, CA</li>
            <li>
              went to college at Smith College in Northampton, MA
              <ul>
                <li>matriculated as a woman</li>
                <li>graduated as a man</li>
                <li>you do the math</li>
              </ul>
            </li>
            <li>double majored in computer science and math</li>
            <li>
              did my senior thesis in evolutionary computation and graph theory
            </li>
            <li>
              hobbies
              <ul>
                <li>piano</li>
                <li>guitar</li>
                <li>painting</li>
                <li>reading</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-image">
        <img
          height={props.height - 50}
          src={require("../../Media/ted_mcculloch.jpg")}
        />
      </div>
    </div>
  );
};

export default About;