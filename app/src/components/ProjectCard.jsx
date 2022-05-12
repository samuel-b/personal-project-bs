import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "./StyledButton";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 275px;
    border: 1px solid ${(props) => props.theme.colors["secondary"]};
    margin: 5px 0;
`;

const CardImage = styled.img`
    height: 150px;
    width: 97px;
    margin: 10px 0;
`;

const ButtonWrapper = styled.div`
    margin-top: 15px;
`;

const CardButton = styled(Button)`
    margin:0 25px;
`

const ProjectCard = ({ project }) => {
    return (
        <CardWrapper>
            <h4>{project.name}</h4>
            <CardImage
                src={`https://raw.githubusercontent.com/samuel-b/${project.name}/main/images/${project.name}.png`}
                alt="Project Image"
            />
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Technology Used</Accordion.Header>
                    <Accordion.Body>This feature is not avaliable yet..see github for technology used</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Project Description</Accordion.Header>
                    <Accordion.Body>{project.description}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <ButtonWrapper>
                <a href={project.html_url}>
                    <CardButton>
                        <img src="https://img.icons8.com/ios-glyphs/25/000000/github.png" />
                    </CardButton>
                </a>
                <a href={`https://samuel-b.github.io/${project.name}`}>
                    <CardButton>
                        <img src="https://img.icons8.com/ios/25/000000/open-in-browser.png" />
                    </CardButton>
                </a>
            </ButtonWrapper>
        </CardWrapper>
    );
};

export default ProjectCard;
