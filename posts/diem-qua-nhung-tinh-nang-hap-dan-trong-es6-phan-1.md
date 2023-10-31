---
title: "Điểm qua những tính năng hấp dẫn trong ES6 - Phần 1"
date: "2018-07-04T08:15:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: 'Sau một thời gian nghiên cứu về ReactJS tôi nhận ra mình còn chưa ổn về javascript và tham khảo trên mạng thì có một thành viên trong nhóm nói rằng: "Chưa nghiêm cứu về ES6 mà đã vội học ReactJS là một sai lầm", ai cũng thế khi nghe nói như vậy thì chắc hẵn sẽ nghĩ là ES6 lợi hại vậy sao?, có lẻ mình đã cầm đèn chạy trước oto rồi.'
tags:
  - "javascript"
---

Sau một thời gian nghiên cứu về ReactJS tôi nhận ra mình còn chưa ổn về javascript và tham khảo trên mạng thì có một thành viên trong nhóm nói rằng: "Chưa nghiêm cứu về ES6 mà đã vội học ReactJS là một sai lầm", ai cũng thế khi nghe nói như vậy thì chắc hẵn sẽ nghĩ là ES6 lợi hại vậy sao?, có lẻ mình đã cầm đèn chạy trước oto rồi.

Học vững cái căn bản và tiếp thu công nghệ, bạn không thể sống mãi ở thế kỉ 20 được, vậy nên hôm nay tôi muốn note lại cho mình những tính năng tôi thích nhất trong ES6.

## 1. Default Parameters in ES6

Tôi còn tưởng rằng nó đã có từ lâu vì đã quen đặt giá trị mặc định cho parameters từ PHP nên khi thấy ES6 có tính năng này tôi tưởng mình đã đi trước từ lâu :D

Lúc trước thì để đặt một parameters mặc định ta làm như sau:

```javascript
var link = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    ...
}
```

ES6 xuất hiện, chúng ta có thể đặt giá trị mặc định trong `()` của `function`

```javascript
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
  ...
}
```

Tất nhiên nó chỉ là mặc định, chúng ta có thể thay đổi nó trong thân function, ý nghĩa của việc để giá trị mặc định là giúp ta luôn đúng trong mọi trường hợp, thử nghĩ mà xem nếu ta không truyền vào màu của một đoạn text thì không lẻ nó trông suốt không màu :D, vậy nên color mặc định trong trường hợp này có thể là màu đen hoặc một màu nào đó bạn muốn default.

## 2. Template Literals in ES6

Template Literals hay `interpolation` trong các ngôn ngữ khác là một cách hiển thị các biến trong chuỗi. Trong ES5 chúng ta làm như thế này:

```javascript
var name = "Your name is " + first + " " + last + ".";
var url = "http://localhost:3000/api/messages/" + id;
```

Khi học về tính năng của một ngôn ngữ nào đó các bạn nhớ phải để ý xem từ khóa tiếng anh của tính năng đó là như thế nào để thuận tiện cho việc ghi nhớ cũng như pro lên như ở đây là `interpolation`.

Trở lại vấn đề trong ES6 chúng ta có thể sử dụng cú pháp mới ${name} bên trong chuỗi:

```javascript
var name = `Your name is ${first} ${last}.`;
var url = `http://localhost:3000/api/messages/${id}`;
```

Tính năng này cũng có trong PHP, tôi không nhớ là ở version bao nhiêu nhưng tôi sử dụng được ở PHP như:

```javascript
	$name = 'Kane';
	echo ' Hello $name!';
```

Ngoài lề tí thôi tiếp tục tính năng khác nào.

## 3. Multi-line String in ES6

Một syntactic sugar khác là chuỗi có nhiều dòng (multi-line string). Trong ES5, chúng ta làm như thế này:

```javascript
var roadPoem =
  "Then took the other, as just as fair,\n\t" +
  "And having perhaps the better claim\n\t" +
  "Because it was grassy and wanted wear,\n\t" +
  "Though as for that the passing there\n\t" +
  "Had worn them really about the same,\n\t";

var fourAgreements =
  "You have the right to be you.\n\
    You can only be you when you do your best.";
```

Thật sự tôi rất ít khi viết nhiều như thế này trong 1 biến javascript nhưng có thì xem biết đâu chừng có ngày sử dụng.

Trong ES6, chỉ cần sử dụng dấu backticks: ` `` `

```javascript
var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`;

var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`;
```

## 4. Block-Scoped Constructs Let and Const

Tính năng này cho ta thêm một cách khai báo biến nhưng có trong phạm vi block, các bạn nào có học về OOP thì chắc chắn có hiểu biết về phạm vi biến như private, public, protected các kiểu nhưng là giữa các `class` với nhau.

Block-Scoped trong ES6 thì có từ khóa `let` cho phép chúng ta khai báo biến trong phạm vi các khối lệnh. Các khối lệnh được định nghĩa bởi cặp ngoặc nhọn {}. Trong ES5, các khối không giới hạn phạm vi của các biến:

```javascript
function example(a, b) {
  if (a > b) {
    var temp = a;
    a = b;
    b = temp;
  }
  console(a);
  console(b);
  console(temp);
}
// example(10,5)
// console: a = 5
// console: b = 10
// console: temp = 10;
```

Và hãy so sánh với hàm này khi sử dụng `let`

```javascript
function example(a, b) {
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  console(a);
  console(b);
  console(temp);
}
// example(10,5)
// console: a = 5
// console: b = 10
// console: temp = undefine;
```

Đấy có nghĩa là biến `temp` chỉ có thể sử dụng trong `{}` mà nó bị bao phủ thôi còn khi ra ngoài nó sẽ tự động giải phóng giúp tiết kiệm tài nguyên.

Còn `const` thì sao? đơn giản nó là hằng, mà hằng thì không bao giờ thay đổi

```javascript
function kaneFunction(oke) {
  const a = 0;
  if (oke) {
    -{ label: "javascript", color: "#434343" };
  }

  return a;
}
// kaneFunction(true)
// console: a = 0
```
