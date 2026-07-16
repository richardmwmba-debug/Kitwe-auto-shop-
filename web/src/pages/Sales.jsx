import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Sales = () => {
  const [sales] = React.useState([
    { id: 1, customer: 'John Banda', amount: 450, date: '2026-07-15', status: 'Completed' },
    { id: 2, customer: 'Mary Mwale', amount: 320, date: '2026-07-15', status: 'Completed' },
    { id: 3, customer: 'Charles Phiri', amount: 580, date: '2026-07-14', status: 'Completed' },
  ]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Sales History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.customer}</TableCell>
                <TableCell>ZMW {sale.amount}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Sales;
