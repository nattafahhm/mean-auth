const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../app/models/user');
const config = require('../config');

//ExtractJwt.fromUrlQueryParameter('jwt');#sthash.Hwhe5o7n.dpuf

// Setup work and export for the JWT passport strategy
module.exports = function() {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: config.secret
    };
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));

};
