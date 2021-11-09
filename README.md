This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
или
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Клиентская часть приложения распечатки карточек для выучивания слов.
В поле ввода нужно ввести номер карточки, с которого будет начинаться страница.


## На странице /dictNum:

По этому номеру ищется файл на сервеной части приложения.
Например, вводим 21 - ищем файл вида 21-*.txt на сервере - находим файл 21-40.txt - на сервере 
формируем json и отдаем его на клиент

На клиенте на остновании этого json формируются данные для ПДФ файла, и сам ПДФ файл.

Сформированный файл открывается в соседней вкладке. Его можно сохранить и\или распечатать.

## На странице /search:

Страница для поиска слов в сторонних словарях
Сейчас реализован поиск в yandex.translate

Для того, чтобы заработало, нужно:
# Установить Scripty chrome extention [отсюда](https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam)
Это расширение, которое добавляет скрипты на указанные страницы при их загрузке в браузер
Мы будем добавлять скрипты к страницам словарей (для начала yandex.translate), которые будут парсить страницу с переводом и отправлять результат на страницу, которая эту страницу отпкрыла
# Создать скрипт в этом расширении для подгрузки, для начала, к yandex.translate
```javascript
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if(event.data === "call me back plz!") {
    sendResultWhenReady(event.source, event.origin)
  }
}

function sendResultWhenReady(source, origin) {
  let counter = 0
  const interval = setInterval(() => {
  	const result = document.querySelectorAll('.dictionary-meaning')
    if(!result || !result.length) {
      counter++
      return
    }
    clearInterval(interval)
    const res = [...document.querySelectorAll('.dictionary-meaning')].map(el => el.innerHTML)
    source.postMessage(JSON.stringify({ type: 'answer', data: res }), origin);
  }, 200)
}
```
Данный код устанавливает обработчик события 'onmessage'. 
Если через postMessage (это такой механизм общения окон браузера) приходит сообщение 'call me back plz!',
этот код запоминает окно, которое послало это сообщение, и ожидает, когда появится элемент dom,
в котором содержится варианты перевода.
Когда такое элемент появляется, из него вытаскиваются необходимые данные, преобразуются в массив,
и посылаются в окно, из которого пришел запрос.

После создания скрипта в расширении, нужно настроить подгрузку этого скрипта на страницу yandex.translate
![здевь картинка](https://github.com/mbob72/flashCardPrepare/raw/master/captureScript.PNG "Logo Title Text 1")
Т. е. загрузка скрипта на странцах https://translate.yandex.ru/*, не дожидаясь загрузки всего контента 

# Проверка результата
Если все сделано правильно, при вводе английского слова в поле ввода на странице /seardh, 
происходит открытие вкладки с переводом этого слова в yandex.translate

Если после этого вернуться на страницу приложения на localhost:3000, в консоли можно увидеть массив слов - варианты перевода слова


