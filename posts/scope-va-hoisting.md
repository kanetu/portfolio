---
title: "Scope và Hoisting"
date: "2018-10-11T08:45:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/scope-va-hoisting.png"
description: "Khi làm việc với javascript có bao giờ các bạn đã để ý là chúng ta hoàn toàn có thể sử dụng một biến trước khi chúng được khai báo không?. Thật ra mà nói thì không hề có chuyện sử dụng một biến trước khi nó được khai báo đâu, chỉ là với javascript thì ngôn ngữ này có cơ chế Hoisting vậy Hoisting là gì?"
tags:
  - "javascript"
---

Khi làm việc với javascript có bao giờ các bạn đã để ý là chúng ta hoàn toàn có thể sử dụng một biến trước khi chúng được khai báo không?. Thật ra mà nói thì không hề có chuyện sử dụng một biến trước khi nó được khai báo đâu, chỉ là với javascript thì ngôn ngữ này có cơ chế Hoisting vậy Hoisting là gì?

## 1. Hoisting là gì?

Hoisting được hiểu là khi chúng ta khai báo biến (chỉ khi dùng `var`) thì javascript sẽ chuyển lên trên cùng của hàm.

Chúng ta xét ví dụ:

```javascript
myFunc();

function myFunc() {
  console.log(x);
  var x = 3;
}
// kết quả là undefined
```

Theo cơ chế Hoisting thì javascript sẽ hiểu như sau:

```javascript
myFunc();

function myFunc() {
  var x; // x lúc này chưa được gán giá trị thì tức nhiên là undefined
  console.log(x);
  x = 3;
}
// kết quả là undefined
```

Vậy nó có đúng như tôi nói không ? chúng ta sẽ sử dụng 1 hàm kiểm tra xem biến đó đã tồn tại hay chưa để hiểu rõ liệu có gì sai sai ở đây không.

Hãy ấn F12 chọn Console để kiểm chứng đoạn code bên dưới

```javascript
myFunc();

function myFunc() {
  console.log(y);
}
```

Nếu bản thân trong hàm `myFunc()` không được khai báo thì khi chạy nó sẽ xuất hiện 1 lỗi như sau:

```javascript
VM113:4 Uncaught ReferenceError: y is not defined
    at myFunc (< anonymous >:4:14)
    at < anonymous >:1:1
```

Nếu nó không báo lỗi thì sao? thì có lẽ bạn đã khai báo biến đó ở bên ngoài hàm rồi. Javascript sẽ tìm theo thứ tự inner -> outer, ngộ nhỡ bạn khai báo biến `a` trong hàm `myFunc()` và khai báo biến `a` ở ngoài hàm thì theo cơ chế `Scope in javascript` thì nếu bên trong hàm không có thì nó sẽ lấy bên ngoài hàm. Bạn có thể kiểm chứng - Try it yourself.

Chúng ta thấy tiếp một định nghĩa `Scope` vậy scope là giống gì?

## 2️. Scope là gì

Scope trong Javascript được hiểu là phạm vi biến hay phạm vi truy cập của biến, phạm vi này được xác định bằng khoảng trống giữa 2 dấu braces `{}` , hmm đến đây thì Scope được chia thành 2 loại là `Global scope` và `Local scope`, đương nhiên chúng ta học nó không chỉ cho biết mà là để trong lúc làm việc ta xác định được cái nào là Global cái nào là Local để biết đường mà fix bugs, bảo trì.

Hmm.. ngồi tra 1 tí nhiều định nghĩa lắm chứ không ít đâu ngoài `local scope`,`global scope` mà cón có: function scope, lexical scope, scope chain, closure ..

### 2.1 Global scope

Chữ Global ở đây được hiểu là toàn cục, 1 biến toàn cục là biến được khai báo không nằm trong bất kì 1 hàm nào, ví dụ:

```javascript
// những biến khai báo ngoài đây đều là biến Global
var global_var = 3;

function myFunc(x) {
  // trong đây là 1 scope khác
}
```

Đấy đơn giản dễ hiểu không cầu kì :).

```
    Global scope là bạn tốt nhất và cũng là cơn ác mộng tồi tệ nhất!!! Nếu không nắm rõ mình đang nằm trong scope nào, chắc chắn ta sẽ gặp vấn đề với global scope (thường là xung đột namespace). Người ta cứ nói rằng việc dùng Global scope là rất dở, nhưng không phải trong mọi trường hợp
```

### 2.2 Local Scope

Local được hiểu là cục bộ, những biến khai báo trong 1 hàm được gọi là `Local scope`

