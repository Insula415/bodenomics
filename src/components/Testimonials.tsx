import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    name: "Create A Wallet",
    testimonial:
      "Get Phantom or your preferred wallet for free from Google Play or the app store. For desktop users, visit Phantom to get the extension for your browser.",
  },
  {
    name: 'Get some $SOL',
    testimonial:
      "In order to switch to $BODENOMICS, have $SOL in your wallet. You can purchase directly on Phantom, transfer funds from another wallet, or purchase on another exchange and send the funds to your wallet if you don't have any $SOL.",
  },
  {
    name: 'Go to Birdeye',
    testimonial:
      'Make a Birdeye connection. Open your Phantom app and navigate to Birdeye in the browser. Attach your wallet. Copy the address of the $BODENOMICS token, choose $BODENOMICS, and click "Confirm." Please sign the wallet when Phantom asks you to.',
  },
  {
    name: '$BODENOMICS',
    testimonial:
      "Participate in the $Bodenomics community. Share memes, talk to other holders in Telegram and participate in community events",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: 'center',
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary" className="flashing">
          How to buy
        </Typography>
        <br />
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial,index) => (
          <Grid item xs={6} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="h5" color="text.primary" sx={{pb: 2}}>
                  {testimonial.name}
                </Typography>
                <Typography color="text" sx={{fontSize: {xs: 12, sm: 15}}}>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
