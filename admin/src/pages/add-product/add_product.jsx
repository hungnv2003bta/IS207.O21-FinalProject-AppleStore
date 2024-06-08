import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './add_product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [memory, setMemory] = useState("");
  const [RAM, setRam] = useState("");
  const [chip, setChip] = useState("");
  const [display_size, setDisplaySize] = useState("");
  const [display_technology, setDisplayTechnology] = useState("");
  const [battery, setBattery] = useState("");
  const [front_facing_camera, setFrontCamera] = useState("");
  const [rear_facing_camera, setRearCamera] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [product_image, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const [qty_in_stock, setQtyInStock] = useState("");

  const handleSubmit = async (event) => {
    console.warn(name, color, category, memory, RAM, chip, display_size, display_technology,
      battery, front_facing_camera, rear_facing_camera,
      price, discount, product_image, description, qty_in_stock
    )

    event.preventDefault(); 
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('color', color);
    formData.append('memory', memory);
    formData.append('RAM', RAM);
    formData.append('chip', chip);
    formData.append('display_size', display_size);
    formData.append('display_technology', display_technology);
    formData.append('battery', battery);
    formData.append('front_facing_camera', front_facing_camera);
    formData.append('rear_facing_camera', rear_facing_camera);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('product_image', product_image);
    formData.append('description', description);
    formData.append('qty_in_stock', qty_in_stock);

    try {
      const response = await fetch("http://localhost:8000/api/products", {
        method: 'POST',
        body: formData
      });
    
      if (response.ok) {
        toast('Đã thêm sản phẩm vào giỏ hàng!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        throw new Error('Failed to add product to cart');
      }
    } catch (error) {
      alert('Thêm sản phẩm không thành công!', error.message);
    }    
  }

  

  return (
    <div className="products">
      <Sidebar /> 
      <div className="productsContainer">
        <h1>Add New Product</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>

          <label htmlFor="category">Category:</label>
          <input type="text" placeholder="Category (Bắt buộc là: iPhone, iPad, Mac)" onChange={(e)=>setCategory(e.target.value)}/>

          <label htmlFor="color">Color:</label>
          <input type="text" placeholder="Color" onChange={(e)=>setColor(e.target.value)} />

          <label htmlFor="memory">Memory:</label>
          <input type="text" placeholder="Memory" onChange={(e)=>setMemory(e.target.value)} />

          <label htmlFor="RAM">RAM:</label>
          <input type="text"  placeholder="RAM" onChange={(e)=>setRam(e.target.value)} />

          <label htmlFor="chip">Chip:</label>
          <input type="text"  placeholder="Chip" onChange={(e)=>setChip(e.target.value)} />

          <label htmlFor="display_size">Display Size:</label>
          <input type="text"  name="display_size" placeholder="Display Size" onChange={(e)=>setDisplaySize(e.target.value)} />

          <label htmlFor="display_technology">Display Technology:</label>
          <input type="text"  placeholder="Display Technology" onChange={(e)=>setDisplayTechnology(e.target.value)} />

          <label htmlFor="battery">Battery:</label>
          <input type="text"  placeholder="Battery" onChange={(e)=>setBattery(e.target.value)} />

          <label htmlFor="front_facing_camera">Front Facing Camera:</label>
          <input type="text"  placeholder="Front Facing Camera" onChange={(e)=>setFrontCamera(e.target.value)} />

          <label htmlFor="rear_facing_camera">Rear Facing Camera:</label>
          <input type="text"  placeholder="Rear Facing Camera" onChange={(e)=>setRearCamera(e.target.value)} />

          <label htmlFor="price">Price:</label>
          <input type="text"  placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />

          <label htmlFor="discount">Discount:</label>
          <input type="text"  placeholder="Discount" onChange={(e)=>setDiscount(e.target.value)} />

          <label htmlFor="product_image">Product Image:</label>
          <input type="file" onChange={(e)=>setProductImage(e.target.files[0])} />

          <label htmlFor="description">Description:</label>
          <textarea type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />

          <label htmlFor="qty_in_stock">Quantity in Stock:</label>
          <input type="text" placeholder="Quantity in Stock" onChange={(e)=>setQtyInStock(e.target.value)} />

          <button onClick={handleSubmit}>Add Product</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Products;
