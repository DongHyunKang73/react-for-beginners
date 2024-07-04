import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({id, title, summary, genres, image}) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <img src={image} alt={title}/>
        </div>
    );
}

export function MovieDetail({id, title, genres, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <img src={image} alt={title}/>
        </div>
    );
}

Movie.prototype = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
