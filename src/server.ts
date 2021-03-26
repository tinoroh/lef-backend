import * as express from "express";
import * as passport from "passport";
// import * as session from "express-session"
import * as passportLocal from "passport-local"
import { connect } from "./database/database";
import { createDummyData } from "./skripts/createDummyData";

const app = express();
const port = 8080; // default port to listen

connect();

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});


// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});


// create dummy data. TODO: POST
app.get("/dummyData/create", (req: any, res: any) => {
    createDummyData();
});


// passport stuff, propably goes into passport.ts
const session = require('express-session');
const LocalStrategy = passportLocal.Strategy;
app.use(session({ secret: 'secret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

passport.use(new LocalStrategy(
    function(username, password, done) {
        if (username === "admin" && password === "admin") {
            return done(null, username);
        } else {
            return done("unauthorized access", false);
        }
    }
));

app.get("/login", (req: any, res: any) => {
    res.send("login Page")
});

app.get("/signup", (req: any, res: any) => {
    res.send("signup page")
});

app.get("/logout", (req: any, res: any) => {
    req.logout();
    res.redirect("/login");
})