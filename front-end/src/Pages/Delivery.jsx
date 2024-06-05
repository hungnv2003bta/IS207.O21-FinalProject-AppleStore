import React from 'react'
import './CSS/Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery'>
        <h4 className='title'>Chính sách giao hàng 6TAO</h4>
        <p>*Áp dụng từ: 05/06/2024</p>
        <h1>1. PHẠM VI ÁP DỤNG</h1>
        <p>Tất cả các tỉnh thành trên Việt Nam.</p>

        <h1>2. THỜI GIAN NHẬN HÀNG</h1>
        <p>6TAO nhận giao nhanh trong ngày với khoảng cách từ cửa hàng đến điểm giao là 20 km. Khoảng cách lớn hơn nhân viên của chúng tôi sẽ tư vấn cách thức giao hàng thuận tiện nhất cho khách hàng. Cụ thể:</p>
        <table>
            <tr className='titletb'>
                <td><strong>Gói dịch vụ</strong></td>
                <td><strong>Khoảng cách từ cửa hàng đến nhà khách hàng</strong></td>
                <td><strong>Thời gian hẹn giao</strong></td>
            </tr>
            <tr className='titletb'>
                <td>Giao siêu nhanh</td>
                <td>0 - 20km</td>
                <td>Từ 1 - 2 tiếng</td>
            </tr>
            <tr className='titletb'>
                <td rowSpan={2}>Giao tiêu chuẩn</td>
                <td>0 -20km</td>
                <td>Từ 6 tiếng</td>
            </tr>
            <tr className='titletb'>
                <td>Nội tỉnh - Liên tỉnh</td>
                <td>Từ 2 - 6 ngày</td>
            </tr>
            <tr>
                <p><strong>Lưu ý:</strong></p>
                <p>- Thời gian giao hàng trong ngày khu vực HCM từ: 9:00 - 21:00, các tỉnh khác từ: 9:00h - 20:00h</p>
                <p>- Riêng giao nội tỉnh - liên tỉnh qua đối tác vận chuyển sẽ giao trước 18h</p>
            </tr>
        </table>

        <h1>3. PHÍ GIAO HÀNG</h1>
        <table>
            <tr className='fee'>
                <td><strong>Mức giá</strong></td>
                <td><strong>Phí giao tiêu chuẩn</strong></td>
            </tr>
            <tr>
                <td>Giỏ hàng từ 5.000.000đ trở lên</td>
                <td>
                    <p>- Miễn phí 10km đầu tiên</p>
                    <p>- Mỗi km tiếp theo tính phí 5.000đ/km</p>
                    <p>VD: Iphone giá 7.000.000, khoảng cách giao hàng là 13 km thì phí giao hàng là: 15.000đ</p>
                </td>
            </tr>
            <tr>
                <td>Giỏ hàng từ 15.000.000đ trở lên</td>
                <td>Miễn phí giao hàng</td>
            </tr>
            <tr>
                <p><strong>Lưu ý:</strong></p>
                <p>- Đối với giao siêu nhanh sẽ có cộng thêm phụ phí giao</p>
                <p>- Khoảng cách tính phí giao hàng: được tính từ kho xuất hàng đến nhà khách hàng.</p>
            </tr>
        </table>
    </div>
  )
}

export default Delivery

