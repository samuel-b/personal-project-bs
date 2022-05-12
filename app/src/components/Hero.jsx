import styled from "styled-components";
import { Button } from "./StyledButton";
import { Link } from "react-router-dom";

const HeroWrapper = styled.div`
    padding: 10%;
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 900px) {
        align-items: center;
        width: 100%;
        text-align: center;
    }
`;

const HeroImage = styled.img`
    border-radius: 50%;
    margin-right: 25px;
    width: 250px;
`;

const HeroName = styled.h1`
    color: ${(props) => props.theme.colors["primary"]};
`;

const HeroTitle = styled.h2`
    color: ${(props) => props.theme.colors["secondary"]};
`;

const HeroDesc = styled.h5`
    color: ${(props) => props.theme.colors["primary"]};
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQF81eLAFZZ2Tg/profile-displayphoto-shrink_800_800/0/1593402131380?e=1657756800&v=beta&t=8zvqdK5O2zIlXQdVJo5N9Mf1m_7MTZKM_Z1pF06JnrU"
                alt="Profile Photo"
            />
            <div>
                <HeroName> Samuel Brooker</HeroName>
                <HeroTitle>Junior Full Stack Developer</HeroTitle>
                <HeroDesc>Lets build something great together</HeroDesc>
                <Link to="/projects">
                    <Button>Projects</Button>
                </Link>
            </div>
        </HeroWrapper>
    );
};

export default Hero;
