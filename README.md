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

По этому номеру ищется файл на сервеной части приложения.
Например, вводим 21 - ищем файл вида 21-*.txt на сервере - находим файл 21-40.txt - на сервере 
формируем json и отдаем его на клиент

На клиенте на остновании этого json формируются данные для ПДФ файла, и сам ПДФ файл.

Сформированный файл открывается в соседней вкладке. Его можно сохранить и\или распечатать.

