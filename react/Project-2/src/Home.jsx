import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" marginTop="4rem">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome Home!
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          You have successfully logged in or registered.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          style={{ marginTop: '1rem' }}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
