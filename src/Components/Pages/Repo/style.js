import styled from 'styled-components';

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-size: 50px;
  color: lightgray;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  cursor: pointer;
  
`;

export  const P = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  color: lightgray;
  text-align: center;
`;

export const VerticalLineBreak = styled.div`
  border-left: 1px solid rgba(211, 211, 211, 0.46);
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const PackageManager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;

  a img:hover {
    transform: scale(1.1);
  }
`;

export const Pfp = styled.img`
  border-radius: 20%;
`;