import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import './CSS/Signup.css'
import Navbar from '../Components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    // useEffect(() => {
    //     if (localStorage.getItem("user-info")) {
            
    //     }
    // },[])

    const [fullname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()
    

    async function SignUp(){
        let item = { name: fullname, email, phone_number: phone, password, role_id: 1}; // Assuming role_id is 1 for all new registrations

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        if (!fullname || !email || !phone || !password || !confirmPassword) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        else if (phone.length !== 10) {
            alert("Số điện thoại phải chứa 10 ký tự!");
            return;
        }
        else if (!isValidEmail(email)) {
            alert("Email không hợp lệ!");
            return;
        }
        else if (email.length > 100) {
            alert("Email không được quá 100 ký tự!");
            return;
        }
        else if (password.length < 6) {
            alert("Mật khẩu phải chứa ít nhất 6 ký tự!");
            return;
        }
        else if (password.length > 32){
            alert("Mật khẩu không được quá 32 ký tự!");
            return;
        }
        else if (password !== confirmPassword) {
            alert("Mật khẩu không trùng khớp!");
            return;
        }
        try {
            let response = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem("user-info", JSON.stringify(result));
                toast('Đăng kí thành công!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setName("");
                setEmail("");
                setPhone("");
                setPassword("");
                setConfirmPassword("");
            } else {
                alert("Đăng ký thất bại: Email hoặc số điện thoại đã tồn tại!");
            }

        } catch(error) {
            console.error("Registration failed", error);
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
                    {/* <p>Mật khẩu *</p>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='Mật khẩu' name='Mật khẩu'/>
                    <span class="password-toggle-icon"><i class="fas fa-eye"></i></span>
                    <p>Nhập lại mật khẩu *</p>
                    <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='Nhập lại mật khẩu' name='Nhập lại mật khẩu'/>
                    <span class="password-toggle-icon"><i class="fas fa-eye"></i></span> */}

                    <p>Mật khẩu *</p>
                    <div className="password-container">
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} id='Mật khẩu' name='Mật khẩu' />
                        <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </span>
                    </div>
                    
                    <p>Nhập lại mật khẩu *</p>
                    <div className="password-container">
                        <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='Nhập lại mật khẩu' name='Nhập lại mật khẩu' />
                        <span className="password-toggle-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </span>
                    </div>

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