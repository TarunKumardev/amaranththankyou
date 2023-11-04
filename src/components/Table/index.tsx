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
       width: '100%',
       borderCollapse: 'collapse',
    },
    th: {
       border: '1px solid black',
       padding: '10px',
       textAlign: 'left',
    },
    td: {
       border: '1px solid black',
       padding: '10px',
    }
  }
  
  export const Table: React.FC<TableProps> = ({ rows }) => (
    <table style={styles.table}>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {row.columns.map((column, colIndex) =>
              <td style={styles.td} key={colIndex}>{column.componentConfig.component}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
  