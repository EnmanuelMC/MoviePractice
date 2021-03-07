import  Movies  from './MovieList';
import MovieCard from './MovieCard';

function Home() {
  return (
    <div className="d-flex flex-wrap mx-auto justify-content-between ">
      {
      Movies.map(({ Title, Poster, link }, index) => (
          <MovieCard key={index} link={link} title={Title} poster={Poster} />
          ))
        }
    </div>
  );
}

export default Home;