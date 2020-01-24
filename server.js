const express = require('express');
const next = require('next');
const Code = require('./BE/controllers/Codes');
const Profile = require('./BE/controllers/Profile');
const Email = require('./BE/controllers/Email');
const Search = require('./BE/controllers/Search');
const Sessions = require('./BE/controllers/sessions');
const User = require('./BE/controllers/User');
var cookieParser = require('cookie-parser');
const Auth = require('./BE/services/auth')
const logger = require('morgan');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')

// const dev = process.env.NODE_ENV !== 'production'
const app = next({dev: false})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express();
  // server.use(function(req, res) {
  //   res.redirect('https://' + req.headers.host + req.url);
  // });
  server.engine('html', mustacheExpress());
  server.set('view engine', 'html');
  server.set('views', __dirname + '/views');
  server.use(express.static(__dirname + '/public'));


  server.use(bodyParser.urlencoded({extended:false}))
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(Auth.authenticate);
  server.use(logger('dev'));
// server.get("/api/codes", (req,res) => res.json({t: 1}))
  // Let next handle the rest.
  server.use("/api/codes", Code.router);
  server.use("/api/profile", Profile);
  server.use("/api/email", Email);
  server.use("/api/search", Search);
  server.use("/api/login", Sessions);
  server.use("/api/user", User);
  server.get('*', (req, res) => {
    if(!req.secure){
      res.redirect("https://" + req.headers.host + req.url);
      res.end
    }
    if (!Code.actions.checkCode(req)) {
        // console.log("No EXISTS CODE COOKIE");
        res.status(401);
        return app.render(req, res,"/");
    }
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})