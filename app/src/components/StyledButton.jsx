import styled from "styled-components";

export const Button = styled.button`
    background-color: white;
    border-color: ${(props) => props.theme.colors["secondary"]};
    color: ${(props) => props.theme.colors["secondary"]};
    border: 1px solid;
    border-radius: 0.25rem;
    padding: 6px 12px;
    /* margin: 0 10px 0 0px; */
    &:hover {
        background-color: ${(props) => props.theme.colors["secondary"]};
        color: white;
    }
`;
