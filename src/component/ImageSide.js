import { Col, Row } from "react-bootstrap";

export default function ImageSide(props) {
    return (
        <Row xs={1} lg={2} className={props.reverse ? "flex-row-reverse":""}>
            <Col>
                <div className='mt-3'>
                    <h3 className='my-2'>{props.title}</h3>
                    <br />
                    <div className='d-block'>
                        <p style={{ textAlign: 'left' }}>
                            {props.description}
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="px-5">
                    <img style={imgStyle} src={props.img} alt="..." />
                </div>
            </Col>
        </Row>
    )
}

const imgStyle = {
    width: '90%',
    height: '100%'
}