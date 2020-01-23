const express = require('express');
const next = require('next');
const Code = require('./BE/controllers/Codes');
const Profile = require('./BE/controllers/Profile');
var cookieParser = require('cookie-parser');

// const dev = process.env.NODE_ENV !== 'production'
const app = next({dev: true})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express();
  server.use(cookieParser());
// server.get("/api/codes", (req,res) => res.json({t: 1}))
  // Let next handle the rest.
  server.use("/api/codes", Code.router);
  server.use("/api/profile", Profile);
  server.get('*', (req, res) => {
    if (!Code.actions.checkCode(req)) {
        // console.log("No EXISTS CODE COOKIE");
        res.status(401);
        return app.render(req, res,"/");
    }
    return handle(req, res);
  });


  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})