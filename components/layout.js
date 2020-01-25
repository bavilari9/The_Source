import Head from 'next/head'
import { Container } from 'reactstrap'

const Layout = (props) => {
  const getTitle = () => {
    console.log(props.path)
    let _paths = typeof(props.path) === 'string' ? props.path.split('/') : [];
    let _path= '';
    if (_paths.length > 1) {
      _path = _paths[1];
      if (_path && typeof(_path) === 'string') {
        _path = _path.replace('#','');
        const capitalLetter = _path.charAt(0).toUpperCase();
        _path = capitalLetter + _path.substring(1, _path.length);
        _path = "| " + _path;
      }
    }
    return `TheSourceDB ${_path}`
  }
  return <div>
    <Head>
      <title>{getTitle()}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Passion+One:400,700|Unna:400,700|Barlow|Passion+One&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155872189-2"></script>
        <script>
          {"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'UA-155872189-2');"}
        </script>


    </Head>
    <Container>
      {props.children}
    
    </Container>
  </div>
};

export default Layout