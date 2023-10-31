---
title: "Điểm qua những tính năng hấp dẫn trong ES6 - Phần 2"
date: "2018-07-05T10:15:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Trước tiên để hiểu gõ về tính năng tiếp theo ta cần hiểu gõ Object trong Javacript là gì, nếu ai đã hiểu rồi thì có thể scoll xuống mục 5."
tags:
  - "javascript"
---

## Research lại Object trong Javacript

Trước tiên để hiểu gõ về tính năng tiếp theo ta cần hiểu gõ Object trong Javacript là gì, nếu ai đã hiểu rồi thì có thể scoll xuống mục 5.

<blockquote>
  <p>Về mặt định nghĩa, một đối tượng (một object) là một danh sách các item, mỗi item là một cặp name-value, trong đó value có thể là: các kiểu dữ liệu cơ bản, function, hay cũng có thể là một object khác (kiểu dữ liệu phức hợp).</p>
</blockquote>

Ta gọi mỗi item là một property(thuộc tính) của object nếu value của item đó có kiểu dữ liệu là kiểu phức hợp hoặc các kiểu dữ liệu cơ bản, ngược lại nếu value của item nó là một hàm (một function) thì ta gọi nó là method của object (phương thức của object).

Ví dụ object:

```javascript
var myFirstObject = {
  firstName: "Richard",
  favoriteAuthor: "Conrad",
};
```

Có 2 cách để tạo ra Object là 1. Dùng Object literals. 2. Dùng Object constructor.

Mình sẽ nói ngắn gọn và cho ví dụ về 2 cách này để đi thẳng vào vấn đề.

### Dùng Object literals

Đại khái là sẽ dùng cặp ngoặc nhọn `{ }` để tạo một object. `Literal` có thể hiểu theo ngữ cảnh nào đó là việc “sử dụng chuỗi thuần tuý”.

Ex:

```javascript
var myBook = { 10: "test1" }; //đối tượng có 1 thuộc tính

//đối tượng có 1 thuộc tính và 1 phương thức (method)
var myCar = {
  brand: "Toyota",
  run: function () {
    console.log("running");
  },
};
```

### Dùng Object constructor

Cách này sẽ sử dụng phương thức khởi tạo (constructor) của kiểu dữ liệu Object để tạo ra các object. Phương thức khởi tạo này là một hàm để tạo ra các object mới, ta dùng kèm từ khoá `new`:

```javascript
//Tạo 1 đối tượng mới
var myApple = new Object();

//Thêm các thuộc tính cho đối tượng
myApple.color = "red";
myApple.shape = "round";
myApple.howSweet = function () {
  console.log("I am sweet");
};
```

### Tạo nhiều object cùng loại.

Ở mục 5.1 và 5.2 tôi đã giới thiệu cách tạo một `object` trong javascript nhưng đó chỉ là tạo một object thôi vậy để làm tao ta tạo một loạt những object cùng loại.

#### Sử dụng mẫu khởi tạo

Cách này giống như ta tạo một class trong các ngôn ngữ lập trình khác, nhưng khác là Javascript sử dụng từ khoá `function` để tạo ra một hàm khởi tạo đối tượng, dùng từ khoá `this` để gán các thuộc tính cho đối tượng:

```javascript
function Fruit(_color, _name) {
  this.color = _color;
  this.name = _name;
  this.showName = function () {
    console.log(this.name);
  };
}
```

Với hàm khởi tạo này, ta có thể tạo hàng loạt các đối tượng kiểu `Fruit` như sau:

```javascript
var mangoFruit = new Fruit("yellow", "Mango");
var appleFruit = new Fruit("red", "Apple");
```

#### Sử dụng prototype

Ex:

```javascript
function Fruit(_color, _name) {}

Fruit.prototype.color = "general_color";
Fruit.prototype.name = "general_name";
Fruit.prototype.showName = function () {
  console.log(this.name);
};
```

Với cách này thì ta cũng vẫn sẽ sử dụng hàm Fruit() để tạo ra các đối tượng object như cách ở trên:

```javascript
var mangoFruit = new Fruit("yellow", "Mango");
var appleFruit = new Fruit("red", "Apple");
```

### 5. Enhanced Object Literals in ES6

Như tôi đã nói ở trên ta có thể tạo một mẫu khởi tạo để tạo nhiều object cùng loại, nó tương tự class như trong các ngôn ngữ khác.

#### 5.1 Thuộc tính khởi tạo ngắn hơn

```javascript
//ES5
function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
  };
}

getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}
```

Trong ES6 ta không cần lặp lại những parameter `trùng tên` với thuộc tính.

```javascript
//ES6
function getLaptop(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}
```

#### 5.2 Viết phương thức (methods) ngắn hơn

Ở phiên bản ES5 cú pháp để viết phương thức trong `object` sẽ như thế này

```javascript
//ES5
function getLaptop(make, model, year) {
  return {
    sayModel: function () {
      return model;
    },
  };
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```

Với ES6 ta không cần viết quá nhiều để phương thức đó hoạt động.

```javascript
//ES6
function getLaptop(make, model, year) {
  return {
    sayModel() {
      return model;
    },
  };
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```

#### 5.3 Có thể tính toán trong property

Như ta đã biết thì có 2 cách để chỉ định một khóa khi xử lý một thuộc tính của object là dấu chấm `.` và dấu ngoặc vuông `[]`, dấu ngoặc vuông cho phép chúng ta xử lý thuộc tính của object với các biểu thức

Xem ví dụ này:

```javascript
var name = "make";
const laptop = {
  [name]: "Apple",
};

console.log(laptop.make); //"Apple"
```

Chúng ta thấy rằng nó cho phép ta truyền biến `name` vào dấu `[]` từ đó ta có thể `console.log` đối tượng `laptop` với thuộc tính `make` (là giá trị của biến `name`).

Bonus:

```javascript
var name = "make";
var i = 0;
const laptop = {
  [name + ++i]: "Apple",
  [name + ++i]: "Dell",
  [name + ++i]: "HP",
};

console.log(laptop.make1); //"Apple"
console.log(laptop.make2); //"Dell"
console.log(laptop.make3); //"HP"
```
