const express = require("express");
const next = require("next");
const fs = require("fs");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const path = require("path");
const handle = app.getRequestHandler();
const favicon = require("serve-favicon");
var session = require("express-session"),
  passport = require("passport"),
  Strategy = require("./node_modules/passport-discord/lib").Strategy;
const checkAuth = require("./functions/checkAuth.js");
const fetchUserData = require("./functions/Dashboard/fetchUserData.js");
//const fetchBotGuildData = require("./function/Dashboard/fetchBotGuildDaa.js");
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(favicon(path.join(__dirname, "static", "brand", "favicon.ico")));
    // Discord AUthentication
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

    server.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false
      })
    );
    server.use(passport.initialize());
    server.use(passport.session());
    server.get(
      "/login",
      passport.authenticate("discord", { scope: scopes }),
      function(req, res) {}
    );

    server.get(
      "/Silentlogin",
      passport.authenticate("discord", { scope: scopes }),
      function(req, res) {}
    );

    server.get(
      "/callback",
      passport.authenticate("discord", { failureRedirect: "/" }),
      function(req, res) {
        res.redirect("/udb");
      } // auth success
    );
    server.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });

    server.get("/udb", checkAuth, async function(req, res) {
      //  app.render("/dashboard");
      //console.log(req.user)
      //    res.json(req.user);
      //    const page = "/dashboard";
      //  //  const query = { json: res.json(req.user) };
      //    app.render("/dashboard");
      ///  res.json(req.user);
      //  res.json(req.user);
      const actualPage = "/dashboard";
      let guildsbotisin = await fetchUserData(req.user.id);
      const queryParams = {
        json: req.user,
        user: guildsbotisin
      };
      await app.render(req, res, actualPage, queryParams);
    });

    server.get("/udb/manage", checkAuth, function(req, res) {
      const actualPage = "/manage";
      const queryParams = { json: res.json };
      app.render(req, res, actualPage, queryParams);
    });

    // End

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id, oof: req };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/nullLogin", function(req, res) {
      //console.log(req.user)
      const actualPage = "/notLoggedIn";
      const queryParams = { id: req.params };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
