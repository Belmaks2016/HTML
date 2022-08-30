nameElement=document.querySelector('[name="name"]');
surnameElement=document.querySelector('[name="surname"]');
buttonElement=document.querySelector('.send');
answerElement=document.querySelector("[name='answer']");

buttonElement.addEventListener("click", () => 
answerElement.innerHTML='Здравствуйте, ' + nameElement.value + ' ' + surnameElement.value + '!');