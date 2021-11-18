import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Movieview = () => {
  const { id } = useParams();
  console.log(id);
  const [Moviedetail, setMoviedetail] = useState({});
  const [isLoading, setisLoading]= useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=16221920922eec4cb73c489e9e92df2e&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviedetail(data);
        setisLoading(false);
      });
  }, [id]);
  function RenderMovieDetails(){
      if(isLoading)
      {
          return(
              <Hero text="Is Loading..."/>
          )
      }
      if(Moviedetail){
          const posterpath=`https://image.tmdb.org/t/p/original${Moviedetail.poster_path}`;
          const backdrop=`https://image.tmdb.org/t/p/original${Moviedetail.backdrop_path}`
          return(
              <>
              <Hero text={Moviedetail.original_title} backdrop={backdrop}/>
                     
              <div className="container my-5">
              <div className="row">
              <div className="col-md-3 poster">
                  <img src={posterpath} className="img-fluid shadow rounded"></img>
              </div>
              <div className="col-md-9">
                  <h2>{Moviedetail.original_title}</h2>
                  <p>
                      Overview: {Moviedetail.overview}
                  </p>
                  <h3>Status: {Moviedetail.status}</h3>
              </div>
              </div>
              </div>
            
              );
              
           
              </>
          )
      }

  }
  return RenderMovieDetails();
};
  
 
     
        
        export default Movieview;
