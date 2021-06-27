import './App.css';
import Navbar from './components/navbar';
import {useState,useEffect} from 'react';
import Home from './components/home';
import Aboutview from './components/aboutus';
import {Switch,Route} from 'react-router-dom';
import Searchview from './components/searchview';

function App() {

const [searchResults,setSearchResults]=useState([]);
const [searchText,setSearchText]=useState('');



  return (
    <div >
          <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch >
        <Route path='/' exact>
          <Home />
        </Route>
      <Route path='/about' component={Aboutview}/>
      <Route path='/search'>
        <Searchview keyword={searchText} searchResults={searchResults} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
