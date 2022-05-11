import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
background: none;
`

export const HeaderContainer = styled.div`
width: 100%;
height: 100%;
max-width: 1024px;
display: flex;
justify-content: space-between;
align-items: center;
background: none;

@media (max-width: 768px) {
    padding: 0px 25px;
}

h1 {
    font-family: "Montserrat";
    font-weight: 800;
    color: var(--color-highlight);
    font-size: 20px;
}
`