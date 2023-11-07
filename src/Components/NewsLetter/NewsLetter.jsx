import React from 'react';
import './NewsLetter.css'; // Bạn đã quên thêm phần mở rộng ".css" ở đây

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận Ưu Đãi Độc Quyền Trên Email Của Bạn</h1>
            <p>Đăng ký theo dõi bản tin của chúng tôi và cập nhật thông tin</p>
            <div>
                <input type="email" placeholder='Địa chỉ Email của bạn' />
                <button>Đăng ký</button>
            </div>
        </div>
    )
}

export default NewsLetter;
