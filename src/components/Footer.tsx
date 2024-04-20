import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="#">Bodenomics&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%'}, display: {xs: 'none', sm:'none', md: 'block', lg: 'block'} }}>
            <SitemarkIcon />
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Quick links
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Dex
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Bird
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Telegram
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Buy
          </Link>
        </Box> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box>
          <Typography color="text.secondary" variant="body2">
            No affiliation exists between $BODEN and Joe Biden. With no intrinsic value or anticipated financial gain, this currency is merely a meme coin.
          </Typography>
          <br />
          <Copyright />
        </Box>
        <Box>
          <img src={require('../images/flag.png')} alt={"boden"} style={{ height: "150px", width: "250px" }} />
        </Box>
      </Box>
    </Container>
  );
}
