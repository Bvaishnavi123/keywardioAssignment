import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



export default function ColumnGroupingTable({columns,rows}) {


  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table"  style={{ padding: '10px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2} style={{padding:"2px", color: "#454E57",fontWeight:"600" , fontSize:"16px"}}>
                Ad Insights
              </TableCell>
              <TableCell align="right" colSpan={3} style={{padding:"2px",color: "#454E57",fontWeight:"600"}}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: 50, maxWidth: 170 ,fontWeight:"600", color: "#454E57", fontSize:"16px",padding:"6px"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{color:"#A8ACB1",padding:"10px"}} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
  
    </Paper>
  );
}