---
title: "Trusthy và Falsy"
date: "2018-09-28T01:00:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Truthy và Falsy là gì?, đây là một khái niệm mà rất nhiều người khi học Javascript rất ít khi để ý đến ngay cả mình cũng vậy."
tags:
  - "javascript"
---

Truthy và Falsy là gì?, đây là một khái niệm mà rất nhiều người khi học Javascript rất ít khi để ý đến ngay cả mình cũng vậy.

## 1. Primitive data type - Kiểu dữ liệu nguyên thủy

Khi chúng ta khai báo một biến nếu chúng ta không khai báo giá trị của cho biến thì tự động bên trong cơ chế Javascript sẽ `set` cho biến là `undefined` đúng không?

Và để hiểu gõ hơn thì sau đây là 6 kiểu dữ liệu nguyên thủy trong Javascript:

1. Undefined (Gía trị chưa được khai báo)
2. Null.
3. Boolean (true hoặc false).
4. Number (bao gồm `Infinity` và `NaN`).
5. String.
6. Symbol (một giá trị nguyên thủy độc nhất và không thay đổi => giá trị mới ở ES6).

Ngoài ra tất cả là đều là một đối tượng (Object) bao gồm cả `Array`

```javascript
var a;
// nếu chúng ta không gán giá trị thì mặc định là undefined
var y = 5;
// y = 5 lúc này y mang giá trị kiểu Number
```

## 2️. Truthy và Falsy

Mỗi giá trị có sẵn một giá trị `Boolean` mặc định thường được gọi là `Truthy and Falsy` và nếu chúng ta dùng nó trong so sánh (Loose Equality Comparisons - `==`) thì nó rất là ngáo ộp.

Để dễ dàng ghi nhớ thì những giá trị sau đây mặc định là \*\*Falsy:

- `false`
- 0 (zero)
- `''` hoặc `""` (chuỗi rỗng)
- `null`
- `undefined`
- `NaN` (Not a number - ví dụ: kết quả của 1/0)

Những giá trị còn lại là **Truthy** bao gồm cả:

- `'0'` (một chuỗi chứa số 0 cũng là chuỗi nha -> not number ok)
- `'false'` (một chuỗi chứa chữ false cũng tương tự)
- `[]`
- `{}`
- `function(){}`

Cách nhớ nhanh thì ta chỉ cần để ý những giá trị được liệt kê là Falsy thôi còn lại là Truthy tất.

## 3. Bonus hàm kiểm tra Truthy

```javascript
function isTruthy(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

console.log(isTruthy(true));
console.log(isTruthy("0"));
console.log(isTruthy([]));
console.log(isTruthy(1));
```

## 4. Nghiêm cứu thêm

[Loose Equality Comparisons và Retrict Equality Comparisons](https://www.sitepoint.com/javascript-truthy-falsy/)
