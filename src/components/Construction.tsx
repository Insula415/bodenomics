import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Construction() {
  return (
    <Box
      id="Construction"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
        <img src={require('../images/outline.png')} alt={"boden"} style={{ height: "50px", width: "100%"}} />
          <Typography component="h2" variant="h4" className="meme-text" sx={{p: 2}}>
            PRESIDENTAIL ELECTION <br></br> COMING SOON 
            <br /> <br />
            UNDER MAINTENANCE WHILE WE FIX THE MONEY PRINTER
          </Typography>
        <img src={require('../images/outline.png')} alt={"boden"} style={{ height: "50px", width: "100%"}} />
        </Box>
      </Container>
    </Box>
  );
}
