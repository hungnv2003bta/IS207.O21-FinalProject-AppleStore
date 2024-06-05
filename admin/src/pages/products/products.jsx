import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Failed to load products:', error));
  }, []);


  const submitEdit = async (productData) => {
    const response = await fetch(`http://localhost:8000/api/products/${productData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    const updatedProduct = await response.json();
    if (response.ok) {
      setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
      setShowModal(false);
    } else {
      console.error('Failed to update product', updatedProduct);
    }
  };
  const handleEdit = (product) => {
    const editProduct = {
      ...product,
      qty_in_stock: product.product_items?.qty_in_stock || 0 
    };
    setEditingProduct(editProduct);
    setShowModal(true);
  };

  const handleDelete = (productId) => {
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== productId));
    })
    .catch(error => console.error('Failed to delete product:', error));
  };


  const ProductEditModal = () => {
    const [localEditingProduct, setLocalEditingProduct] = useState(editingProduct);
  
    useEffect(() => {
      setLocalEditingProduct(editingProduct); // Ensures local state is updated when editingProduct changes
    }, [editingProduct]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setLocalEditingProduct(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {
        ...localEditingProduct,
        qty_in_stock: localEditingProduct.qty_in_stock
      };
    
      const response = await fetch(`http://localhost:8000/api/products/${localEditingProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    
      const updatedProduct = await response.json();
      if (response.ok) {
        console.log('Updated product from server:', updatedProduct);
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        setShowModal(false);
      } else {
        console.error('Failed to update product', updatedProduct);
      }
    };
    

  
    return (
      <div style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        left: "20%",
        top: "10%",
        backgroundColor: "#C7E2F2",
        padding: "20px",
        zIndex: 100,
        width: "60%",
        maxHeight: "80%",
        overflowY: "auto",
        border: "2px solid black"
      }}>
        <h2>Edit Product: {localEditingProduct?.name}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: 'Price', type: 'text', field: 'price' },
              { label: 'Discount', type: 'text', field: 'discount' },
              { label: 'Quantity in Stock', type: 'text', field: 'qty_in_stock' },
              { label: 'Description', type: 'textarea', field: 'description' },
            ].map(input => (
              <label key={input.field}>
                {input.label}:
                {input.type === 'textarea' ? (
                  <textarea 
                    name={input.field}
                    value={localEditingProduct[input.field]} // Use localEditingProduct for input values
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "100px" }}
                  />
                ) : (
                  <input 
                    type={input.type}
                    name={input.field}
                    value={localEditingProduct[input.field]} // Use localEditingProduct for input values
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                  />
                )}
              </label>
            ))}
          </div>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
            <button type="submit">Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  };


  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <h1>PRODUCTS MANAGEMENT</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Memory</th>
                    <th>RAM</th>
                    <th>Chip</th>
                    <th>Display Size</th>
                    <th>Qty in Stock</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.color}</td>
                        <td>{product.memory}</td>
                        <td>{product.RAM}</td>
                        <td>{product.chip}</td>
                        <td>{product.display_size}</td>
                        <td>{product.product_items?.qty_in_stock}</td>
                        <td>${product.price}</td>
                        <td>{product.discount}</td>
                        <td>
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {showModal && <ProductEditModal />}
      </div>
    </div>
  );
}

export default Products;
