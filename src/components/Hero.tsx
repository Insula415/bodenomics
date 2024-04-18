import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// const StyledBox = styled('div')(({ theme }) => ({
//   alignSelf: 'center',
//   width: '100%',
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow:
//     theme.palette.mode === 'light'
//       ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
//       : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
//   outline: '1px solid',
//   backgroundImage: `url(${
//     theme.palette.mode === 'light'
//       ? '/static/images/templates/templates-images/hero-light.png'
//       : '/static/images/templates/templates-images/hero-dark.png'
//   })`,
//   backgroundSize: 'cover',
//   outlineColor:
//     theme.palette.mode === 'light'
//       ? 'hsla(220, 25%, 80%, 0.5)'
//       : 'hsla(210, 100%, 80%, 0.1)',
//   [theme.breakpoints.up('sm')]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
// }));

const colors = [
  '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', 
  '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF',
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
  '#FFA500', '#FF1493', '#800080', '#FF4500', '#1E90FF', '#8A2BE2',
  '#32CD32', '#FFD700', '#00FF7F', '#FF69B4', '#ADFF2F', '#4682B4'
];


export default function Hero() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {'$BODENOMICS'.split('').map((letter, index) => (
              <span key={index} style={{ color: colors[(index + currentColorIndex) % colors.length] }}>
                {letter}
              </span>
            ))}
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            color="text.primary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            MAKES SOLANA GO UP
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            EhrS5zE4zsvDiRhw3joJkEi8MmAagHfr3udxtdxU6N9m
            <ContentCopyIcon style={{ fontSize: 20 }} />
          </Stack>
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>

  );
}
