import styled from "styled-components";

const HeroWrapper = styled.div`
    border: 1px solid ${(props) => props.theme.colors["secondary"]};
    padding: 10%;
    display: flex;
    width: 40%;
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

const Button = styled.button`
    background-color: white;
    border-color: ${(props) => props.theme.colors["secondary"]};
    color: ${(props) => props.theme.colors["secondary"]};
    border: 1px solid;
    border-radius: 0.25rem;
    padding: 6px 12px;
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroImage
                src="https://i.picsum.photos/id/1077/200/200.jpg?hmac=hiq7UCoz9ZFgr9HcMCpbnKhV-IMyOJqsQtVFyqmqohQ"
                alt="Profile Photo"
            />
            <div>
                <HeroName> Samuel Brooker</HeroName>
                <HeroTitle>Junior Full Stack Developer</HeroTitle>
                <HeroDesc>Lets build something great together</HeroDesc>
                <Button>Learn More</Button>
            </div>
        </HeroWrapper>
    );
};

export default Hero;
