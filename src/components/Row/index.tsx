// @ts-nocheck
import React from "react";
type Props = {};

const Row = ({data, styles}) => {
  return (
    <tr key={data.id} styles={styles.tr} className="table-row">
      {data.columns.map((column, colIndex) => (
        <td style={styles.td} key={colIndex}>
          {column.componentConfig.component}
        </td>
      ))}
    </tr>
  );
};

export default Row;
