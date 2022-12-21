import styled from "@emotion/styled"

export const SearchBarMain = styled.div` 
    width: 90%;
    margin: auto;
    justify-content: center;
    display: flex;
    margin-top: 1em;
    & input {
        width: 90%;
        font-size: 1em;
        height: 3em;
        border: none;
        padding-left: 20px;
        border-radius: 0.8em;
    }

    & input:focus {
        outline: none;
        
    }
`;