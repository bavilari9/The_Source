import Head from 'next/head'
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>IMBDLAT</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Passion+One:400,700|Unna:400,700|Barlow|Passion+One&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />



    </Head>
    <Container>
      {props.children}
    
    </Container>
  </div>
)

export default Layout