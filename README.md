

# Hệ thống quản lý cho thuê xe tự lái MyCar

## Giới thiệu

  Trước đây, việc cho thuê xe tự lái gặp nhiều thách thức trong việc quản lý thông tin khách hàng, xe cộ, và các dịch vụ liên quan. Khi chưa có hệ thống hỗ trợ, việc lưu trữ thông tin thường được thực hiện thủ công, dễ dẫn đến mất mát dữ liệu hoặc sai sót, gây khó khăn cho việc theo dõi và quản lý. Ngoài ra, mô hình trực tiếp cho thuê xe tự lái khiến cho chủ đầu tư phải bỏ ra một số vốn khá lớn để mua sắm và duy trì một đội xe đa dạng và phục vụ đủ nhu cầu của khách hàng. Với những khó khăn trên, việc xây dựng một nền tảng trung gian cho thuê xe tự lái là vô cùng cần thiết để cải thiện quy trình quản lý, nâng cao chất lượng dịch vụ, và đáp ứng tốt hơn nhu cầu của người dùng. Nền tảng này không chỉ giúp quản lý thông tin khách hàng và xe cộ một cách hiệu quả mà còn tạo điều kiện thuận lợi cho việc mở rộng và phát triển dịch vụ trong tương lai. Chính vì vậy, nhóm tụi em quyết định chọn đề tài xây dựng nền tảng trung gian cho thuê xe tự lái, góp phần giải quyết các vấn đề hiện tại và hướng tới một hệ thống quản lý thông minh và tiện ích hơn.

## Mục tiêu

  Mục tiêu của đề tài phát triển hệ thống quản lý cho nền tảng thương mại điện tử cho thuê xe là xây dựng một hệ thống toàn diện, hiện đại và hiệu quả, nhằm đáp ứng nhu cầu quản lý và vận hành của doanh nghiệp, đồng thời nâng cao trải nghiệm người dùng.

## Tính năng

  •	Quản lý xe và thông tin khách hàng.
  
  •	Quản lý đơn hàng.
  
  •	Quản lý khiếu nại.
  
  •	Tìm kiếm và lọc theo thông tin xe.
  
  •	Thanh toán online.

## Công nghệ sử dụng

  •	Backend: Java, Spring Boot
  
  •	Frontend: HTML, CSS, JavaScript, ReactJS, Redux Toolkit, Tailwind
  
  •	Database: Oracle

## Hướng dẫn sử dụng


### Yêu cầu hệ thống

  •	JDK 17
  
  •	OJDBC 11

### Chi tiết
  
1.	Clone ứng dụng
2.	Tạo các table  trong database bằng BE/Resource/Database.sql và   BE/Resource/trigger.txt
3.	Thay đổi cấu hình oracle phù hợp trong BE/src/main/resources/application.properties

      spring.datasource.url= url
  	
      spring.datasource.username= username
  	
      spring.datasource.password= password
   

