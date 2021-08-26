import {receiveMessage} from "./messageListener";

export default function getTranslation(host, params, word) {

  const windowYandexTranslate = window.open(
      host + params + word,
      "_blank"
  );
  setTimeout(() => {
    windowYandexTranslate.blur();
    window.focus();
  }, 2000)

  setTimeout(() => windowYandexTranslate.postMessage("call me back plz!", host), 2000);

  return new Promise(res => {
    window.addEventListener("message", receiveMessage(res), false);
  })
}
