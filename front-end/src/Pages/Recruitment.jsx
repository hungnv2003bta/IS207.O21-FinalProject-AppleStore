import React from 'react'
import './CSS/Recruitment.css'
import Navbar from '../Components/Navbar/Navbar'

const Recruitment = () => {
    return (
        <div className='recruitment'>
            <Navbar/>
            <div className='recruitmentContainer'>
                <h4 className='title'>THÔNG TIN TUYỂN DỤNG TẠI 6TAO</h4>
                <p className='number'><strong>1. Nhân Viên Bán Hàng</strong></p>
                <table>
                    <tr className='header'>
                        <td><strong>Mô Tả Công Việc</strong></td>
                        <td><strong>Yêu Cầu</strong></td>
                        <td><strong>Quyền Lợi</strong></td>
                    </tr>
                    <tr>
                        <td>Tư vấn và bán hàng các sản phẩm công nghệ Apple như iPhone, MacBook, iPad cho khách hàng.
                            <p>Đảm bảo chất lượng dịch vụ và hài lòng của khách hàng.</p>
                            <p>Thực hiện các công việc khác theo yêu cầu của quản lý.</p>
                        </td>
                        <td>Tốt nghiệp trung học phổ thông trở lên.
                            <p>Có kinh nghiệm bán hàng là một lợi thế.</p>
                            <p>Kỹ năng giao tiếp tốt, tự tin, thân thiện.</p>
                            <p>Yêu thích công nghệ và có hiểu biết về các sản phẩm Apple.</p>
                        </td>
                        <td>Lương cơ bản + hoa hồng hấp dẫn.
                            <p>Được đào tạo về kỹ năng bán hàng và kiến thức sản phẩm.</p>
                            <p>Cơ hội thăng tiến trong công việc.</p>
                        </td>
                    </tr>
                </table>
                <p className='number'><strong>2. Nhân Viên Sửa Chữa</strong></p>
                <table>
                    <tr className='header'>
                        <td><strong>Mô Tả Công Việc</strong></td>
                        <td><strong>Yêu Cầu</strong></td>
                        <td><strong>Quyền Lợi</strong></td>
                    </tr>
                    <tr>
                        <td>Thực hiện sửa chữa, bảo hành các sản phẩm Apple (iPhone, MacBook, iPad).
                            <p>Kiểm tra và chuẩn đoán lỗi, đưa ra giải pháp sửa chữa tối ưu</p>
                            <p>Tư vấn cho khách hàng về các vấn đề kỹ thuật và bảo trì sản phẩm</p>
                        </td>
                        <td>Tốt nghiệp trung cấp hoặc cao đẳng chuyên ngành điện tử, công nghệ thông tin hoặc các ngành liên quan.
                            <p>Có kinh nghiệm sửa chữa các thiết bị điện tử, đặc biệt là sản phẩm Apple là một lợi thế.</p>
                            <p>Kỹ năng phân tích và giải quyết vấn đề tốt.</p>
                            <p>Cẩn thận, tỉ mỉ và có tinh thần trách nhiệm cao.</p>
                        </td>
                        <td>Lương cơ bản + phụ cấp sửa chữa.
                            <p>Được đào tạo chuyên sâu về sửa chữa các sản phẩm Apple.</p>
                            <p>Cơ hội phát triển và thăng tiến trong lĩnh vực kỹ thuật.</p>
                        </td>
                    </tr>
                </table>
                <h1>Ứng Tuyển</h1>
                <p><em>Hãy gửi CV và thư ứng tuyển về địa chỉ email: <u>tuyendung@6tao.com</u>. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</em></p>
                <p><em>Hãy gia nhập đội ngũ 6TAO và cùng chúng tôi mang đến những trải nghiệm công nghệ tuyệt vời cho khách hàng!</em></p>
            </div>
        </div>
    )
}

export default Recruitment