import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

export default function Footer(props) {
    return (
        <Container>
            <Row className="my-5 text-center text-lg-start">
                <Col lg={5}>
                    <Heading>Giò chả Linh Đan</Heading>
                    <FooterItem>
                        Mô tả về trang web, logo, người đại diện, slogan,...
                        http://giochalinhdan.com
                    </FooterItem>
                </Col>
                <Col lg={3}>
                    <Heading>
                        <i className="fa-solid fa-location-dot">
                        </i>
                        <span style={{ marginLeft: "10px" }}>
                            Địa chỉ
                        </span>
                    </Heading>
                    <FooterItem>225/10 tổ 12 ấp 2 Xuân Thới Thượng, Hóc Môn</FooterItem>
                </Col>
                <Col lg={2}>
                    <Heading>
                        <i className="fa-solid fa-phone">
                        </i>
                        <span style={{ marginLeft: "10px" }}>
                            Hotline
                        </span>
                    </Heading>
                    <FooterItem>0367816136</FooterItem>
                </Col>
                <Col lg={2}>
                    <Heading>
                        <i className="fa-solid fa-envelope">
                        </i>
                        <span style={{ marginLeft: "10px" }}>
                            Email
                        </span>
                    </Heading>
                    <FooterItem>giochalinhdan@gmail.com</FooterItem>
                </Col>
            </Row>
        </Container>
    )
}

export const Heading = styled.p`
  color: #555;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 30px;
  font-weight: 700 !important;
`;
export const FooterItem = styled.div`
  color: #757575;
  display: block;
  margin-bottom: 5px;
`;
export const FooterLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #000;
  &:hover {
      color: blue;
      transition: 200ms ease-in;
  }
`;