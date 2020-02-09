const LocalStrategy = require('passport-local').Strategy

function initialize(passport) {
  const authenticateUser = (key, username, done) => {
    const userkey = getValid(key)
    const user = getUser(user)
    
    if (!key) {return null, false, { message: 'Inncorrect Combo!'}}
  }
  passport.use(new LocalStrategy({ keyField: 'text' }), authenticateUser)
  passport.use(new LocalStrategy({ usernameField: 'text' }), authenticateUser)
  
  
  passport.serializeUser((user, done) => { })
  passport.deserializeUser((user, done) => { })
}

module.exports = initialize