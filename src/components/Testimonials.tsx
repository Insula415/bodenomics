import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
        <div style={{ textAlign: 'center', marginBottom: "-10px"}}>
          <img src={require('../images/crawl.png')} alt={"boden"} style={{ height: "150px", width: "350px", margin: "0 auto" }} />
        </div>
        <Typography component="h2" variant="h4" color="text.primary" className="flashing" sx={{p: 2}}>
          How to buy
        </Typography>
        <br />
      </Box>
      <Grid container spacing={2} alignItems="stretch">
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                p: 1
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" color="text.primary" sx={{pb: 2}}>
                  {testimonial.name}
                </Typography>
                <Typography color="text" sx={{ fontSize: { xs: 12, sm: 15 } }}>
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
