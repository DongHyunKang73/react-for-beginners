import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, title, year, summary, genres, coverImg}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            </div>
        </div>
    );
}

export function MovieDetail({id, title, genres, image, year, desc}) {
    console.log(desc);
    return (
        <div className={styles.movie_detail}>
            <h2 className={styles.movie__title}>{title}</h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <ul className={styles.movie__genres}>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <p>{desc}</p>
            <img src={image} alt={title} className={styles.movie_detail__img}/>
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
