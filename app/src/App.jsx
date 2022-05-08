import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import GlobalPageStylingProvider from "./theme/global/GlobalPageStylingProvider";
import { useQuery } from "react-query";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./container/Projects";
import Home from "./container/Home";
import About from "./container/About";

function App() {
    const fetchProjects = async () => {
        const res = await fetch("https://api.github.com/users/samuel-b/repos");
        return res.json();
    };

    const { data } = useQuery("users", fetchProjects);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalPageStylingProvider />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/projects"
                        element={<Projects data={data} />}
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
