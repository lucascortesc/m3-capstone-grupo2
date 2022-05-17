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
padding: 10px 10px 10px 10px;
display: flex;
flex-direction: column;
gap: 10px;

.canceled {
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    color: red;
    font-weight: 900;
}

span {
    margin-left: 20px;
}

h3 {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.btn-box {
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    width: 90%;
}
`