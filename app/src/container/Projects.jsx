import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    height: 93vh;
`;

const Projects = ({ data }) => {
    if (!data) {
        return;
    }

    return (
        <ProjectsWrapper>
            {data.map((project) => {
                if (
                    project.id >= 473585771 &&
                    project.name != "personal-project-react-ts"
                )
                    return <ProjectCard key={project.id} project={project} />;
            })}
        </ProjectsWrapper>
    );
};

export default Projects;
