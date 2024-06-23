import React from 'react'
import './CSS/Pay.css'
import Navbar from '../Components/Navbar/Navbar'

const Pay = () => {
    return (
        <div className='pay'>
            <Navbar/>
            <div className='payContainer'>
                <h4 className='title'>HƯỚNG DẪN THANH TOÁN</h4>
                <h1>LỰA CHỌN THANH TOÁN</h1>
                <div className='detail'>
                    <p><strong>I. Thanh toán tiền mặt</strong></p>
                    <p className='number'>1. Tại cửa hàng</p>
                    <p>Quý khách có thể đến mua hàng & thanh toán trực tiếp tại 6TAO</p>
                    <p className='number'>2. Tại nhà / nơi nhận hàng</p>
                    <p>Thanh toán cho nhân viên giao hàng trực tiếp của 6TAO tại bất kỳ đâu bạn yêu cầu (trong phạm vi 20KM tính từ siêu thị Thegioididong có hàng).</p>
                    <p><strong>II. Thanh toán bằng thẻ ATM, Visa, MasterCard</strong></p>
                    <p className='number'>1. Tại cửa hàng</p>
                    <p>Cà thẻ trực tiếp tại 6TAO</p>
                    <p className='number'>2. Tại nhà / nơi nhận hàng</p>
                    <p>Khách hàng vui lòng yêu cầu trước để nhân viên đem theo máy hỗ trợ thanh toán và cà thẻ.</p>
                    <p><em>Lưu ý: Để an toàn cho chủ thẻ, 6TAO chỉ hỗ trợ thanh toán thẻ cho quý khách đến thanh toán chính là chủ thẻ.</em></p>
                    <p className='number'>3. Quy định về thời gian hoàn tiền cà thẻ</p>
                    <p>Thời gian Khách hàng nhận được tiền hoàn: 7 - 15 ngày (trừ Thứ 7, Chủ Nhật và Ngày lễ).</p>
                    <p><strong>III. Chuyển khoản</strong></p>
                    <h3>Chuyển khoản qua ngân hàng BIDV cho chúng tôi theo thông tin:</h3>
                    <table>
                        <tr>
                            <td>Tên ngân hàng</td>
                            <td><strong>Ngân hàng Thương mại Cổ phần Đầu tư và Phát triển Việt Nam (BIDV)</strong></td>
                        </tr>
                        <tr>
                            <td>Chi nhánh</td>
                            <td><strong>Đông Sài Gòn - TPHCM</strong></td>
                        </tr>
                        <tr>
                            <td>Chủ tài khoản</td>
                            <td><strong>Công ty 6TAO</strong></td>
                        </tr>
                        <tr>
                            <td>Số tài khoản</td>
                            <td><strong>967887</strong></td>
                        </tr>
                        <tr>
                            <td>Nội dung</td>
                            <td><strong>Tên khách hàng-Số điện thoại</strong></td>
                        </tr>
                    </table>
                    <h3>Quy định về thời gian hoàn tiền qua hình thức chuyển khoản:</h3>
                    <p>Thời gian Khách hàng nhận được tiền hoàn: 5 - 7 ngày làm việc (trừ Thứ 7, Chủ Nhật và Ngày lễ).</p>
                </div>
            </div>
        </div>
    )
}

export default Pay