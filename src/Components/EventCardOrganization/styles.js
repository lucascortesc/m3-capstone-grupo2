import styled from "styled-components"

export const Container = styled.div`
min-width: 300px;
max-width: 300px;
border: 2px solid white;
border-radius: 5px;
font-family: "Montserrat";
background-color: white;
cursor: pointer;

&:hover {
    border: 2px solid #c3bd2e;
    transform: scale(1.1);
    transition: transform 0.9s 0.2s;

    div > img {
      transform: scale(1.1);
    }
  }
`

export const ImageContainer = styled.div`
width: 100%;
overflow: hidden;

img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 5px 5px 0px 0px;
    background-position: center;
    background-size: cover;
    transition: 0.7s;
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