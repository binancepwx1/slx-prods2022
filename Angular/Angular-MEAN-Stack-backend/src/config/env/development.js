export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "qwerty",
  frontendURL: 'http://localhost:4200',
  google:{
    clientId: '', // use your google credentials
    clientSecret: '', // use your google credentials
    callbackURL: 'http://localhost:3000/api/auth/google/callback' 
  },
  github:{
    clientId: '', // use your github credentials
    clientSecret: '', // use your github credentials
    callbackURL: 'http://localhost:3000/api/auth/github/callback'
  },
  ethereal: {
    username: '', // use your ethereal mail
    password: '', // use your ethereal password
    host: '', // use your ethereal mail
    port: 587,
  }
};
