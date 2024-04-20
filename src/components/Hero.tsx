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
import DoneIcon from '@mui/icons-material/Done';

const colors = [
  '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', 
  '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF',
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
  '#FFA500', '#FF1493', '#800080', '#FF4500', '#1E90FF', '#8A2BE2',
  '#32CD32', '#FFD700', '#00FF7F', '#FF69B4', '#ADFF2F', '#4682B4'
];

export default function Hero() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyText = () => {
    const emailElement = document.getElementById('email-hero');
    if (emailElement) {
      const textToCopy = emailElement.innerText;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000); // Change back to copy icon after 1 second
        })
        .catch((error) => {
          console.error('Error copying text: ', error);
        });
    }
  };

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
          pt: { xs: 14, sm: 15 },
          pb: { xs: 1, sm: 1 },
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={require('../images/boden.png')} alt={"boden"} style={{ height: "180px", width: "150px", margin: "0 auto" }} />
        </div>
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
              flexDirection: { xs: 'row', sm: 'row' },
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
            <Typography id="email-hero">
              EhrS5zE4zsvDiRhw3joJkEi8MmAagHfr3udxtdxU6N9m
            </Typography>
            {copied ? (
              <DoneIcon style={{ fontSize: 20, margin: "0 auto"}} />
            ) : (
              <ContentCopyIcon onClick={handleCopyText} style={{ fontSize: 20, cursor: 'pointer', margin: "0 auto" }} />
            )}
          </Stack>
        </Stack>
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          <img 
            src={require('../images/banner.png')} 
            alt={"boden"} 
            style={{ 
              height: "auto", 
              maxWidth: "100%",
              width: "100%", 
              maxHeight: "250px",
              margin: "0 auto" 
            }} 
          />
        </div>
      </Container>
    </Box>
  );
}
