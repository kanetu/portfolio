---
title: "Cơ chế bất đồng bộ trong Javascript"
date: "2018-07-05T10:15:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Như bao ngày giờ là lúc rãnh nên tôi quyết định tìm hiểu xem cơ chế bất đồng bộ trong javascript nó hoạt động như thế nào, ta xem ví dụ sau"
tags:
  - "javascript"
---

Như bao ngày giờ là lúc rãnh nên tôi quyết định tìm hiểu xem cơ chế bất đồng bộ trong javascript nó hoạt động như thế nào, ta xem ví dụ sau:

```javascript
console.log("Dong 1");
console.log("Dong 2");
console.log("Dong 3");
```

Như các bạn thấy thì nhìn vào ta biết ngay nó sẽ in ra những gì, lần luật là:

```javascript
Dong 1
Dong 2
Dong 3
```

Bây giờ ta đặt thêm `setTimeout()` cho dòng thứ 2 để xem sao:

```javascript
console.log("Dong 1");

setTimeout(function () {
  console.log("Dong 2");
}, 1000);

console.log("Dong 3");
```

Kết quả khi chạy ra đoạn code sau:

```javascript
Dong 1
Dong 3
Dong 2
```

Ta nhận ra rằng đáng lẽ sau `Dong 1` thì mới đến `Dong 2` đằng này nó nhảy qua `Dong 3` rồi mới đến `Dong 2`, để giải thích điều này thì thay vì chờ đợi dòng code nằm trong `setTimeout()` chạy xong dòng lệnh `console.log('Dong 2')` giống như cơ chế đồng bộ `synchronous` thông thường thì javascript sẽ bỏ qua chờ đợi mà chạy dòng code `console.log('Dong 3')` và trả về kết quả `Dong 3` trước khi `console.log('Dong 2')` trong `setTimeout()` được thực thi. Đây chính là điểm khác nhau giữa cơ chế BẤT ĐỒNG BỘ và ĐỒNG BỘ trong việc lập trình. Việc xử lý bất đồng bộ trong javascript được mô tả dựa trên các thành phân như sau:

![Ảnh 1](/images/2018-07-19/anh1.png)

Trước khi bước vào tìm hiểu cách hoạt động của các thành phần trên, chúng ta sẽ điểm qua khái niệm về mỗi thành phần.

- CALL STACK - là một dạng cấu trúc dữ liệu ghi lại vị trí các lệnh đang được thực hiện trong chương trình. Khi lệnh bắt đầu được thực hiện sẽ được đưa vào đỉnh của stack và sau khi thực hiện xong sẽ được lấy ra khỏi ngăn xếp.
- WEB APIs - vể bản chất đây chính là các thread mà ta không thể truy cập trực tiếp mà chỉ có thể gọi được đến nó. Các thread này do trình duyệt cung cấp.
- CALLBACK QUEUE - là một dạng cấu trúc dữ liệu với nguyên tắc First-In-First-Out (vào trước ra trước).
- EVENT LOOP - có nhiệm vụ giám sát tình trạng của CALL STACK và CALLBACK QUEUE.

Để hiểu được quá trình thực hiện của cơ chế bất đồng bộ ta sẽ đưa ví dụ thứ hai vào và thực hiện trong mô hình trên.

![Ảnh 2](/images/2018-07-19/anh2.png)

Đầu tiên khi chương trình bắt đầu chạy lệnh đầu tiên của chương trình `(console.log('Dong 1'))` sẽ được đưa vào trong CALL STACK.

![Ảnh 3](/images/2018-07-19/anh3.png)

Lệnh này lập tức trả về dòng chữ `Dong 1` đồng nghĩa với việc nó đã chạy xong và được đẩy ra khỏi CALL STACK.

![Ảnh 4](/images/2018-07-19/anh4.png)

Tiếp đến hàm
`setTimeout(function() { console.log('Dong 2'); }, 1000);`
được đưa vào trong CALL STACK để thực hiện.

![Ảnh 5](/images/2018-07-19/anh5.png)

Tuy nhiên hàm nay không trả về kết qua ngay mà phải đợi 1 giây. Hàm `setTimeout()` ở đây chính là một API mà WEB APIs cung cấp. Lập tức đoạn code này được chuyển vào trong WEB APIs và trình duyệt sẽ tạo ra một bộ hẹn giờ tương ứng với thời gian trên là 1 giây trước khi trả về kết quả

![Ảnh 6](/images/2018-07-19/anh6.png)

Khi đoạn code thứ 2 được chuyển sang WEB APIs thì lập tức đoạn code cuối cùng `console.log('Dong 3')` đã được đưa vào CALL STACK để thực hiện và trả về kết quả là dòng chữ `Dong 3`. Sau đó đoạn code này cũng được đẩy ra khỏi CALL STACK

![Ảnh 7](/images/2018-07-19/anh7.png)

![Ảnh 8](/images/2018-07-19/anh8.png)

Sau khi bộ giờ trong WEB APIs chạy xong thì kết quả trả về lúc này không được in ngay ra màn hình mà nó được đẩy vào CALLBACK QUEUE

![Ảnh 9](/images/2018-07-19/anh9.png)

EVENT LOOP với chức năng liên tục giám sát xem CALL STACK đã trống chưa và CALLBACK QUEUE có gì không. Lúc này CALLBACK QUEUE đang chờ kết quả mà WEB APIs trả về nên và CALL STACK lúc này cũng đã trống do toàn bộ code trong chương trình đã được thực hiện nên nó sẽ đẩy kết quả trong CALLBACK QUEUE vào lại CALL STACK và đoạn code `console.log('Dong 2')` được thực hiện và trả kết quả ra màn hình.

![Ảnh 10](/images/2018-07-19/anh10.png)

![Ảnh 11](/images/2018-07-19/anh11.png)

Đó là toàn bộ quá trình diễn ra trong cơ chế chạy bất đồng bộ của javascript, tuy nhiên ta cần chú ý một số điểm sau:

- EVENT LOOP chỉ tiến hành đẩy hàm trả về từ CALLBACK QUEUE sang CALL STACK khi CALL STACK đã thực hiện xong hết các đoạn code khác của chương trình

- Thứ tự các kết quả được trả về từ WEB APIs sang CALLBACK QUEUE sẽ không theo thứ tự đưa vào mà sẽ tùy thuộc hàm nào chạy xong trước sẽ được đẩy vào CALLBACK QUEUE trước đồng nghĩa với việc sẽ được chuyển qua CALL STACK trước.
