import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import ModalMovie from './ModalMovie';

import { useState } from 'react';
function Movie(props) {
    const [show, setShow] = useState(false);
    const [clickedMovie,setClickedMovie]=useState({});
    const handleShow = (item) => {
        setShow(true);
        setClickedMovie(item);
    }
    const handleClose=()=>{
        setShow(false);
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.mData.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.release_date}</p>
                                    <p>{item.overview}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{handleShow(item)}}>Add to Favorites List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ModalMovie showFlag={show} handleClose={handleClose} movieData={clickedMovie}/>
        </>
    )
}
export default Movie;