---
title: "CSS Spritesheet là gì? "
date: "2018-09-10T23:45:40.000Z"
status: "publish"
thumbnail: "images/post-thumbnail/css-spritesheet-la-gi.png"
description: "Thêm 1 câu hỏi khi interview FrontEnd, Sẽ có vài lần các bạn sẽ được hỏi là css spritesheet là gì? Tại sao lại dùng chúng? Bạn dùng cách gì để tạo ra 1 hình spritesheet."
tags:
  - "css"
---

Thêm 1 câu hỏi khi interview FrontEnd, Sẽ có vài lần các bạn sẽ được hỏi là css spritesheet là gì? Tại sao lại dùng chúng? Bạn dùng cách gì để tạo ra 1 hình spritesheet.

## 1. CSS Spritesheet là gì?

CSS spritesheet là 1 kỹ thuật gom nhiều hình thành 1 tấm hình và dùng css background-image để hiển thị chúng ngoài browse.

## 2. Tại sao lai dùng chúng?

- Chúng sẽ làm tăng perfomance khi load web.

- Thông thường server sẽ trả về từ 4-6 request 1 lần. Chúng ta hãy tưởng tượng nếu load 30 tấm hình thì server sẽ phải gửi request nhiều lần làm giảm tốc độ load web. Nếu ta gom chúng thành 1 tấm, thì server chỉ cần tốn 1 lần request đã có thể load tất cả hình mà ta mong muốn.

- Nhược điểm: khi bạn ko dùng spritesheet là khi ta muốn hover vào hình A chuyển trạng thái thành active. Khi bạn hover như vậy, thì buộc browse phải gửi request để tải 1 hình active mà bạn muốn, sẽ có 1 khung trắng vài giây xuất hiện tùy theo internet lúc đó nhanh hay chậm. Nó sẽ gây ko tốt về UX phía user. Bạn có thể xem video để hình dung.

## 3. Cách tạo Spritesheet.

Hiện tại có 1 vài cách để tạo ra 1 hình spritesheets (theo cá nhân mình)

- Tạo bằng thủ công: chúng ta sẽ vào photoshop để cắt hình rùi ghép chúng lại
  => cách này thì cực vô cùng, khi bạn phải css canh chỉnh từ tọa độ hình. (mới bắt đầu làm FE, mình dùng cách này suốt -,-).

- Tạo bằng tools online or cài đặt: cách này hiệu quả hơn cách trên 1 chút là bạn chỉ việc kéo hình vào tools, nó sẽ tự tạo ra hình spritesheet + code css sẵn cho bạn.
  => cách này gặp khó khăn khi client của bạn không cho bạn cài phần mềm, sợ bị dính bản quyền...

- CUỐI CÙNG TA SẼ DÙNG TỚI SPRITESMITH: spritesmith sẽ giúp ta tạo 1 hình spritesheet + code sass có sẵn. Và khi ta apply hình vào, ta chỉ việc viết tên hình là xong :D. Vd: @include('ten hinh"). Bạn có thể tham khảo. Cái này ko phải là tools setup, mà là chúng ta sẽ viết đoạn script cho nó chạy sinh ra file spritesheet.
  https://github.com/twolfson/spritesmith

Trước khi làm về spritesmith. Các bạn phải biết về gulp, sass.

Nguồn: Front End Land VN
