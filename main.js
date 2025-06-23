// https://api.telegram.org/bot7918691481:AAEmj-82cKUuFC3rUxG_k8b7Ze-kLyCxnJM/getUpdates

let TOKEN = "7918691481:AAEmj-82cKUuFC3rUxG_k8b7Ze-kLyCxnJM";
let CHAT_ID = "7421811840";
let API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let succes = document.querySelector("#success");
let form = document.querySelector("#tg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let message = `<b><i>Заявка с сайта</i></b>\n`;
  message += ` <b>Отправитель:</b> ${this.username.value}\n`;
  message += ` <b>Номер:</b> ${this.number.value}\n`;
  message += `<b>Почта:</b> ${this.email.value}`;
  axios
    .post(API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.username.value = "";
      this.number.value = "";
      this.email.value = "";
      succes.style.displey = "block";
    }).catch((err) => {
        console.log(err);
        
    }).finally(() => console.log("SECCESS"))
});

// ? Hello World
