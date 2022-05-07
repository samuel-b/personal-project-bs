import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Projects = ({ data }) => {
    if (!data) {
        return;
    }

    return (
        <ProjectsWrapper>
            {data.map((project) => {
                if (project.id >= 473585771)
                    return <ProjectCard key={project.id} project={project} />;
            })}
        </ProjectsWrapper>
    );
};

export default Projects;
