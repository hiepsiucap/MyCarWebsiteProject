export const faq = [
  {
    id: 1,
    title: "Tại sao tôi nên chọn thuê xe tự lái Mycar?",
    description: '<h1>Tại MyCar, chúng tôi;</h1><ul><li>(1) áp dụng gói thuê xe tự lái linh hoạt 4h, 8h, 12h, 24h giúp bạn tiết kiệm nhất khi thuê. Bạn có thể lấy xe 24/24 và thời gian bắt đầu tính tiền từ lúc lấy xe. Bạn được hưởng trọn vẹn số giờ đặt thuê.</li><li>(2) thủ tục thuê xe & nhận xe cực kì nhanh gọn 24/24, bạn chỉ cần chuẩn bị các giấy tờ xác minh định danh cá nhân (CCCD / Hộ chiếu) và Bằng lái xe (ít nhất 1 năm),</li><li>(3) bảo hiểm hai chiều, chính sách xử lý sự cố minh bạch nếu có vấn đề xảy ra.</li></ul><p>Ngoài ra, đội ngũ chăm sóc khách hàng của BonbonCar luôn sẵn sàng hỗ trợ 24/7 để đảm bảo bạn có một trải nghiệm tốt nhất.</p>',
  },
  {
    id: 2,
    title: "Thủ tục cho thuê xe tự lái gồm những gì ?",
    description:
      "<h1>Thủ Tục Thuê Xe MyCar</h1><ol><li>Yêu cầu bằng lái trên 1 năm</li><li>Kiểm tra hồ sơ bao gồm CCCD và Bằng Lái Xe</li><li>Nhận chuyển khoản Tiền giữ chỗ 500.000 đồng</li><li>Khi nhận xe và làm Hợp đồng, thanh toán tiền thuê + cọc 10 triệu cho các dòng xe thường / 30 triệu cho dòng xe cao cấp.</li></ol>",
  },
  {
    id: 3,
    title: "Vị trí nhận xe ở đâu ?",
    description:
      "<p>Chúng tôi có xe cho thuê tại gần như tất cả các quận nội thành và có dịch vụ giao nhận xe trong Tp.HCM. Đội ngũ CSKH của BonbonCar sẽ tư vấn mẫu xe và sắp xếp việc nhận trả xe tối ưu nhất cho bạn.</p>",
  },
  {
    id: 4,
    title: "Tôi có phải nhận,trả xe đúng giờ?",
    description:
    "<p>Việc nhận xe đúng giờ sẽ giúp bạn tối ưu thời gian sử dụng xe. Phí thuê xe được tính từ giờ nhận xe bạn đặt với chúng tôi do xe đã được giữ riêng cho bạn.</p><p>Khi bạn có nhu cầu gia hạn thời gian thuê, vui lòng liên hệ ngay với chúng tôi để kiểm tra xem xe có thể gia hạn được hay không."
  },
  {
    id: 5,
    title: "Tôi có cần vệ sinh hay đổ xăng khi trả xe?",
    description:
      "<p>Bạn cần trả xe theo hiện trạng ban đầu để tránh các chi phí phát sinh. Do đó, vui lòng vệ sinh, rửa xe nếu cần thiết hoặc BonbonCar sẽ tính thêm phí vệ sinh trong trường hợp xe quá dơ, nhiều bụi bẩn. Tương tự, vui lòng đảm bảo xăng khi trả ở mức ban đầu hoặc BonbonCar sẽ tính thêm phụ phí về nhiên liệu ở mức giá 30.000 đồng / lít xăng</p>",
  },
  {
    id: 6,
    title: "Trường hợp xe xảy ra sự cố tôi cần phải làm gì?",
    description:
      "<p>Vui lòng liên hệ đội ngũ chăm sóc khách hàng càng sớm càng tốt để được hướng dẫn xử lí, vui lòng không tự ý đưa xe vào garage sửa chữa hoặc khi chưa có sự đồng ý bằng văn bản của phía BonbonCar.</p>",
  },
];
export const time=[
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
    "24:00"
]
export const TimeNow= (dateChoose)=>{
  const d= new Date();
  console.log(d,dateChoose)
  const filtertime=[];
  if(d.getDay()== dateChoose.getDay()&& d.getMonth()== dateChoose.getMonth() && d.getFullYear()===dateChoose.getFullYear())
  {
     const hour=d.getHours(); const minutes=d.getMinutes();   
     if(minutes<=30)
     {
      filtertime.push(`${hour}:30`);
     }
     if(hour==24) return time ; 
     for(let i=hour+1;i<=23;i=i+1)
     {
        
      filtertime.push(`${i}:00`)
      filtertime.push(`${i}:30`)
     }
     filtertime.push(`24:00`);
     return filtertime;
  }
  else
  {
    return time;
  }
}
export function tinhSoNgay(start, end) {
   if(!start || !end) return 0;
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
}
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  }).format(number);
  return newNumber;
};
