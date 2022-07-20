import { Grid, Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Native App</title>
        <meta name="description" content="Example of Cloud Native App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Cloud Native App!</h1>
      <Grid>
        <Typography variant="h1" component="h1">
          Welcome to Cloud Native App!
        </Typography>
      </Grid>
    </div>
  );
}
