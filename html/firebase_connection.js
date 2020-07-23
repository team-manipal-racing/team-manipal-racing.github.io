
  var messagesRef = firebase.database().ref('messages');

document.getElementById('fcf-form-id').addEventListener('submit',submitForm);
function getValue(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    e.preventDefault();
    var name=getValue("Name");
    var email=getValue("Email");
    var message=getValue("Message");
    saveMessage(name,email,message);
    alert('Message Sent')
    document.getElementById('fcf-form-id').reset();
}

function saveMessage(name,email,message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        message : message
    })
}

