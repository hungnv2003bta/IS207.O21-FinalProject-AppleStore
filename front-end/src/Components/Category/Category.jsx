import React from 'react'
import './Category.css'
import MacPhoto from '../Assets/Category/category_photo.png'
import IpadPhoto from '../Assets/Category/ipad_photo.png'
import IphonePhoto from '../Assets/Category/iphone_photo.png'


const Category = () => {

    return (
        <div className="category-list">
            {/* 1 */}
        <div className="column-box1">
            <div class="column-content">
                <p>Mac</p>
                <button>Mua</button>
            </div>
            <div class="column-img">
                <img src={MacPhoto} alt="MAC"></img>
            </div>
        </div>  
        {/* 2 */}
        <div className="column-box2">
            <div class="column-content">
                <p>Iphone</p>
                <button>Mua</button>
            </div>
            <div class="column-img">
                <img src={IphonePhoto} alt="IPhone"></img>
            </div>
        </div>
        {/* 3 */}
        <div className="column-box3">
            <div class="column-content">
                <p>IPad</p>
                <button>Mua</button>
            </div>
            <div class="column-img">
                <img src={IpadPhoto} alt="IPad"></img>
            </div>
        </div>
        </div>

    )

}

export default Category