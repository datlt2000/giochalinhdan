import 'App.css';
import giolua from 'image/giolua.png';
import gioHeo from 'image/gio-heo.png';
import nemThinh from 'image/nem-thinh.jpg';
import chaCa from 'image/cha-ca.jpg';
import chaQue from 'image/cha-que.jpg';
import chaBo from 'image/cha-bo.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SlideMasthead from 'component/SlideMasthead';
import Footer from 'component/footer';
import ImageSide from 'component/ImageSide';
import SlideProduct from 'component/SlideProduct'

function App() {
  return (
    <div className="App">
      <div className='session'>
        <SlideMasthead />
      </div>
      <div className='session' style={{backgroundColor: '#f1f1f1'}}>
        <Container className='pt-4'>
          <SlideProduct />
        </Container>
      </div>
      <div className='session'>
        <h1 className='mt-5 mb-3'>Lý do chọn mua giò chả tại Linh Đan</h1>
        <hr style={{width: '60%', borderTop: '2px solid #3c043c', margin: 'auto'}}/>
        <Container className='p-5'>
          <ImageSide img={giolua}
            title="Nguyên liệu tươi ngon"
            description="Thịt dùng để chế biến được chọn từ thịt nóng, vừa mổ ra.
            Đảm bảo vệ sinh an toàn thực phẩm. Các loại gia vị được chọn lọc kỹ càng."/>
        </Container>
        <Container className='p-5'>
          <ImageSide img={gioHeo}
            reverse
            title="Phương thức sản xuất"
            description="Sản phẩm được làm theo phương pháp thủ công 
              truyền thống nên giữ được hương vị thơm ngon đặc trưng của giò chả."/>
        </Container>
        <Container className='p-5'>
          <ImageSide img={chaCa}
            title="Tạo nên sản phẩm chất lượng"
            description="Nhờ nguyên liệu và gia vị tươi ngon và cách chế biến thủ công
              đã tạo nên những sản phẩm hoàn hảo, độ dai tự nhiên, ngọt và thơm ngon."/>
        </Container>
        <Container className='p-5'>
          <ImageSide img={nemThinh}
            reverse
            title="Giao hàng nhanh chóng - thuận tiện - an toàn trên toàn quốc"
            description="Với hệ thống mạng lưới phân phối trải đều các tỉnh thành 
              trong cả nước, hàng hóa được phục vụ kịp thời đến tay khách hàng 
              một cách nhanh nhất trong 1-2 ngày. Khách hàng nhận được hàng, 
              kiểm tra đúng hàng hóa mới phải thanh toán nên yên tâm không lo rủi ro về thanh toán."/>
        </Container>
        <Container className='p-5'>
          <ImageSide img={chaQue}
            title="Giá cả phù hợp"
            description="Do nguyên liệu được lấy trực tiếp từ cơ sở giết mổ lớn, việc bán hàng trực tiếp 
              không qua khâu trung gian nên sản phẩm có giá cả phù hợp với chất lượng."/>
        </Container>
        <Container className='p-5'>
          <ImageSide img={chaBo}
            reverse
            title="Sản phẩm đa dạng, nhiều lựa chọn cho khách hàng."
            description="" />
        </Container>
      </div>
      
      <div className='session'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
