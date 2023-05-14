import {useEffect,useState} from "react";
import axios from "axios";
import Movie from "./Movie"
function MovieList(){
    const [movList, setmoList] = useState([]);
    const sendReq = async () => {
        const serverUrl = `https://onlineserver-w9zu.onrender.com/trending`;
        const result = await axios.get(serverUrl);
        setmoList(result.data);

    }
    useEffect(() => {
        sendReq();
    },[]);
    return(
    <>
    <h1>MovieList</h1>
    <Movie mData={movList}/>

    </>
    )
}
export default MovieList;