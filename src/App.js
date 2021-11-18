import "./App.css";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Aboutview from "./components/aboutus";
import { Switch, Route } from "react-router-dom";
import Searchview from "./components/searchview";
import Movieview from "./components/movieview";
// 16221920922eec4cb73c489e9e92df2e
// https://api.themoviedb.org/3/movie/550?api_key=16221920922eec4cb73c489e9e92df2e
//example link : https://api.themoviedb.org/3/search/company?api_key=16221920922eec4cb73c489e9e92df2e&query=Star%20Wars&page=1
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText){

      
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=16221920922eec4cb73c489e9e92df2e&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results)
        });
    }
     
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={Aboutview} />
        <Route path="/search">
          <Searchview keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/Movie/:id" component={Movieview} />
      </Switch>
    </div>
  );
}

export default App;
