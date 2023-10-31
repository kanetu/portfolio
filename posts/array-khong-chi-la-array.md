---
title: "Array Không Chỉ Là Array "
date: "2018-09-09T05:45:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Hầu hết các ngôn ngữ đều trang bị kiểu aray để xử lý, lưu trữ nhiều phần tử cùng lúc, JS cũng không ngoại lệ NHƯNG array trong JS không chỉ đơn giản là array."
tags:
  - "javascript"
---

Hầu hết các ngôn ngữ đều trang bị kiểu aray để xử lý, lưu trữ nhiều phần tử cùng lúc, JS cũng không ngoại lệ NHƯNG array trong JS không chỉ đơn giản là array.
Chúng ta có thể dùng array làm:

1. Array, cái này đương nhiên.
2. Stack.
3. Queue.
4. Dictionary.
5. Sortable List.
6. String Builder.
7. Combo.

## 1️. Stack

Bỏ qua cái thứ 1, chúng ta có thể dùng array như 1 stack, đặc tính của stack là LIFO (đi trễ về sớm). Có 2 method để là chuyện này là push và pop

```javascript
const array = [1, 2, 3];
array.push(4); // => [1, 2, 3, 4]
array.pop(); // => [1, 2, 3]
```

## 2. Queue

Sử dụng array như 1 queue cũng có 2 method là unshift (enqueue), shift (dequeue) để đảm bảo đặc tính FIFO (đi sớm về sớm)

```javascript
const array = [1, 2, 3];
array.shift(); // => [2, 3
array.unshift(1); // => [1, 2, 3]
```

## 3. Dictionary

Dùng array như môt Dictionary có hơi miễn cưỡng nhưng ok, fine, nó vẫn hoạt động bình thường

```javascript
const array = [1, 2, 3];
array['$key1'] = 1; => [1, 2, 3]
array.$key2 = 2; => [1, 2, 3]
delete array.$key; => [1, 2, 3]
```

Như các bạn đã thấy, việc thao tác trên key có 2 điểm cần lưu ý, key phải thêm ký tự phân biệt nào đó để tránh trùng tên với những prop/method của array, ở đây mình dùng dấu $. Thứ hai là việc thêm hay xóa key không làm thay đổi số lượng phần tử trong array. Muốn duyệt key thì dùng

```javascript
for(let key in array) // => 1, 2, 3, $key1 (không có $key2 vì đã bị delete)
```

## 4. Sortable List

Dùng array như sortable list khá đơn giản, bản thân method sort của array là mutable nên mỗi lần thêm item mới vào thì chúng ta sort lại

```javascript
const array = [5, 6, 7];
array.push(1); // => [5, 6, 7, 1]
array.sort(); // => [1, 5, 6, 7]
```

## 5. String Builder

Array còn được sử dụng như String Builder, đa số ngôn ngữ lập trình, việc nối chuỗi mất khá nhiều bộ nhớ và chậm, vi mỗi lần nối chuỗi thì hệ thống phải cấp phát vùng nhớ mới rộng hơn, ứng với độ dài chuỗi củ và mới cộng lại, sau đó sao chép cả 2 vào đó. Nên xử lý chuỗi nhiều có thể làm chậm he thống, vì vậy String Builder ra đời, giúp tối ưu việc chỉnh sửa chuỗi.

```javascript
const stringBuilder = [];
for(let i [0; i < 10000; i++) {
  stringBuilder.push('Hello World');
}
const result = stringBuilder.join('');
```

## 6. Combo

Cách này là một cách tà đạo của array, dùng kết hợp array + dictionary. Ví dụ bạn có một hàm tìm kiếm theo điều kiện sau đó trả về danh sách kết quả tìm được và thứ tự của các phần tử đó trong danh sách ban đầu

```javascript
const userTable = [{ name: "A" }, { name: "B" }, { name: "C" }];
function findUsers(predicate) {
  const indexes = [];
  const users = userTable.filter((user, index) => {
    if (predicate(user)) {
      indexes.push(index);
      return true;
    }
    return false;
  });
  return { users, indexes };
}
const result = findUsers((user) => user.name === "A" || user.name === "C");
console.log(result.users); // => [ { name: 'A' }, { name: 'C' } ]
console.log(result.indexes); // => [0, 2]

// cách làm truyền thống như trên có thể thay thế bằng
function findUsers(predicate) {
  const indexes = [];
  const users = userTable.filter((user, index) => {
    if (predicate(user)) {
      indexes.push(index);
      return true;
    }
    return false;
  });
  users.indexes = indexes;
  return users;
}
const result = findUsers((user) => user.name === "A" || user.name === "C");
console.log(result); // => [ { name: 'A' }, { name: 'C' } ]
console.log(result.indexes); // => [0, 2]
```

☑️ Tổng kết lại thì JS trang bị một kiểu array quá bá đạo, nó có thể đảm nhiệm nhiều chức năng của những kiểu dữ liệu khác nhau. Vẫn câu nói cũ: Tuy đơn giản nhưng không kém phần phức tạp :D
