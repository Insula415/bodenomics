import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Meme() {
  return (
    <Box
      id="Meme"
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
        <Grid container spacing={2} justifyContent="center" alignItems="start">
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={require('../images/1.png')} alt="Image 1" style={{ width: '100%', height: 'auto', marginBottom: '8px' }} />
            <div style={{ flex: 1 }}>
              <Typography className="meme-text" variant="h4" sx={{ color: 'white', mb: 1 }}>
                LIQUIDITY BURNT
              </Typography>
              <Typography className="meme-text" variant="h5" sx={{ color: 'white' }}>
                WE'RE BURNING THE MONEY
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={require('../images/2.png')} alt="Image 2" style={{ width: '100%', height: 'auto', marginBottom: '8px' }} />
            <div style={{ flex: 1 }}>
              <Typography className="meme-text" variant="h4" sx={{ color: 'white', mb: 1 }}>
                TOTAL SUPPLY
              </Typography>
              <Typography className="meme-text" variant="h5" sx={{ color: 'white' }}>
                989,359.89 <br /> AND DECREASING!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={require('../images/3.png')} alt="Image 3" style={{ width: '100%', height: 'auto', marginBottom: '8px' }} />
            <div style={{ flex: 1 }}>
              <Typography className="meme-text" variant="h4" sx={{ color: 'white', mb: 1 }}>
                MINT & REVOKE FREEZE
              </Typography>
              <Typography className="meme-text" variant="h5" sx={{ color: 'white' }}>
                WE CAN'T FIX
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
