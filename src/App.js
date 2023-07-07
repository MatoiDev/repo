import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import MainPage from "./Components/Pages/Main/MainPage";
import TweaksPage from "./Components/Pages/Tweaks/TweaksPage";
import RepositoriesPage from "./Components/Pages/Repo/RepositoriesPage";
import AutoreverseVideoBackground from "./Components/Background/AutoreverseVideoBackground";
import wallpaperVideo from "./assets/wallpaper.mp4"
import './App.css'

const App = () => {

    return (
        <>

            <Router>
                <NavigationBar />
                <AutoreverseVideoBackground src={wallpaperVideo} />
                <Routes>
                    <Route path="/repo" exact element={
                        <MainPage />
                    } />
                    <Route path="/tweaks" exact element={
                        <TweaksPage />
                    } />
                    <Route path="/install" exact element={
                        <RepositoriesPage />
                    } />
                </Routes>
            </Router>
        </>
    );
}


export default App;