import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import React, { useState } from 'react';
import axios from 'axios';


function ModalMovie(props) {
    const { showFlag, handleClose, movie, onMovieAdded } = props;
    const [Opinion, setOpinion] = useState('');
    const handleSubmit = async () => {
      try {
        const serverUrl = `https://onlineserver-w9zu.onrender.com/getMovies`;
        const data = {
          title: movie.title,
          poster_path: movie.poster_path,
          Opinion: Opinion
        };
          await axios.post(serverUrl, data);
        handleClose();
        onMovieAdded();
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <>
            <Modal show={showFlag} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} rounded width='100%'/>
                <div>
                <label htmlFor='op'> Write Your Opinion </label>
                <br></br>
                <input placeholder='write opinion' type="text" value={Opinion} size='50' onChange={(event) => setOpinion(event.target.value)}/>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleSubmit}}>
                        Add it
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;