# [서버] 원트립 - One Trip server 


## 🛠 기술 스택
![Express-image][Express-image] ![Node.js-image][Node.js-image] ![Nodemon-image][Nodemon-image] ![Sequelize-image][Sequelize-image] ![SQLite3-image][SQLite3-image]



<br>

### 🔗 [원트립 사이트 바로가기](https://onetrip-kimminjung96.vercel.app/)
### 🔗 [원트립 프론트 깃허브 바로가기](https://github.com/kimminjung96/OneTrip)

### 🔗 [원트립 백앤드 URL 바로가기](https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/)
### 🔗 [원트립 백앤드 깃허브 바로가기](https://github.com/Youngjung3/onetrip_server)

<br>

> PWA 앱으로 제작한 풀스택 프로젝트입니다.     
> 프론트는 React를 사용해 제작했으며, Node JS의 Express를 활용해 백엔드 서버를 구현하였고,     
> Sequelize를 사용하여 데이터베이스 모델링을 진행했습니다.

<br>

> 혼자라서 충분한 여행, 원트립입니다.

원트립은 혼자 여행을 즐기는 사람들을 위한 여행 상품 판매 페이지의 서버입니다.     
문화생활, 맛집탐방, 액티비티, 휴식, 쇼핑 다섯가지 테마에 맞는 여행을 제안하며,     
상품 등록, 품절, 결제, 찜, 검색, 후기 작성 기능을 제공합니다.     

![](./public/images/main-screenshot.png)

<br>

## ⏲ 개발 기간
2023년 03월 07일 ~ 2023년 03월 31일

<br>


## 👀 구성원

🌳 김민정 – [kimminjung96](https://github.com/kimminjung96)     
🌼 김영중 – [Youngjung3](https://github.com/Youngjung3)     
🍀 김인혜 – [ihkim8](https://github.com/ihkim8)     
🌵 정이진 – [ejin1018](https://github.com/ejin1018)     


<br>

## 🧰 역할 배분

🍀 김인혜: 팀장, 전체 기획 총괄, 기획 자료 수립·정리, Productt(지역명 분류), Login(로그인) 개발      
🌼 김영중: 개발 팀장, 데이터 베이스 구조 수립, 제품 데이터 베이스 설계 및 관리 총괄, 데이터 api 개발, RecomSlider(테마별 분류) 개발     
🌳 김민정: 프론트 팀장, 개발 환경 구성, Create(상품 등록) 개발, 리뷰 데이터 베이스 설계 및 api 개발        
🌵 정이진: 디자인 팀장, 프론트 팀원, SearchPage(상품 검색), Packages(상품 상세) 개발    

<br>

## 👩‍👩‍👧‍👧 협업
[깃허브 플로우]
1. main 브랜치 잠금
2. 개발 전용 develop 브랜치 생성
3. 개인 브랜치 생성 후 작업
4. develop 브랜치로 이동 후 개인 브랜치 merge
5. develop 브랜치 push
6. 최종 배포시 main 브랜치 push

<br>

## 💎 Rest API
### 🔗 [원트립 백앤드 상품URL 바로가기](https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/products)
### 🔗 [원트립 백앤드 리뷰URL 바로가기](https://port-0-onetrip-server-nx562olfc8wgdo.sel3.cloudtype.app/reviews)


| Method     | Request                     | Format    | Description                 | 
| ---------- | --------------------------- |---------- |---------------              | 
| GET        | /products                   | JSON      | 모든 관광상품 조회            | 
| GET        | /product                    | JSON      | 4개의 상품조회                | 
| GET        | /producttheme               | JSON      | 테마 조회                     | 
| GET        | /productdate                | JSON      | 최신상품 조회                 | 
| GET        | /products/:id               | JSON      | 상품 상세                     | 
| GET        | /productt/:p_area           | JSON      | 지역별 상품                   | 
| GET        | /likepage/:heart            | JSON      | 찜한 상품 조회                | 
| GET        | /reviews                    | JSON      | 모든 리뷰 조회                | 
| GET        | /review                     | JSON      | 하나의 리뷰 조회              | 
| POST       | /products                   | JSON      | 상품데이터 저장               | 
| POST       | /purchase/:id               | JSON      | soldout 저장                 | 
| POST       | /heart/:id                  | JSON      | 찜하기 저장                   | 
| POST       | /heart2/:id                 | JSON      | 찜하기 취소                   | 
| POST       | /reviews                    | JSON      | 리뷰데이터 저장                | 
| POST       | /image                      | JSON      | 이미지 데이터 저장             | 


<br>

## 💎 models
### 👉 Product
| Name         | allowNull    | Type   | Default            | 
| ------------ | ------------ |--------|---------------     | 
| p_name       |  false       | -      | 관광 상품명         | 
| p_country    |  false       | -      | 관광 나라(국내,해외) | 
| p_area       |  false       | -      | 관광 지역           | 
| price        |  false       | -      | 관광 가격           | 
| p_sdate      |  false       | -      | 관광시작 날짜        | 
| p_edate      |  false       | -      | 관광끝나는 날짜      | 
| p_snum       |  true        | -      | 출발 비행기 편명    | 
| p_enum       |  true        | -      | 돌아오는 비행기 편명 | 
| trans        |  false       | -      | 출발 교통수단       | 
| retrans      |  false       | -      | 돌아오는 교통수단   | 
| theme        |  true        | -      | 관광 테마          | 
| imageUrl     |  true        | -      | soldout 저장       | 
| count        |  false       | -      | 찜하기 저장         | 
| departure    |  false       | -      | 찜하기 취소         | 
| redeparture  |  false       | -      | 리뷰데이터 저장     | 
| hotel        |  true        | -      | 숙박               | 
| soldout      |  false       | 0      | 상품솔드아웃        | 
| heart        |  false       | 0      | 찜하기              | 
| start        |  false       | -      | 출발지              | 
| end          |  false       | -      | 도착지              | 

### 👉 Review
| Name         | allowNull    | Type   | Default          | 
| ------------ | ------------ |--------|---------------   | 
| user_name    |  false       | -      | 작성자 명         | 
| r_title      |  false       | -      | 리뷰 제목         | 
| r_text       |  false       | -      | 리뷰 내용         | 
| r_area       |  false       | -      | 리뷰할 지역       | 
| r_imageUrl   |  false       | -      | 리뷰이미지        | 


<br>

## 개발 환경 설정

```sh
npm i cors
npm i express
npm i multer
npm i nodemon
npm i sequelize
npm i sqlite3
```


<!-- Markdown link & img dfn's -->
[Express-image]:https://img.shields.io/badge/Express-v4.18.2-%23000000?logo=Express
[Node.js-image]:https://img.shields.io/badge/Node.js-v16.19.0-%23339933?logo=Node.js
[Nodemon-image]:https://img.shields.io/badge/Nodemon-v2.0.21-%2376D04B?logo=Nodemon
[Sequelize-image]:https://img.shields.io/badge/Sequelize-v6.29.3-%2352B0E7?logo=Sequelize
[SQLite3-image]:https://img.shields.io/badge/SQLite3-v5.1.6-%23003B57?logo=SQLite