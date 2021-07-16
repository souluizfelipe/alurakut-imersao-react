import styled from "styled-components";

const MainGrid = styled.main`
    width: 100%;
    grid-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
    padding: 16px;

    .profileArea {
        display: none;
        @media(min-width: 1010px) {
            display: block;
        }
    }
    
    @media(min-width: 1010px) {
        max-width: 1150px;        
        display: grid;
        grid-template-areas: 
            "profileArea welcomeArea profileRelationsArea";
        grid-template-columns: 200px 1fr 350px;
    }
`;

export default MainGrid;