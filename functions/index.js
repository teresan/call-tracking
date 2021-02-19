exports.handler = function(context, event, callback) {
    context.getTwilioClient().messages.create({
        body: 'Please review your order',
        to: event.callerId,
        from: '+155555555555'
    })
    .then(message => callback(null, message))
    .catch(error => callback(error));
};