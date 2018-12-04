const express = require("express");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
var session = require("express-session");
var passport = require("passport");
var Strategy = require("passport-discord").Strategy;
//const checkAuth = require("./functions/checkAuth.js");
require("dotenv").config();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false
      })
    );
    server.use(passport.initialize());
    server.use(passport.session());

    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    var scopes = [
      "identify",
      "email",
      /* 'connections', (it is currently broken) */ "guilds",
      "guilds.join"
    ];

    passport.use(
      new Strategy(
        {
          clientID: process.env.DISCORDCLIENTID,
          clientSecret: process.env.DISCORDCLIENTSECRET,
          callbackURL: "http://localhost:3000/callback",
          scope: scopes
        },
        function(accessToken, refreshToken, profile, done) {
          process.nextTick(function() {
            return done(null, profile);
          });
        }
      )
    );

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id, oof: req };
      app.render(req, res, actualPage, queryParams);
    });

    server.get(
      "/login",
      passport.authenticate("discord", { scope: scopes }),
      function(req, res) {}
    );

    server.get("/callback", (req, res) => {
      passport.authenticate("discord", { failureRedirect: "/" }),
        function(req, res) {
          res.redirect("/doof");
        }; // auth success
    });
    server.get("/oof", (req, res) => {
      res.send("200");
    });
    server.get("/dashboard", checkAuth, function(req, res) {
      //console.log(req.user)
      res.json(req.user);
      //    const actualPage = "/dashboard";
      //    const queryParams = { data: res.json(req.user) };
      //    app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    function checkAuth(req, res, next) {
      if (req.isAuthenticated()) return next();
      res.send("not logged in :(");
    }
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
