import styled from "@emotion/styled"

export const NavbarMain = styled.div`
    background-color: black;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    
    & ul {
        display: flex;
        list-style: none;
        color: white;
        margin-left: 6em;
        
    }
    & ul, li {
        display: flex;
        font-size: 1.2em;
        margin-right: 1em;
        align-items: center;
    }

`;