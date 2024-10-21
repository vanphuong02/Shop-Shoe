import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Để điều hướng sau khi đăng nhập

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook để điều hướng trang

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Kiểm tra thông tin đăng nhập
    if (email === 'thao@gmail.com' && password === '123123') {
      // Điều hướng đến trang chủ hoặc trang khác
      navigate('/home'); // Ví dụ: điều hướng đến trang home
    } else {
      // Hiển thị lỗi nếu email hoặc mật khẩu không đúng
      setErrorMessage('Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">Login</p>
        <hr className=" border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
      
      {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Hiển thị thông báo lỗi nếu có */}

      <input 
        type="email" 
        className="w-full px-3 py-2 border border-gray-800" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Lưu giá trị email
        required
      />
      
      <input 
        type="password" 
        className="w-full px-3 py-2 border border-gray-800" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Lưu giá trị mật khẩu
        required
      />
      
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        Sign In
      </button>
    </form>
  );
};

export default Login;
