---
title: "Một tuần tại {Be} Solution"
date: "2018-06-11T12:00:40.000Z"
status: "draft"
thumbnail: "images/post-thumbnail/array-khong-chi-la-array.png"
description: 'Sau một tuần chúng tôi đã hoàn thành giao diện được giao, phải nói là gặp rất nhiều khó khăn trong phần javascript, tôi cảm thấy nghi ngơ về câu "Javascript is easy to learn" trên http://w3schools.com, có lẻ nó chỉ dễ cho học còn làm thì chưa chắc tới đâu.'
tags:
  - "diary"
---

Hello !!!
Sau một tuần chúng tôi đã hoàn thành giao diện được giao, phải nói là gặp rất nhiều khó khăn trong phần javascript, tôi cảm thấy nghi ngơ về câu "Javascript is easy to learn" trên http://w3schools.com, có lẻ nó chỉ dễ cho học còn làm thì chưa chắc tới đâu.

Tôi gặp một trở ngại khi phải làm việc với Javascript như là làm sao áp dụng `script` cho một phần tử html chưa được render ra, và thật may là đàn anh của tôi hướng dẫn một tips này:

{% highlight javascript %}
jQuery("body").on("click",".file-drop-zone-title", function(){
$("#project-attachments").trigger('click');
});
{% endhighlight %}

Nó có nghĩa là sẽ chờ toàn bộ `body` load xong và áp dụng `function()...` vào một hoặc nhiều phần tử element đã chọn.
Đây là tài liệu về hàm này: http://api.jquery.com/on/

Hay hiểu hơn là khi phần `.file-drop-zone-title` được render thì `script` đó đã chạy mất rồi, vì Javascript là một ngôn ngữ bất đồng bộ, nó thẩm chí đã chạy xong tất cả các `script` trước khi html được render ra nếu không để trong `$(document).ready()`, bất đồng bộ có nghĩa là nó không chạy theo trình tự lập trình thông thường mà nó sẽ chạy các hàm song song với nhau và chã bao giờ biết được hàm nào sẽ chạy trước.

Sau này nếu học nâng cao hơn thì các bạn sẽ có phần xử lý bất đồng bộ trong javascript, à ở đây tôi sử dụng jQuery để tiện cho selector. cơ bản jQuery vẫn là Javascript thôi.

Đây là một ví dụ nhỏ

{% highlight javascript %}
jQuery("body").on("click",".file-drop-zone-title", function(){
$("#project-attachments").trigger('click');
});
{% endhighlight %}

Javascript sẽ đợi đến khi body load xong phần tử được chọn `.file-drop-zone-title` và lúc đó bạn có thể áp dụng đúng javascript đúng như mong muốn, như ở trường hợp này class `.file-drop-zone-title` chứa id `#project-attachments` và tôi muốn chờ body load xong class `.file-drop-zone-title` lúc này tôi áp dụng phần script trong `function(){...}` cho phần tử có id là `#project-attachments`.

Tôi mong là những người đọc blog này ít nhất có thể hiểu tôi đang viết về cài gì, đối với tôi việc viết blog này không chỉ là viết cho vui, tại đây tôi có thể cũng cố kiến thức của mình cũng như phát triển bản thân từng ngày.

Chúc tất cả một ngày tốt lành.
