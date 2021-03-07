import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";
import DetailedMovie from "./Components/DetailedMovie";
function App() {
  return (
    <div>
      <Route path="/" render={Navbar}></Route>
      <Route exact path="/" render={LandingPage}></Route>
      <Route exact path="/home" render={Home}></Route>
      <Route exact path="/home/datailedMovie" render={DetailedMovie}></Route>
      {/* <Route exact path="/home/movies" render={MovieCard}></Route> */}
    </div>
  );
}

export default App;
