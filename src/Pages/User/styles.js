import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  background-color: var(--primaryColor);
  .updateUser {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 544px;
    padding: 10px;
    @media (min-width: 544px) {
      padding: 0;
    }
  }
  .buttonDesktop {
    display: block;
    margin: 15px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #146666;
    font-weight: 550;
    color: #fff;
  }
  .btnAll {
    margin-bottom: 15px;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  max-width: 544px;
  min-height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(20, 102, 102, 0.4);
  border-radius: 5px;

  p {
    font-weight: 800;
    color: white;
    font-family: "Montserrat";
    font-size: 20px;
    max-width: 90%;
    text-align: center;
  }
`;

export const VoluntaryContainer = styled.div`
  .events-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      font-family: "Montserrat";
      font-size: 25px;
      color: white;
      font-weight: 500;
      text-align: center;
    }
  }
  > .events-filled {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;

    p {
      font-weight: 800;
      color: white;
      font-family: "Montserrat";
      font-size: 20px;
      align-self: center;
    }

    ul {
      width: 95%;
      display: flex;
      gap: 30px;
      overflow-x: scroll;
      padding: 30px 30px 20px 30px;
    }

    @media (min-width: 1024px) {
      ul {
        max-width: 90%;
        overflow-x: hidden;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100vw;
      height: 420px;
      background-color: rgb(20, 102, 102, 0.4);
    }
  }
`;

export const OrganizationContainer = styled.div`
  > .events-filled {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;

    ul {
      width: 95%;
      display: flex;
      gap: 30px;
      overflow-x: scroll;
      padding: 30px 30px 20px 30px;
    }

    @media (min-width: 1024px) {
      ul {
        max-width: 90%;
        overflow-x: hidden;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    > p {
      font-weight: 800;
      color: white;
      font-family: "Montserrat";
      font-size: 20px;
      align-self: center;
    }
  }
`;

export const AddModal = styled.div`
  font-family: "Montserrat";
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  color: var(--color-highlight);
  background-color: var(--primaryColor50);
  cursor: pointer;
  padding: 0px 20px;
`;
