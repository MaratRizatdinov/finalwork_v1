# SkyVito

Сайт объявлений, где пользователи могут зарегистрироваться, просматривать объявления, добавлять свои объявления и оставлять комментарии.

## Особенности

### Для незарегистрированных пользователей:

- Возможность поиска товаров по ключевым словам
- Просмотр объявления
- Просмотр профиля продавца
- Возможность просматривать комментарии
- Возможность получать номер телефона продавца

### Для зарегистрированных пользователей (дополнительно):

- Смена имени, фамилии, города, телефона, аватарки
- Добавление объявления c фото и без фото
- Возможность снять объявление с публикации
- Редактирование объявления. добавлять и удалять фото к объявлению
- Добавление отзывов о товаре

## Требования

- Docker

## Установка и Запуск Бэкенда

1. Установите Docker, следуя инструкциям для вашей операционной системы.
2. Запустите Docker с помощью ярлыка.
3. Откройте терминал и перейдите в папку back-skyVito.
4. Выполните в терминале команду: `docker-compose -f docker-compose-backend.yaml up -d`
5. После первого выполнения команды все образы подтянутся, но могут не запуститься, в этом случае повторно выполните команду: `docker-compose -f docker-compose-backend.yaml up -d`
6. После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/

## Остановка бэкенда

Чтобы остановить работу бэкенда, выполните: `docker-compose -f docker-compose-backend.yaml down`


## Использованные библиотеки

В проекте были использованы следующие библиотеки:

- **React**: JavaScript-библиотека для создания пользовательских интерфейсов.
- **Redux**: Библиотека для управления состоянием приложения в React.
- **styled-components**: Библиотека для стилизации компонентов с использованием CSS внутри JavaScript.
- **RTK Query**: Библиотека для управления запросами к API и управления состоянием в Redux.
- **React Router**: Библиотека для навигации между компонентами React в приложении.
- **Docker**: Платформа для разработки, доставки и выполнения приложений в контейнерах.
- **Swagger**: Инструмент для документирования и тестирования API.
- **date-fns**: Библиотека для работы с датами в JavaScript.

## Демо

1. [Демонстрация действий неавторизованного пользователя](src/gifs/Demo-unAuthorUser.gif)
2. [Демонстрация процесса регистрации](src/gifs/Demo-Registration.gif)
3. [Смена профиля и аватарки зарегистрированного пользователя](src/gifs/Demo-UpdateUserInfo.gif)
4. [Добавление объявления](src/gifs/Demo-AddAdv.gif)
5. [Редактирование объявления и добавление/удаление фотографий](src/gifs/Demo-UpdateAdv.gif)
6. [Добавление комментария](src/gifs/Demo-AddComment.gif)

## Структура проекта

Основные каталоги и файлы:

finalwork_v1/
|-- back-skyVito/
| |-- data/
| |-- .dockerignore
| |-- docker-compose-backend.yaml
| |-- Dockerfile
|-- node_modules/
|-- public/
| |-- fonts/
| |-- images/
| |-- index.html
|-- src/
| |-- components/
| | |-- AdvPage/
| | | |-- ModalComments/
| | | | |-- exit-hover.png
| | | | |-- exit.png
| | | | |-- ModalComments.jsx
| | | | |-- ModalComments.style.js
| | | | |-- Vector.svg
| | | |-- AdvPage.jsx
| | | |-- AdvPage.style.js
| | |-- AuthPage/
| | | |-- Logotype/
| | | | |-- logo.svg
| | | |-- Logotype.jsx
| | | |-- Logotype.style.js
| | | |-- ModalInput/
| | | | |-- ModalInput.jsx
| | | | |-- ModalInput.style.js
| | | |-- authPage.jsx
| | | |-- authPage.style.js
| | | |-- logo-mob.svg
| | |-- CardsField/
| | | |-- CardsField.jsx
| | | |-- CardsField.style.js
| | |-- Footer/
| | | |-- circle.svg
| | | |-- footer.jsx
| | | |-- footer.style.js
| | | |-- home.svg
| | | |-- profile.svg
| | |-- Layout/
| | | |-- Header/
| | | | |-- exit.svg
| | | | |-- header.jsx
| | | | |-- header.style.jsx
| | | | |-- logo-mob.svg
| | | |-- Navigation/
| | | | |-- logotype.svg
| | | | |-- Navigation.jsx
| | | | |-- Navigation.style.js
| | | |-- Title/
| | | | |-- Title.jsx
| | | | |-- Title.style.jsx
| | | | |-- Vector.svg
| | | |-- layout.jsx
| | | |-- layout.style.js
| | |-- Mainpage/
| | | |-- Mainpage.jsx
| | |-- ModalAdv/
| | | |-- exit-hover.png
| | | |-- exit.png
| | | |-- logo-mob.svg
| | | |-- ModalAdv.jsx
| | | |-- ModalAdv.style.jsx
| | | |-- ModalSVG.jsx
| | | |-- Vector.svg
| | |-- ProfilePage/
| | | |-- ModalAvatar/
| | | |-- ProfilePage.jsx
| | | |-- ProfilePage.style.js
| | |-- Profiles/
| | | |-- Profiles.jsx
| | |-- ProtectedRoute/
| | | |-- ProtectedRoute.jsx
| | |-- SellerPage/
| | | |-- SellerPage.jsx
| | | |-- SellerPage.style.js
|-- pages/
| |-- login.jsx
| |-- main.jsx
| |-- notfound.jsx
| |-- profile.jsx
| |-- registration.jsx
|-- redux/
|-- scripts/
| |-- tools.js
|-- App.jsx
|-- GlobalStyle.jsx
|-- index.js
|-- routes.jsx
|-- todo.md
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc.json
|-- package-lock.json
|-- package.json
