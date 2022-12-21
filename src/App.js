import './App.css';
import MovieCard from './components/movie-card/MovieCard';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <div>
          <Navbar />
          <SearchBar/>
          <MovieCard />
    </div>
  );
}

export default App;
