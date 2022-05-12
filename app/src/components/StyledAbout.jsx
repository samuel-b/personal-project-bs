import styled from "styled-components";

export const AboutWrapper = styled.div`
    padding: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 550px;
    @media (max-width: 900px) {
        align-items: center;
        width: 100%;
        text-align: center;
    }
`;
