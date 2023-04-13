import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import gioBo from 'image/gio-bo.jpg';
import gioGa from 'image/gio-ga.png';
import gioLua from 'image/gio-lua.jpg';
import jambon from 'image/jambon.jpg';
import chaQue from 'image/cha-que-ong.jpg';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const productImage = [
    {
        url: gioBo,
        caption: 'Giò bò',
        price: '250.000đ'
    },
    {
        url: jambon,
        caption: 'Jambon',
        price: '250.000đ'
    },
    {
        url: gioGa,
        caption: 'Giò gà',
        price: '250.000đ'
    },
    {
        url: gioLua,
        caption: 'Giò lụa',
        price: '250.000đ'
    },
    {
        url: chaQue,
        caption: 'Chả quế ống',
        price: '250.000đ'
    },
    {
        url: gioBo,
        caption: 'Giò bò',
        price: '250.000đ'
    },
    {
        url: jambon,
        caption: 'Jambon',
        price: '250.000đ'
    },
    {
        url: gioGa,
        caption: 'Giò gà',
        price: '250.000đ'
    },
];

const imageStyle = {
    height: '150px',
    width: '150px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no',
    backgroundPosition: 'center',
    borderRadius: '120px',
    margin: 'auto'
}
const title = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '3px'
}
export default function SlideProduct(props) {
    return (
        <Carousel responsive={responsive}>
            {productImage.map((item, index) => (
                <div key={index}>
                    <div style={{...imageStyle, 'backgroundImage': `url(${item.url})`}}></div>
                    <p className='mt-3' style={title}>{item.caption}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </Carousel>
    );
}