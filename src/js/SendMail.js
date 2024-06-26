function sendMail() {
  var templateParams = {
    sendername: document.getElementById('username').value,
    senderemail: document.getElementById('user-email').value,
    sendermessage: document.getElementById('user-message').value,
  };
  const serviceID = "service_58ak8ni";
  const templateID = "template_vxd0bom";
  emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      document.getElementById('span-message').innerHTML = "Email enviado com sucesso!";
    },
    (error) => {
      document.getElementById('span-message').innerHTML = "Ocorreu algum erro ao enviar o email. Por favor, tente novamente mais tarde";
    },
  );
  }