import styled from "styled-components";
import Hero from "../components/Hero";
import About from "./About";

const HomeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Home = () => {
    return (
        <>
            <HomeWrapper>
                <Hero />
                <About />
            </HomeWrapper>
        </>
    );
};

export default Home;
