const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

const { v4: uuidv4 } = require("uuid");

const Student = require("../models/studentRegister.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5004/auth/google/callback",
      userProfileUrl: "https://**www**.googleapis.com/oauth2/v3/userinfo",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      console.log(profile)
      let user = await Student.findOne({ email: profile._json.email });
      
      if (user) return done(null, { user: user });
      
      user = await Student.create({
        first_name: profile._json.given_name,
        last_name: profile._json.family_name,
        email: profile._json.email,
        password: uuidv4(),
      });
      console.log(user);
      return done(null,{user:user});
    }
  )
);

module.exports = passport;
