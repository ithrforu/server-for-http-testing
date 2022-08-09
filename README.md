## Простой сервер для тестирования HTTP запросов

Процесс запуска:
1) Клонировать репозиторий: `git clone git@github.com:ithrforu/server-for-http-testing.git`.
2) Перейти в папку *backend* `cd server-for-http-testing/backend` и установить зависимости `npm i`.
3) Запустить сервер `node index`.
4) Перейти в папку с примерами `cd ../frontend и загрузить` в неё ваш пример. В качестве url сервера указать адрес `http://127.0.0.1:3333`.
4) Запустить файл с примерами на локальном сервере. Для этого можно использовать [live-server](https://doka.guide/tools/web-server/#prostoy-veb-server) или встроенные утилиты вашего текстового редактора (например, [VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)). Запросы должны успешно отправляться на сервер, который в свою очередь их обработает. Отправляемые на сервер файлы (через formData) сохраняются в папке *backend/files*.
