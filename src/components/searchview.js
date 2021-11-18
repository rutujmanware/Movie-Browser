import Hero from "./hero";
import { Link } from "react-router-dom";

const MovieCard = ({ Movie }) => {
  const PosterPath = `https://image.tmdb.org/t/p/original${Movie.poster_path}`;
  const DetailUrl=`/Movie/${Movie.id}`
  return (
    <div className="col-lg-2 col-md-3 col-2">
      <div className="card">
        <img src={PosterPath} className="card-img-top" alt={Movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{Movie.original_title}</h5>
          <Link to={DetailUrl} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Searchview = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard Movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};
export default Searchview;
