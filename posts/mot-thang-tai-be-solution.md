---
title: "Một tháng tại {Be} Solution"
date: "2018-07-11T10:32:40.000Z"
status: "draft"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: "Sau hơn một tháng thực tập tại đây thì tôi và Eric đã hoàn thành phần trainer của mình và anh leader đã chuyển chúng tôi cho anh Mark - người đang quản lí một vài dự án."
tags:
  - "diary"
---

Sau hơn một tháng thực tập tại đây thì tôi và Eric đã hoàn thành phần trainer của mình và anh leader đã chuyển chúng tôi cho anh Mark - người đang quản lí một vài dự án.

Chúng tôi lại được anh Mark phân công support tìm bug cho một website khách hàng, cụ thể là chúng tôi đang làm việc của một tester - tìm lỗi, tôi không chắc công việc của một `tester` là như thế nào nhưng tôi chắc là tôi đang làm việc trên website của khách hàng như là một `người dùng ` và vừa là `admin`.

Tôi phải tiếp xúc với một `framework` mới là `Magento`, framework này chúng tôi chưa đụng vào bao giờ, xem sơ sơ trên google thì theo tôi được biết là một framework được sử dụng nhiều cho các trang web bán hàng. Và chúng tôi cũng chẳng được đụng vào code đâu, công việc của chúng tôi chỉ là ngồi test lỗi thôi, thêm vào đó tôi được cấp một account quản trị để xem `record`.

Khách hàng của chúng tôi là một công ty bán hàng trực tuyến ở Singapore và đương nhiên tôi muốn tiết lộ thông tin khách hàng được, dù nó được cho phép hay không :D.

Website này đang gặp một `bug` rất nghiêm trọng trong phần thanh toán Paypal và Wirecard, bạn biết đấy những gì liên quan đến tiền bạc thì thường rất rắc rối. Và có vẻ như cty này đã bị `hack`, anh Mark - nói với chúng tôi hiện có 2 `issue`

- Khi khách hàng thanh toán bằng Paypal thì thông thường nếu đúng chỉ xuất hiện 2 `transaction` là khi khách hàng thanh toán thành công Paypal hoặc Wirecard và khi xuất hóa đơn nhưng vì một lý do cố tình hoặc `bug`. Theo báo cáo của khách hàng họ thấy rằng có một đơn hàng xuất hiện thêm một transaction thứ 3 bằng Wirecard khi người dùng chỉ thanh toán bằng Paypal, khách hàng của tôi đã bị `hack`.

- Vấn đề thứ 2 là khi người dùng mở 2 `tab` trên `browser` thì một tab họ tiến hành thanh toán, tab còn lại họ tiếp tục mua, lúc này hệ thông của chúng tôi lại thanh toán tất cả một lượt, để dễ hiểu ta đặt trường hợp nếu trong tab thứ 2 họ chỉ muốn cho vào gỏ hàng mà chưa muốn thanh toán, nhưng ở tab đầu tiên họ `đang` tiến hành thanh toán thật không may lúc đấy họ đang mua ở tab thứ 2 và hệ thống của chúng tôi lại thanh toán luôn, thật đau đầu! anh Mark muốn nó chỉ thanh toán cho gỏ hàng hiện tại của tab 1.

Vấn đề thứ 2 chúng tôi không cần quan tâm vì công việc của một tester là làm sao để nó xuất hiện lỗi, nếu có một điều gì đó bất thường khi ta lặp đi lặp lại những thao tác đó nhiều lần thì đó là `bug`.

Tính tới thời điểm hiện tại chúng tôi vẫn chưa fix xong lỗi thứ 2 và chưa tìm ra nguyên nhân của lỗi thứ 1. Công việc này của một tester chẵng dễ dàng chút nào ~~, có thể website gặp bug, còn tệ hơn là chúng tôi bị hack.

À cái hình ở caption là lúc những senpai của tôi ngủ trưa đấy, bạn có thể trãi niệm, hoặc túi ngủ ra ngủ tại bàn làm việc của mình, vì làm việc 8h/ngày tôi phải ngủ 30 phút để lấy lại tỉnh táo cho đến 5h30 đây.

Chúc tất cả một ngày tốt lành!.
