import React from 'react'
import './GridLayout.css'
import GridPic1 from '../Assets/Grid/Grid_photo_1.png'
import GridPic2 from '../Assets/Grid/grid_photo_3.png'
import GridPic3 from '../Assets/Grid/grid_photo_4.jpg'
import GridPic4 from '../Assets/Grid/grid_photo_2.jpg'
import { AiFillApple } from 'react-icons/ai'; 


const GridLayout = () => {
    return (
        <div class="grid-container">
            <div class="grid-item">
                <img src={GridPic1} alt = "grid_1"></img>
                
                <div class="grid_content">
                    <h2>IPad Pro</h2>
                    <p>Vi xử lý M2. Vi xử lý M2 là thế hệ tiếp theo của silic Apple, với CPU 8 nhân mang lại hiệu suất nhanh hơn đến 15% và GPU 10 nhân cung cấp hiệu suất đồ họa nhanh hơn đến 35%.</p>
                </div>
                
            </div>

            <div class="grid-item">
                <img src={GridPic2} alt = "grid_2"></img>
                
                <div class="grid_content">
                    <h1>MacBook Air</h1>
                    <p>Cổ máy M3. Gọn bâng. Nâng mọi việc </p>
                </div>
                
            </div>

            <div class="grid-item">
                <img src={GridPic3} alt = "grid_3"></img>
                
                <div class="grid_content">
                    <h1>MacBooK Pro</h1>
                    <p>Chấn động. Ấn tượng </p>
                    <button>Tìm hiểu ngay</button>
                </div>
                
            </div>

            <div class="grid-item">
                <img src={GridPic4} alt = "grid_4"></img>
                
                <div class="grid_content">
                <h1><AiFillApple className="apple-icon" />WC24</h1>
                    <p>Tham gia trực tiếp trên website Apple</p>
                </div>
                
            </div>
         
            
        </div>
    )
}

export default GridLayout