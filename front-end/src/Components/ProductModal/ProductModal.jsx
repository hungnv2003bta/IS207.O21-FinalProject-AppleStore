import React, {useState} from 'react';
import './ProductModal.css'; // Import the CSS file for modal styling

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h2>Chi tiết sản phẩm</h2>
        <ul>
          <li><strong>Màu:</strong> {product.color}</li>
          <li><strong>Bộ nhớ:</strong> {product.memory}</li>
          <li><strong>RAM:</strong> {product.RAM}</li>
          <li><strong>Chip:</strong> {product.chip}</li>
          <li><strong>Kích thước màn hình:</strong> {product.display_size}</li>
          <li><strong>Công nghệ hiển thị:</strong> {product.display_technology}</li>
          <li><strong>Pin:</strong> {product.battery}</li>
          <li><strong>Camera trước:</strong> {product.front_facing_camera}</li>
          <li><strong>Camera sau:</strong> {product.rear_facing_camera}</li>
          <li><strong>Giá gốc:</strong> {product.price} VNĐ</li>
          <li><strong>Khuyến mãi:</strong> {product.discount} %</li>
          <li><strong>Mô tả:</strong> {product.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductModal;
