import Navbar from "../../components/navbar"
import "../famer/farmer.css"

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'pigID', label: 'pigID', minWidth: 50,align:'center' },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100,align:'center' },
  {
    id: 'population',
    label: 'Population',
    minWidth: 50,
    align:'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 50,
    align:'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 50,
    align:'center',
    format: (value) => Math.floor(value),
  },

];

function createData(pigID, code, population, size ,density) { 
  return { pigID, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  createData('China', 'CN', 1403500365, 9596961,1),
  
];

function farmerPork()
 {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="container">
      <div className="navbar-farmer">
        <Navbar />
      </div>
      <div className="button-addPig">
      </div>
      <div className="container-table" >
        <div className="information">
          <p>Pig information</p>
          <button className="add">Add pig</button>
        </div>
        <Paper sx={{ width: '85%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  
      </div>
    </div>
  )
}

export default farmerPork