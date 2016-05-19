# Mailer

A sandbox command-line tool to send a templated e-mail using [mandrill](https://mandrillapp.com), jade, and commander. 

## Usage
1. Download / clone  
1. `cd mailer`
1. `npm install`
1. change `from_name` and `from_email` in `lib/send.js`
1. `export MANDRILL_API_KEY=<API KEY> ` (Add Mandrill API Key to your environment variables)
1. `./bin/mailer friend@example.com 'Sent with Mandrill!' 'Just sending you a quick message to say thanks :)'`

## License
ISC
