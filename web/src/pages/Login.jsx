import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginError } from '../redux/authSlice';
import { authService } from '../services/api';

const Login = () => {
  const [email, setEmail] = React.useState('admin@kitweautoshop.com');
  const [password, setPassword] = React.useState('Admin@123');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await authService.login(email, password);
      dispatch(loginSuccess(response.data));
      navigate('/');
    } catch (err) {
      dispatch(loginError(err.response?.data?.error || err.message));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h3" gutterBottom>
          🏪 Kitwe Auto Shop
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Admin Dashboard
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
        <Typography variant="caption" sx={{ mt: 3, textAlign: 'center' }}>
          Demo credentials: admin@kitweautoshop.com / Admin@123
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
