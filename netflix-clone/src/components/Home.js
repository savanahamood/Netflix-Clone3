import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
function Home() {
    const [moviesData, setMoviesData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `https://onlineserver-w9zu.onrender.com/trending`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setMoviesData(result.data);

    }
    useEffect(() => {
        sendReq();
    },[]);
    return (
        <>
            <h1>Home</h1>
            <Row xs={1} md={4} className="g-4">
                {moviesData.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.release_date}</p>
                                    <p>{item.overview}</p>
                                </Card.Text>
                                <Button variant="primary">Add to Favorites List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Home;