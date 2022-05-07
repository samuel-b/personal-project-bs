import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-query";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./container/Projects";
import Home from "./container/Home";

function App() {
    const fetchProjects = async () => {
        const res = await fetch("https://api.github.com/users/samuel-b/repos");
        return res.json();
    };

    const { data } = useQuery("users", fetchProjects);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Home />

                <Projects data={data} />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
