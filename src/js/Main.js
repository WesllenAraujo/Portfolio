let { sendButton } = variables();
sendButton.onclick = function() {
  var { username, spanMessage, email, emailRegex, message } = variables();
  if (username.length < 4 || username === '') {    
    spanMessage.innerHTML = "Digite um nome com no mínimo 4 caracteres."
  } else if(!emailRegex.test(email) != false) {
    spanMessage.innerHTML = "Digite um email válido."
  } else if(message.length < 10 || message === '') {
    spanMessage.innerHTML = "Digite uma mensagem com no mínimo 10 caracteres."
  } else {
    spanMessage.innerHTML = '';
    sendMail();
  }
}
function variables() {
  let sendButton = document.getElementById('contact-button');
  let username = document.getElementById('username').value;
  let email = document.getElementById('user-email').value;
  let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  let spanMessage = document.getElementById('span-message');
  let message = document.getElementById('user-message').value;
  return { sendButton, username, email, emailRegex, spanMessage, message }
}
function sendMail() {
  var { username, email, message, spanMessage } = variables();
  var templateParams = {
    sendername: username.value,
    senderemail: email.value,
    sendermessage: message.value,
  };
  const serviceID = "service_58ak8ni";
  const templateID = "template_vxd0bom";
  emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      spanMessage.innerHTML = "Email enviado com sucesso!";
    },
    (error) => {
      spanMessage.innerHTML = "Ocorreu algum erro ao enviar o email. Por favor, tente novamente mais tarde";
    },
  );
}