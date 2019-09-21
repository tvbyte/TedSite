import CourseTable from "./CourseTable/CourseTable";
import React, { useState } from "react";
import { Tag, Collapse } from "@blueprintjs/core";
import "./Courses.css";

interface IProps {}

const Courses: React.SFC<IProps> = props => {
  const [mathOpen, setMathOpen] = useState(true);
  const [cSOpen, setCSOpen] = useState(true);
  const [miscOpen, setMiscOpen] = useState(true);

  return (
    <div style={{ margin: 10 }}>
      <div className="course-title">
        <h1>Academic Courses</h1>
      </div>
      <div style={{}}>
        <Tag
          large
          fill
          icon="code"
          intent="primary"
          minimal
          interactive
          onClick={setCSOpen.bind(null, !cSOpen)}
        >
          <h2>Computer Science</h2>
        </Tag>
        <Collapse isOpen={cSOpen}>
          <div className="course-body">
            <CourseTable
              rows={[
                {
                  name:
                    "Honors Thesis: Exploring the Evolution of Ramsey Games",
                  number: "CSC430D",
                  year: "2017-2018",
                  college: "Smith College",
                  hours: 8
                },
                {
                  name: "Algorithms",
                  number: "CSC252",
                  year: "Spring 2018",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Advanced Programming Techniques",
                  number: "CSC220",
                  year: "Spring 2018",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Unsupervised Machine Learning",
                  number: "CSC390",
                  year: "Fall 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Introduction to Operating Systems",
                  number: "CSC262",
                  year: "Fall 2017",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Discrete and Computational Geometry",
                  number: "CSC274",
                  year: "Spring 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Theory of Computation",
                  number: "CSC250",
                  year: "Spring 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Microprocessor & Assembly Language",
                  number: "CSC231",
                  year: "Spring 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Evolution of Game Playing",
                  number: "CSC277H",
                  year: "Fall 2016",
                  college: "Hampshire College",
                  hours: 4
                },
                {
                  name: "Computer Graphics",
                  number: "CSC240",
                  year: "Fall 2016",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Programming with Data Structures",
                  number: "CSC212",
                  year: "Spring 2016",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Introduction to Computer Science and Programming",
                  number: "CSC111",
                  year: "Fall 2015",
                  college: "Smith College",
                  hours: 4
                }
              ]}
              headers
            />
          </div>
        </Collapse>
        <Tag
          large
          fill
          icon="function"
          intent="primary"
          interactive
          onClick={setMathOpen.bind(null, !mathOpen)}
          minimal
        >
          <h2>Mathematics</h2>
        </Tag>
        <Collapse isOpen={mathOpen}>
          <div className="course-body">
            <CourseTable
              rows={[
                {
                  name: "Advanced Topics: Partial Differential Equations",
                  number: "MTH364",
                  year: "Fall 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Combinatorics",
                  number: "MTH254",
                  year: "Spring 2017",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Introduction to Real Analysis",
                  number: "MTH281",
                  year: "Fall 2016",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Topics in Number Theory",
                  number: "MTH238",
                  year: "Fall 2016",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Graph Theory",
                  number: "MTH255",
                  year: "Spring 2016",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Introduction to Probability and Statistics",
                  number: "MTH220",
                  year: "Spring 2016",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Linear Algebra",
                  number: "MTH211",
                  year: "Fall 2015",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Introduction to Discrete Mathematics",
                  number: "MTH153",
                  year: "Spring 2015",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Calculus III",
                  number: "MTH212",
                  year: "Fall 2014",
                  college: "Smith College",
                  hours: 4
                },
                {
                  name: "Calculus BC",
                  number: "-",
                  year: "2013-2014",
                  college: "Palm Springs High School",
                  hours: 4
                },
                {
                  name: "Calculus AB",
                  number: "-",
                  year: "2012-2013",
                  college: "Palm Springs High School",
                  hours: 4
                }
              ]}
              headers
            />
          </div>
        </Collapse>

        <Tag
          large
          fill
          icon="book"
          intent="primary"
          minimal
          interactive
          onClick={setMiscOpen.bind(null, !miscOpen)}
        >
          <h2>Electives</h2>
        </Tag>
        <Collapse isOpen={miscOpen}>
          <div className="course-body">
            <CourseTable rows={[]} headers />

            <Tag fill icon="globe" intent="success" minimal>
              Bio
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Cells, Physiology, and Development",
                  number: "BIO150/151",
                  year: "Fall 2015",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Genetics, Evolution, and Molecular Biology",
                  number: "BIO152/153",
                  year: "Spring 2015",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Biomathematics Bootcamp",
                  number: "BMX120",
                  year: "Interim 2015",
                  college: "Smith College",
                  hours: 2
                },
                {
                  name: "Frontiers in Biomathematics",
                  number: "BMX100",
                  year: "Fall 2014",
                  college: "Smith College",
                  hours: 2
                }
              ]}
              headers={false}
            />

            <Tag fill icon="paperclip" intent="danger" minimal>
              Philosophy
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Study of Buddhism",
                  number: "BUS120",
                  year: "Fall 2017",
                  college: "Smith College",
                  hours: 2
                },
                {
                  name: "Issues in Queer Studies",
                  number: "SWG100",
                  year: "Spring 2015",
                  college: "Smith College",
                  hours: 2
                },
                {
                  name: "Race, Class, Gender, and Sexuality",
                  number: "IDP102",
                  year: "Spring 2015",
                  college: "Smith College",
                  hours: 2
                },
                {
                  name: "Wisdom of the Sages",
                  number: "FYS139",
                  year: "Fall 2014",
                  college: "Smith College",
                  hours: 4
                }
              ]}
              headers={false}
            />

            <Tag fill icon="edit" intent="warning" minimal>
              English
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Reading Contemporary Poetry",
                  number: "ENG112",
                  year: "Fall 2014",
                  college: "Smith College",
                  hours: 2
                }
              ]}
              headers={false}
            />
            <Tag fill icon="translate" intent="success" minimal>
              French
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Accelerated Intermediate French",
                  number: "FRN102",
                  year: "Spring 2015",
                  college: "Smith College",
                  hours: 5
                },
                {
                  name: "Accelerated Elementary French",
                  number: "FRN101",
                  year: "Fall 2014",
                  college: "Smith College",
                  hours: 5
                }
              ]}
              headers={false}
            />
            <Tag fill icon="bank-account" intent="danger" minimal>
              Economics
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Economic Game Theory",
                  number: "ECO125",
                  year: "Spring 2016",
                  college: "Smith College",
                  hours: 4
                }
              ]}
              headers={false}
            />
            <Tag fill icon="film" intent="warning" minimal>
              Film Studies
            </Tag>
            <CourseTable
              rows={[
                {
                  name: "Introduction to Film Studies",
                  number: "FLS150",
                  year: "Fall 2015",
                  college: "Smith College",
                  hours: 4
                }
              ]}
              headers={false}
            />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Courses;
