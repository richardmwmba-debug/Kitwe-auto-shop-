import React from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Products = () => {
  const [products] = React.useState([
    { id: 1, name: 'Engine Oil 5W-30', category: 'Oils', price: 65, stock: 50 },
    { id: 2, name: 'Spark Plugs', category: 'Ignition', price: 12, stock: 100 },
    { id: 3, name: 'Air Filter', category: 'Filters', price: 18, stock: 80 },
  ]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Products Management
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField label="Search products..." variant="outlined" />
        <Button variant="contained">Add Product</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>ZMW {product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
