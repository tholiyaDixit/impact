chalk package is working on 4.12

for encoded url in login, sign and ex.
app.use(express.urlencoded({ extended: false }));

for set cookies in any browser
app.use(cookieParser());

// add for html page
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');