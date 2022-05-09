import { AboutWrapper } from "../components/StyledAbout";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;

const About = () => {
    return (
        <PageWrapper>
            <AboutWrapper>
                <h2>About Me</h2>
                <p>
                    Hi, I am Samuel. I am a Junior Full Stack Developer with a
                    background in Information Technology Service Management and
                    Telecommunications.
                </p>
                <p>
                    I am an advocate of continuing education and the sharing of
                    knowledge and my prior experience allow me to deliver high
                    qualty projects.
                </p>
                <p>
                    I build websites and web applications using responsive
                    design, clean code and best practices.
                </p>
            </AboutWrapper>
            <AboutWrapper>
                <h2 class="tech__title">Tech Stack</h2>

                <h4>Front-End</h4>
                <div class="tech__front">
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
                    <img src="https://img.icons8.com/color/48/000000/css3.png" />
                    <img src="https://img.icons8.com/color/48/000000/sass.png" />
                    <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
                    <img src="https://img.icons8.com/office/48/000000/react.png" />
                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                </div>
                <h4>Back-End</h4>
                <div class="tech__back">
                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                    <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png" />
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                    <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
                    <img src="https://img.icons8.com/color/48/000000/spring-logo.png" />
                    <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" />
                </div>
                <h4>Tools</h4>
                <div class="tech__tools">
                    <img src="https://img.icons8.com/color/48/000000/git.png" />
                    <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" />
                    <img src="https://img.icons8.com/fluency/48/000000/github.png" />
                    <img src="https://img.icons8.com/color/48/000000/npm.png" />
                </div>
            </AboutWrapper>
        </PageWrapper>
    );
};

export default About;
