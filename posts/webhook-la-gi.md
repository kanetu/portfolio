---
title: "Webhook là gì?"
date: "2021-08-21T03:28:52.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Webhook là một tính nắng cho phép hệ thống A cập nhật các sự kiện trong thời gian thực của bên thứ ba một cách tự động."
tags:
  - "technology"
---

### 1. Webhook là gì?

- Webhook là một tính nắng cho phép hệ thống A cập nhật các sự kiện trong thời gian thực của bên thứ ba một cách tự động.
- Webhook được biết đến với nhiều thuật ngữ khác như: Web callback, HTTP Push API, Reverse API,...
- Webhook sẽ chuyển dữ liệu đến các ứng dụng lắng nghe nó ngay khi nó được trigger điều này có nghĩa là ứng dụng của bạn sẽ nhận được dữ liệu ngay làm tức không giống như những API thông thường, điều mà chúng nó phải thăm dò dữ liệu thường xuyên để đảm bảo tính real-time (thời gian thực)

### 2. Sử dụng webhook

Để sử dụng một webhook, đầu tiền ta phải cung cấp một endpoint ở server để webhook gửi request đến ví dụ `https://abc.com/webhook` điều này có nghĩa là bạn phải cung cấp một URL trong ứng dụng của mình để nó có thể truy cập từ bên ngoài

Webhook sẽ bắn một request với phương thức POST (Phần lớn là dùng method POST) theo một trong hai cách:

- JSON (Recommend)
- XML
- Biểu mẫu

Hệ thống mà có hỗ trợ webhook sẽ cho ta biết thông tin mà họ sẽ cung cấp hoặc sẽ được tùy chọn bởi người dùng.
Thử implement một webhook là cách tốt nhất để hiểu nó, thật may mắn khi có rất nhiều hệ thống cung cấp cho ta tính năng này:

- [Github](https://github.com) - cung cấp những cập nhật cho ứng dụng về kho lưu trữ (repositories) và những hành động được thực hiện trong đó thông qua webhook
- [Twilio](https://www.twilio.com) - cung cấp những phản hồi các cuộc gọi và tin nhắn bằng webhook
- [SendGrid](https://sendgrid.com)
- [Foursquare](https://foursquare.com)

Xem qua video sau để hiểu rõ hơn cách implement một webhook:
{{< youtube rUaDIH5ZXB8 >}}

### 3. Debug webhook

Việc debug một webhook tương đối phức tạp, vì cơ chế của webhook là không đồng bộ, vì vậy để test được nó bạn phải trigger chúng và chờ phản hồi. Để làm được điều đó dễ dàng hơn chúng ta hiểu những gì webhook cung cấp, một số công cụ sau đây giúp chúng ta dễ dàng hơn trong việc debug một webhook:

- [RequestBin](https://requestbin.com) thu thập request của webhook
- cURL hoặc [Postman](https://postman.com) giả lập request
- [ngrok](https://ngrok.com) debug code ngay trên máy local (Nếu theo dõi kỹ video thì sẽ thấy sử dụng tool này)
- [Runscope](https://runscope.com) theo dõi toàn bộ flow

### 4. Bảo mật

Khi webhook gửi request để cung cấp dữ liệu đến các endpoint mà chúng ta đã thiết lập trước đó `https://abc.com/webhook`, một nguy cơ tiềm ẩn rằng nó tiết lộ trực tiếp endpoint, từ đó kẻ gian có thể dùng các phần mềm kiểm thử như `POSTMAN` để gửi những thông tin sai lệch, để ngăn chặn điều này chúng ta có thể sử dụng một số kỹ thuật. Điều dễ làm nhất là buộc các kết nối đến phải là TLS(https). Sau đó bạn có thể thêm các bước sau để tiếp tục bảo mật kết nối của mình:

- Thêm token vào URL với vai trò là một nhận dạng duy nhất `?auth=ka..`
- Triển khai basic auth, cách này cũng được hỗ trợ rộng rãi và đơn giản để thực hiện.
- Hai cách trên cơ bản ngăn chặn được hầu hết các cuộc tấn công, tuy nhiên có một nhược điểm là phải gửi token cùng với yêu cầu, giải pháp thứ 3 là yêu cầu bên cung cấp webhook sign mỗi request gửi đến rồi xác minh chúng, đi đôi với chuyện này yêu cầu nhà cung cấp webhook triển khai request signing nếu nó không có sẵn thì cách này hoàn toàn không thể sử dụng được.

### 5. Lưu ý quan trọng

- Webhook gửi request cung cấp dữ liệu đến ứng dụng của bạn có thể một lần duy nhất. Điều này có nghĩa là nếu ứng dụng của bạn gặp lỗi, những dữ liệu đdược webhook gửi đến trong thời gian đó sẽ mất đi. Tuy nhiên một số hệ thống cung cấp webhook có thiết lập quan tâm đến phản hồi của ứng dụng sẽ tạo một request mới nếu phát hiện endpoint chúng ta cung cấp bị lỗi.
- Nếu ứng dụng của chúng ta đã xử lý yêu cầu nhưng vẫn gửi lỗi thì có thể đã xuất hiện dữ liệu trùng lặp trong ứng dụng. Do đó việc hiểu cách nhà cung cấp webhook xử lý phản hồi sẽ giúp bạn chuẩn bị tốt hơn nếu xảy ra lỗi.
