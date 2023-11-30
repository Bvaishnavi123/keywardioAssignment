import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';export default function ColumnGroupingTable({ columns, rows }) {
  const [sortedRows, setSortedRows] = useState(rows);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    sortRows(key, direction);
  };

  const sortRows = (key, direction) => {
    const sortedData = [...sortedRows].sort((a, b) => {
      if (direction === 'ascending') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setSortedRows(sortedData);
  };

  return (
    <Paper sx={{border:"none",boxShadow:"none" ,height:"100%",overFlowY:"scroll"}}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table" style={{ padding: '10px' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: 50,
                    maxWidth: 170,
                    fontWeight: '600',
                    color: '#454E57',
                    fontSize: '16px',
                    padding: '6px',
                    cursor: 'pointer',
                  }}
                  onClick={() => requestSort(column.id)}
                >
                  {column.label}
                  {sortConfig.key === column.id && (
                    <span style={{ marginLeft: '4px' }}>
                      {sortConfig.direction === 'ascending' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ color: '#A8ACB1', padding: '10px' }}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
