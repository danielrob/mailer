const key = process.env.MANDRILL_API_KEY
    , mandrill = require('mandrill-api/mandrill')
    , mandrill_client = new mandrill.Mandrill(key)
    , jade = require('jade')
    , template = jade.compileFile(__dirname + '/../assets/template.jade')
    , less = require('jstransformer')(require('jstransformer-less'))
    , contacts = {
         "example@example.com" : "Firstname Lastname",
      }

module.exports =

function sendMail(recipient, subject, message, testrun){

    if (testrun) {
        console.log(template({message: message, tags: ['jade', 'css', 'javascript', 'jade']}))
        return
    }

    var params = {
        "message": {
            "html": template({message: message, tags: ['jade', 'css', 'javascript', 'jade']}),
            "subject": subject,
            "from_email": "example@example.com",
            "from_name": "Firstname Lastname",
            "to": [
                {
                    "email": recipient,
                    "name": contacts[recipient] || null,
                    "type": "to"
                }
            ],
            // "headers": {
            //     "Reply-To": "no-reply@example.com"
            // },
            'inline_css': true,
            "auto_text": true,
            "track_opens": true,
            "track_clicks": true,
            "merge": true,
            "merge_language": "mailchimp",
        },
    }

    mandrill_client.messages.send(params, function(result) {
        console.log(result);
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
}