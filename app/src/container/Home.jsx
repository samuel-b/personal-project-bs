import styled from "styled-components";
import Hero from "../components/Hero";

const HomeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
        </HomeWrapper>
    );
};

export default Home;
