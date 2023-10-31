---
title: "Coding Convention - Qui ước mã hóa"
date: "2019-07-05T10:15:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: 'Để viết bài này mình sẽ đi theo định nghĩa "What is coding convention" của thầy Ân Nguyễn, còn lại là những chia sẽ suy nghĩ của cá nhân mình, nên sẽ không khỏi thiếu sót và cần bổ sung từ thầy cô và các bạn.'
tags:
  - "soft-skills"
---

Để viết bài này mình sẽ đi theo định nghĩa "What is coding convention" của thầy Ân Nguyễn, còn lại là những chia sẽ suy nghĩ của cá nhân mình, nên sẽ không khỏi thiếu sót và cần bổ sung từ thầy cô và các bạn.

Coding convention bao gồm những phần: file organization, indentation, comments, declarations, statements, white space, naming conventions, programming practices, programming principles,...quá nhiều cho một post cho nên mình sẽ trọng tâm vào những cái thường gặp.

Why do we need to follow the coding convention?

- Làm cho code dễ đọc hơn.
- Chuyên nghiệp.
- Mã nguồn dễ bảo trì chỉnh sửa hơn.
- Tạo sự tôn trọng dành cho người đến sau.

## 1. FILE ORGANIZATION

Việc tổ chức file này rất quan trọng và theo mình nó được coi là cột sống của dự án, những việc này thường được những người có kinh nghiệm đảm nhiệm. Các thư mục được tổ chức phân theo từng chức năng như: route, components, container, assets,...

Đối với những dự án vừa và nhỏ người ta thường chia dự án theo MVC tức model, view, controller, với những dự án lớn người ta sẽ có cách chia khác nhau nữa là chia theo từng chức năng của hệ thống để dễ dàng chỉnh sửa như: post, payment, product...

Những cài đặt liên quan đến triển khai hệ thống: docker, webpack,.. phân chia môi trường: development, staging, production, cài đặt database,... Để hiểu và làm được những thứ này bạn đã đủ lên trình senior rồi

## 2. COMMENT

Đối với lập trình mà nói việc code mà không để lại comment là trash code nhất là đối với những bạn làm BE, những xử lý logic phức tạp bạn phải loay hoay cả buổi mà không biết mình đang làm gì vì lỡ quay sang thằng bạn kế bên, điều này thật kinh khủng, Thói quen comment trước khi làm là một kỹ năng và kỹ năng đó sẽ mang lại nhiều lợi ích hơn bạn tưởng

```javascript
// Feature:
callAPI function callAPI(){
   // List what you handler here
   iUsingThisPackageToGetAPI();
   // It is better when comment each line
}
```

Và một cảnh giới của giới lập trình là: **Good code is self-documenting** nghĩa là không cần comment người khác nhìn vào cũng biết code mình làm gì, mình ghét nhất code kiểu đánh đố nhau, cực kỳ ghét.

## 3. INDENTATION

Luôn thục đầu dòng 1 tab trước cha mẹ của nó cũng như học sinh phải biết lễ phép với thầy cô, điều này giúp code sáng sủa hơn nhìn vào phát là kết ngay và quan trọng hơn tính chất này còn là sự bắt buộc ở những ngôn ngữ dạng Hyper text như Jade/Pug (thử đi để thấy độ khó chịu).

[Pug](https://pugjs.org/api/getting-started.html).

_Ex1: Bad practice_

```javascript
function IAmYourFather() {
  //the children say
  noIAmYourChildrenOK();
}
```

_Ex2: Good practice_

```javascript
function IAmYourFather() {
  // the children say
  YesDaddy();
}
```

## 4. DECLARATIONS

Việc khai báo biến thì phải khai báo ngay ở đầu file, khai báo thuộc tính phải ở sau tên class Đối với những ngôn ngữ lập trình cho phép khai báo tên hàm thì hãy làm điều đó trước khi định nghĩa hàm để khi lướt qua ta có thể biết nó có những hàm nào, định nghĩa ra sao, input, output...

```javascript
// Find max number
int max(int a, int b);

int max(int a, int b){
  // define here
}
```

## 5. NAMING CONVENTIONS

Hiện nay ta có một số qui ước để đặt tên cho biến, hàm tuy nhiên nó sẽ được điều chỉnh linh hoạt trong khi làm việc nhóm, nhưng thông thường sẽ như thế này:

1. Tên Biến sẽ dùng chữ in thường, gạch dưới "\_" giữa những chữ in thường: `int firstname = "Kane"`
2. Tên Hằng sẽ dùng chữ in hoa toàn bộ: `const KANEBLOG = "https://kanetu.github.io/"`
3. Tên Hàm/Method sẽ viết theo kiểu Camel (lạc đà): `myFunction()`
4. Tên Class viết theo kiểu StudlyCaps (Pascal Case), in hoa mỗi chữ cái đầu: `class PaymentVnpay{}`

Hãy dành thời gian để xem cái này để hiểu gõ hơn:
[Qui tắt đặt tên biến - Code style (PHP code style, Database naming convention. Mastering Git - {Be} Solution)](http://bit.ly/2mA3crH).
tags:

## 6 FORMAT CODE TOOL

Nếu bạn đang code JavaScript hãy sử dụng ESLint trên VSCode nó sẽ giúp bạn format lại code theo đúng chuẩn ES6
