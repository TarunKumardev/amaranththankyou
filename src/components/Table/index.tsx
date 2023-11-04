// @ts-nocheck
import Row from "../Row";
import './table.css'

type Column = {
    headerName: string;
    componentConfig: {
      component: React.ReactElement;
    };
  };
  
  type Row = {
    id: number | string;
    columns: Column[];
  };
  
  type TableProps = {
    rows: Row[];
  };
  
  const styles  = {
    table: {
       width: 'fit-content',
       maxWidth: "500px",
       display: "inline-block",
       borderCollapse: 'collapse',
       maxHeight: '414px',

       overflowY: 'scroll',
       border: '1px solid lightgray',
       padding: "10px",
       background: "#fff",
       borderRadius: "5px",
       boxShadow: '3px 3px 6px 0px rgba(0,0,0,0.1)'
    },
    th: {
       border: '1px solid black',
       padding: '10px',
       textAlign: 'left',
    },
    td: {
       border: '1px solid black',
       padding: '10px',
    },
    tr:{
      display: "inline-block",
      width: "100%",
      marginBottom: "10px",
      borderBottom: '1px solid lightgray'
    }
  }
  
  export const Table: React.FC<TableProps> = ({ rows }) => (
    <table style={styles.table} className="contact__table">
      <tbody>
        {rows.map((row) => (
          <Row key={row.id} data={row} styles={{...styles.th, ...styles.td, ...styles.tr}}/>
        ))}
      </tbody>
    </table>
  );
  