# 폴더 모양


```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜List.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂pages
 ┃ ┣ 📜TodoDetail.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
 ```

## 컴포넌트 구조

* Detail.jsx : 라우터 할 TodoDetail 페이지의 상세 내용 기재
* Form : 투두리스트의 [제목, 내용, 추가하기] 버튼 및 dispatch 해오는 값, 변경되는 setTitle~SetContent 등 기능 구현
* Header : 투두리스트 맨 상단 헤더 모양 구현
* Layout : 전체 내용이 들어갈 레이아웃 구현, 스타일 컴포넌트 전체 크기 설정, 안에 헤더 연결
* List : 투두리스트의 리스트 카드안에 들어갈 key 값
* Todo : 투두리스트 리스트 카드 버튼 기능 구현 및 상세보기 링크 추가


## pages 구조

* TodoDetail.jsx : Detail 페이지와 연결
* TodoList : Layout(Header 연결) 연결 및 Layout 안에 Form, List 연결


## redux 구조

* config
 * configStore.js : rootReduce 연결 페이지(모듈 안 todos 연결)
* modules
 * todos.js : 액션 명령, 크리에이터, 리듀서 등 모듈 구성


## shared 구조

* Route.js : BrowserRouter, Routes, Route 설정 및 path 주소값 , element 설정


## App.js

* 라우터 연결


## index.js

```c
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/config/configStore';
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
