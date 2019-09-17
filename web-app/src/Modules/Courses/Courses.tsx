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
            <Tag fill icon="globe" intent="success" minimal>
              Bio
            </Tag>
            <Tag fill icon="edit" intent="success" minimal>
              English
            </Tag>
            <CourseTable rows={[]} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Courses;
