import styled from "styled-components"

export const Container = styled.div`
min-width: 300px;
max-width: 300px;
border: 2px solid white;
border-radius: 5px;
font-family: "Montserrat";
background-color: white;
`

export const ImageContainer = styled.div`
width: 100%;

img {
    width: 100%;
    height: 200px;
    object-fit: contain;
}
`

export const DescriptionContainer = styled.div`
padding: 10px 0px 10px 20px;
display: flex;
flex-direction: column;
gap: 10px;

.btn-box {
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    width: 90%;
}
`