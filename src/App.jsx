import "./App.css";
import Topnavbar from "./components/topnavbar/Topnavbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Userslist from "./pages/userslist/Userslist";
import { Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import Newuser from "./pages/newusercreate/Newuser";
import Movies from "./pages/movies/Movies";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newmovie/NewMovie";
import Login from "./pages/login/Login";
import React, { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MovieListbyGenre from "./pages/movielistbygenre/MovieListbyGenre";
import EachListByGenre from "./pages/eachlistbygenre/EachListByGenre";
import NewGenreListCreate from "./pages/newgenrelistCreate/NewGenreListCreate";

function App() {
  // const [user,setUser]=useState(false);
  const {user }=useContext(AuthContext);
    return (
    <div className="App">
      {!user?
      <Routes>
        <Route path="/" element={<Login/>}/>
      {/* <Route path="/Login" element={<Login/>} /> */}
      <Route path="*" element="page not found try to login "/>
      </Routes>:<>
      <Topnavbar />
      <div className="container">
        <Sidebar />
        {/* currently working on users and crud operations them and updating movieinfo and other
             the above mentioned are  not part of capstone project */}

        <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/users" element={<Userslist />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<Newuser />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/movieupload" element={<NewMovie />} />
     
          <Route path="/lists" element={<MovieListbyGenre />} />
          <Route path="/list/:listId" element={<EachListByGenre/>} />
          <Route path="/newlist" element={<NewGenreListCreate/>} />
          <Route path="*" element="page not found try to login "/>
        </Routes>
      </div></>}
    </div>
  );
}

export default App;
