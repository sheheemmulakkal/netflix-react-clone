import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Posts from "./Components/PostCard/Posts";
import { popular_series, popular_movies, action_movies, fantasy_movies, upcoming_movies, series_arriving_today, top_rated_series } from "./Constants/urls";

import './App.css'
function App() {
  return (
    <div className="main">
      <header>
        <Navbar />
        <Banner />
      </header>
      <section>
        <Posts title='Netflix Originals' type={popular_series} itemType={'series'}/>
        <Posts title="Popular Series"  type={popular_movies} itemType={'series'}  poster />
        <Posts title="Series Arriving Today"  type={series_arriving_today} itemType={'series'}  poster />
        <Posts title="Upcoming Movies"  type={upcoming_movies} itemType={'movie'}   poster />
        <Posts title="Top Rated Series"  type={top_rated_series} itemType={'series'}  poster />
        <Posts title="Fantasy Movies"  type={fantasy_movies} itemType={'movie'}  poster />
      </section>
    </div>
  );
}

export default App;
