import "./About.css";
import * as React from "react";
interface IProps {
  height: number;
}
const About: React.SFC<IProps> = props => {
  let h = props.height / 3 - 45;
  return (
    <div>
      <div
        style={{
          marginTop: 10,
          position: "fixed",
          marginLeft: 10,
          color: "#137CBD",
          background: "rgba(41, 148, 214, 0.25)",
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 10
        }}
      >
        <h1>About Ted McCulloch</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                height={props.height - 75}
                src={require("../../Media/ted_mcculloch.jpg")}
              />
            </td>
            <td style={{ textAlign: "center", width: "100%" }}>
              <div style={{ textAlign: "center", margin: 10, width: "100%" }}>
                <div
                  style={{
                    background: "#106BA3",
                    marginRight: 20,
                    padding: 10,
                    borderRadius: 10,
                    paddingBottom:30
                  }}
                >
                  <h2>Where I'm Coming From</h2>
                  <div style={{ textAlign: "left", marginLeft: 15 }}>
                    I was born and raised in Palm Springs, CA. Looking for a
                    challenge I moved to the east coast for my undergraduate
                    education. I attended{" "}
                    <a href="https://en.wikipedia.org/wiki/Transgender">
                      Smith College
                    </a>
                    , receiving a double major in Computer Science and
                    Mathematics. While at Smith, I was received the
                    <a href="https://www.smith.edu/aemes/about_mckinley.php">
                      McKinley Honors Fellowship
                    </a>
                    , which funded my honors thesis.Currently I work fulltime as
                    technical staff member doing research at MIT.
                  </div>
                </div>
                <br />
                <div
                  style={{
                    background: "#0E5A8A",
                    marginRight: 20,
                    padding: 10,
                    borderRadius: 10
                    //height: h
                  }}
                >
                  <h2>Spare Time</h2>
                  Here are some non-work or programming related hobbies:
                  <div>
                    <ul>
                      <li>
                        <b>Piano</b>
                        <div>Self-taught, playing for years</div>
                      </li>

                      <li>guitar</li>
                      <li>painting</li>
                      <li>reading</li>
                    </ul>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    background: "#137CBD",
                    marginRight: 20,
                    padding: 10,
                    borderRadius: 10
                    // height: h
                  }}
                >
                  <h2>Future Plans</h2>
                  <div>I really enjoy my day-to-day life and job; however</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
