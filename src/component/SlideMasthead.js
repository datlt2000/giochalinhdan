import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import gioLua from 'image/giolua.png';
import gioHeo from 'image/gio-heo.png';
import chaLua from 'image/cha-lua.jpg';

const titleStyle = {
    padding: '20px',
    color: 'red',
    fontSize: 'bold'
}
const textStyle = {
    color: 'yellow'
}
const descriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start'
}
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh'
}
const slideImages = [
    {
        url: gioLua,
        caption: 'Slide 1'
    },
    {
        url: gioHeo,
        caption: 'Slide 2'
    },
    {
        url: chaLua,
        caption: 'Slide 3'
    },
];

export default function SlideMasthead() {
    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <h1 style={titleStyle}>CƠ SỞ SẢN XUẤT GIÒ CHẢ LINH ĐAN</h1>
                            <div style={descriptionStyle}>
                                <div style={textStyle}>Địa chỉ: 135 - Trần Hưng Đạo  - Hai Bà Trưng - HN</div>
                                <div style={textStyle}>Website: www.giochaquochung.com</div>
                                <div style={textStyle}>Hotline: 0901 322...</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}