import * as React from "react";
import * as _ from "lodash";
interface IProps {
  rows: ICTRow[];
}
interface ICTRow {
  name: string;
  number: string;
  hours: number;
  year: string;
  college: string;
}
const CourseTable: React.SFC<IProps> = props => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Course Name</th>
          <th>Course Number</th>
          <th>Year</th>
          <th>School</th>
          <th>Credit Hours</th>
        </tr>
        {_.map(props.rows, (row: ICTRow) => {
          return (
            <tr>
              <td>{row.name}</td>
              <td>{row.number}</td>
              <td>{row.year}</td>
              <td>{row.college}</td>
              <td>{row.hours + ".0"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseTable;
