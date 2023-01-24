# Redux - Toolkit

##### Что такое Redux ?

> Это библиотека для работы с состоянием приложения ( проще говоря ХРАНИЛИЩЕ ДАННЫХ )

# Какую проблему решает Redux ?

![Redux](./src/images/REDUX1.png)

# Redux - в реальной жизни !

![Redux](./src/images/DISPATCH.png)

# Как установить пакеты Redux Toolkit в свой App.js ?

> npm install @reduxjs/toolkit react-redux

> yarn add @reduxjs/toolkit react-redux

# Methods Redux Toolkit

- configureStore()
  > configureStore(): оборачивает createStore, чтобы обеспечить упрощенные параметры конфигурации и хороший
  > значения по умолчанию. Он может автоматически комбинировать ваши редукторы слайсов, добавлять любое промежуточное ПО Redux, которое вы поставляете,
  > по умолчанию включает redux-thunk и позволяет использовать расширение Redux DevTools Extension.
- createReducer()

  > createReducer(): это позволяет вам предоставить справочную таблицу типов действий для функций редуктора регистра, а не
  > чем писать операторы switch. Кроме того, он автоматически использует библиотеку immer, чтобы вы могли писать
  > более простые неизменяемые обновления с обычным мутативным кодом, например state.todos[3].completed = true.

- createSlice()
  > createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and
  > automatically generates a slice reducer with corresponding action creators and action types.