```javascript
// những biến khai báo ngoài đây đều là biến Global

function myFunc(x) {
  // trong đây là 1 scope khác
  // biến nào khai báo trong đây được hiểu là Local
}
```

Hiểu đơn giản là vậy trước đã tiếp theo là phần nâng cao 1 tí đây

### 2.3 Function scope

Như tôi nói ở phần định nghĩa thì Scope được xác định bằng khoảng trống giữa 2 dấu braces `{}` nhưng nó chỉ đúng khi chúng ta khởi tạo 1 hàm, còn lại những `{}` của vòng lặp hay câu lệnh rẽ nhánh đều không tạo ra `scope` như:

1. `if`
2. `switch`
3. `for..`
4. `while..`
5. `...`

```javascript
// Scope A
var myFunction = function () {
  // Scope B
  var myOtherFunction = function () {
    // Scope C
  };
};
```

### 2.3 Lexical scope

Khi nhìn thấy một function nằm trong một function khác, function bên trong có quyền truy cập tới scope của function bên ngoài, đó gọi là `Lexical Scope` hay `Closure` - còn được gọi là `Static Scope`. Ví dụ:

```javascript
// Scope A
var myFunction = function () {
  // Scope B
  var name = "Kane"; // định nghĩa trong Scope B
  var myOtherFunction = function () {
    // Scope C: "name" vẫn có thể được truy cập đến từ đây!!
  };
};
```

Làm việc với Lexical scope cũng khá là dễ dàng, bật cứ biến/object/ function được định nghĩa trong scope cha, đều có thể được truy cập bởi các scope con nhỏ hơn

```javascript
var name = "Kane";
//Scope A
var scope1 = function () {
  // name có thể sử dụng ở đây
  //Scope B
  var scope2 = function () {
    // name có thể sử dụng ở đây
    // Scope C
    var scope3 = function () {
      // name có thể sử dụng ở đây
      // Scope D
    };
  };
};
```

Chú ý, Lexical scope không hoạt động theo chiều ngược lại, tức là biến/object/function định nghĩa trong scope con thì ko thể truy cập bởi scope cha.

Dấu `->` có nghĩa là có thể sử dụng, dựa vào ví dụ trên ta suy ra được thứ tự khả dụng

Scope D -> Scope C -> Scope B -> Scope A

Và ta không thể truy xuất biến của các scope theo chiều ngược lại như:

Scope A -> Scope B -> Scope C -> Scope D

### 2.4 Scope Chain

Hiểu đơn giản là nếu chúng ta sử dụng 1 biến `varA` trong hàm `myFunc()` mà hàm này không có biến `varA` thì nó sẽ tìm kiếm những biến nào có tên `varA` ở những scope liên tiếp bên ngoài nó.

Điều này khả dụng với Lexical scope, xét ví dụ:

```javascript
var name = "Kane";
//Scope A
var scope1 = function () {
  // name có thể sử dụng ở đây
  //Scope B
  var scope2 = function () {
    // name có thể sử dụng ở đây
    // Scope C
    var scope3 = function () {
      // name có thể sử dụng ở đây
      // Scope D
      console.log(name);
    };
  };
};
```

nếu `name` không có trong scope D thì nó sẽ tìm từng scope cha của nó từ trong ra ngoài scope nào có biến cùng tên `name` thì nó lấy

Scope D (name? yes:'no') -> Scope C (name? yes:'no') -> Scope B (name? yes:'no')-> Scope A (name? 'yes':no)

### 2.6 Closures

Closure có mối quan hệ chặt chẽ với Lexical Scope. Ví dụ tiêu biểu về cách thức hoạt động của closure đó là khi 1 function trả về tham chiếu tới 1 function.

```javascript
var sayHello = function (name) {
  var text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};
```

Khái niệm `closure` làm cho scope của ta không thể tiếp cận được public scope. Chỉ gọi function sẽ không thực hiện gì bởi nó trả về kết quả là tham chiếu tới function.

```javascript
sayHello("Kane"); // nó trả về tham chiếu của function và không thực hiện gì cả
```

Để method hoạt động ta cần gán nó vào biến rồi mới thực thi:

```javascript
var helloMethod = sayHello("Kane");
helloMethod(); // Hello Kane
```

Không nhất thiết phải trả về function mới được gọi là closure. Đơn giản chỉ cần truy cập tới biến nằm ngoài Lexical scope cũng là closure.

## 3 Tài liệu kham khảo

[Everything you wanted to know about JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/#what-is-scope)
