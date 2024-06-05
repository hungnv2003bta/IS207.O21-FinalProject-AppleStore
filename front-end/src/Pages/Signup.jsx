import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import './CSS/Signup.css'
import Navbar from '../Components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            
        }
    },[])

    const [fullname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    async function SignUp(){
        if (password !== confirmPassword) {
            setError("Mật khẩu không trùng khớp!!");
            return;
        }

        let item = { name: fullname, email, phone_number: phone, password, role_id: 1}; // Assuming role_id is 1 for all new registrations
        console.warn(item);
        
        try {
            let result = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            localStorage.setItem("user-info", JSON.stringify(result))
            toast('Đăng kí thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            
        }catch (error) {
            console.error("Registration failed", error);
            setError("Đăng kí thất bại. Vui lòng thử lại!");
        }
    }

    return (
        <>
        <Navbar />
        <div className='signup'>
            <div className='signup-container'>
                <h1>Đăng Ký</h1>
                <div className='signup-fields'>
                    <p>Họ và tên *</p>
                    <input type='text' value={fullname} onChange={(e)=>setName(e.target.value)} id="Họ và tên" name='Họ và tên' />
                    <p>Số điện thoại *</p>
                    <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} id="Số điện thoại" name='Số điện thoại' />
                    <p>Email *</p>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} id='Email' name='Email'/>
                    <p>Mật khẩu *</p>
                    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} id='Mật khẩu' name='Mật khẩu'/>
                    <p>Nhập lại mật khẩu *</p>
                    <input type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='Nhập lại mật khẩu' name='Nhập lại mật khẩu'/>
                    {error && <p className="error">{error}</p>}
                </div>
                <button onClick={SignUp}>Tạo tài khoản</button>
            </div>
        </div> 
        <ToastContainer />
        </>     
    )
}
export default Signup