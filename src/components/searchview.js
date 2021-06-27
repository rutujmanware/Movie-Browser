import Hero from './hero';
const Searchview=({keyword,searchResults})=>{
    const title=`You are searching for ${keyword}`
    console.log(searchResults,"is the search results");
    return(
        <Hero text={title} />
    )
}
export default Searchview;