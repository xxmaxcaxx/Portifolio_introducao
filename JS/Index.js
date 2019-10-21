const msg = {
        from: "fernando_henry@assessoria.app",
        to: email,
        subject: subject,
        text: `
            Nome: ${name},
            Email: ${email},
            Message: ${subject}
            `
    };
document.getElementById('postEmail').addEventListener('submit', postEmail);

function postEmail(event){
    fetch('https://fiap-sender.herokuapp.com/email/send',
        {
            method: 'POST',
			headers: {
                'Accept': '/',
                'Content-Type': 'application/json',
                'accept-encoding': 'gzip, deflate',
            },
            body: JSON.stringify(msg),
        }
    ).then(data => {
        console.log(data);
        alert('email enviado com sucesso');
    }).catch(erro => {
        console.error(erro);
        alert('erro ao enviar email');
    });
}