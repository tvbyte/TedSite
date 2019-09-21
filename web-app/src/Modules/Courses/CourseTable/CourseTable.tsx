import * as React from "react";
import * as _ from "lodash";
import "./CourseTable.css";
interface IProps {
  rows: ICTRow[];
  headers: boolean;
}
interface ICTRow {
  name: string;
  number: string;
  hours: number;
  year: string;
  college: string;
}

interface ITag {
  text: string;
  intent: "danger" | "warning" | "success" | "primary" | "none";
  icon: "globe" | "edit";
}
const x: (string | number)[] = [3, ""];
const CourseTable: React.SFC<IProps> = props => {
  return (
    <table className="course-table">
      <tbody>
        {props.headers && (
          <tr>
            <th style={{ width: "40%" }}>Course Name</th>
            <th style={{ width: "15%" }}>Course Number</th>
            <th style={{ width: "15%" }}>Year</th>
            <th style={{ width: "15%" }}>School</th>
            <th style={{ width: "15%" }}>Credit Hours</th>
          </tr>
        )}

        {_.map(props.rows, (row: ICTRow) => {
          return (
            <tr>
              <td style={{ width: "40%" }}>{row.name}</td>
              <td style={{ width: "15%" }}>{row.number}</td>
              <td style={{ width: "15%" }}>{row.year}</td>
              <td style={{ width: "15%" }}>{row.college}</td>
              <td style={{ width: "15%" }}>{row.hours + ".0"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseTable;
