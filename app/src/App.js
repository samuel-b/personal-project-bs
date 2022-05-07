import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
            </ThemeProvider>
        </>
    );
}

export default App;
