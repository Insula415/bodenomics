import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import Link from '@mui/material/Link';

const items = [
  {
    icon: <TelegramIcon />,
    title: 'Telegram',
    link: "https://t.me/+gJ8u21BL3rViOThh"
  },
  {
    icon: <XIcon />,
    title: 'Twitter',
    link: "https://twitter.com/BODENOMICS24"
  }
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
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
        <Typography component="h2" variant="h4" className="flashing" sx={{p: 2, width: '100%'}}>
          Socials
        </Typography>
        <Grid container spacing={2.5} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  background: 'transparent',
                  backgroundColor: 'blue',
                  boxShadow: 'none',
                }}
              >
                <Link color="text.primary" variant="body2" href={item.link} sx={{ textDecoration: 'none', fontWeight: "600" }}>
                  <Box sx={{ opacity: 0.5, mb: 1 }}>{item.icon}</Box>
                  <Typography fontWeight="600" variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                </Link>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
