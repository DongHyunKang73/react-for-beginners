import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MovieDetail} from "../components/Movie";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailInfo, setDetailInfo] = useState([]);

    console.log(id);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
        setDetailInfo(json.data.movie);
        setLoading(false);
    }

    console.log(detailInfo);

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <MovieDetail
                    id={detailInfo.id}
                    title={detailInfo.title}
                    image={detailInfo.large_cover_image}
                    genres={detailInfo.genres}
                />}
        </div>
    );
}

export default Detail;