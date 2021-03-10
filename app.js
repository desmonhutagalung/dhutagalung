function sendEmail() {
  var name = Form.Name.value;
  var sender = Form.Sender.value;
  var phone = Form.Phone.value;
  var message = Form.Message.value;

  Email.send({
    SecureToken: 'c1a1e63b-f644-4f3e-9d47-544b93d68a2a',
    Username: sender,
    To: 'desmond.natanael@gmail.com',
    From: sender,
    Subject: 'Portfolio',
    Body: 'Name: ' + name + '<br>' + 'Email: ' + sender + '<br>' + 'Phone: ' + phone + '<br>' + message,
  }).then(function (message) {
    alert('mail sent successfully');
  });
}
