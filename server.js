const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const cookies = require('cookies')
app.use(cookies.express(["keys", "username", "id"]))

const limiter = rateLimit({
  windowMs: 1000, // 15 minutes
  max: 2 // limit each IP to 100 requests per windowMs
});



app.use(express.static("public"));


// ROUTES
const songApi = require('./routes/api/song')
const insultApi = require('./routes/api/insult')
const factApi = require('./routes/api/fact')
const passwordApi = require('./routes/api/password')
const catApi = require('./routes/api/cat')
const dogApi = require('./routes/api/dog')
const host2ip = require('./routes/api/host2ip')
const nslookup = require('./routes/api/nslookup')
const mxlookup = require('./routes/api/mxlookup')
const geoip = require('./routes/api/geoip')
const checkweather = require('./routes/api/checkweather')
const md5hash = require('./routes/api/md5hash')
const encrypttext = require('./routes/api/encrypttext')
const pingRoute = require('./routes/api/ping')

const testApi = require('./routes/api/test')
const validateApi = require('./routes/api/validate')

app.set('view engine', 'ejs')

const genkeyApi = require('./routes/admin/genkey')

app.use('/api/insult', limiter, insultApi)
app.use('/api/song', limiter, songApi)
app.use('/api/fact', limiter, factApi)
app.use('/api/password', limiter, passwordApi)
app.use('/api/cat', limiter, catApi)
app.use('/api/host2ip', limiter, host2ip)
app.use('/api/nslookup', limiter, nslookup)
app.use('/api/mxlookup', limiter, mxlookup)
app.use('/api/geoip', limiter, geoip)
app.use('/api/dog', limiter, dogApi)
app.use('/api/checkweather', limiter, checkweather)
app.use('/api/md5hash', limiter, md5hash)
app.use('/api/encrypttext', limiter, encrypttext)
app.use('/ping', limiter, pingRoute)

app.use('/api/validate', limiter, validateApi)

// admin
app.use('/admin/genkey', genkeyApi)

app.use(express.urlencoded({extended: false}))

// AVEX TESTING FILE
app.use('/api/test', testApi)

app.get("/", function(request, response) {
  response.render("index", {say:"Hi welcome to chilly's!"});
});


// LOGIN
//const userLogin = require('./routes/users/login')
//app.use('/login', limiter, userLogin)
//initializePassport(passport)


// LOGIN SYSTEM

const loginRoute = require('./routes/users/login')
app.use('/login', limiter, loginRoute)

const profileRoute = require('./routes/users/login')
app.use('/profile', limiter, profileRoute)

app.get('/say/:text', (req, res) => {
  res.render('index', {
    say: req.params.text
  })
})

// Listener
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const test = require('./test.js')
test.grabKeys()
//test.insertKey("testkey1234")
console.log('E')

const checker = require('./backend/health.js')
