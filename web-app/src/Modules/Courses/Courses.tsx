import React, { useState } from "react";
import { Tag, Collapse } from "@blueprintjs/core";
import "./Courses.css";

interface IProps {}

const Courses: React.SFC<IProps> = props => {
  const [mathOpen, setMathOpen] = useState(true);
  const [cSOpen, setCSOpen] = useState(true);
  const [bioOpen, setBioOpen] = useState(true);
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
          icon="function"
          intent="primary"
          interactive
          onClick={setMathOpen.bind(null, !mathOpen)}
          minimal
        >
          <h2>Mathematics</h2>
        </Tag>
        <Collapse isOpen={mathOpen}>
          <div className="course-body-text">stuff</div>
        </Collapse>

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
          <div className="course-body-text">all the stuff</div>
        </Collapse>

        <Tag
          large
          fill
          icon="globe"
          intent="primary"
          minimal
          interactive
          onClick={setBioOpen.bind(null, !bioOpen)}
        >
          <h2>Biology</h2>
        </Tag>
        <Collapse isOpen={bioOpen}>
          <div className="course-body-text">all the stuff</div>
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
          <div className="course-body-text">all the stuff</div>
        </Collapse>
      </div>
    </div>
  );
};

export default Courses;
