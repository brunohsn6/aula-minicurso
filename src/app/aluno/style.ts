import styled from "styled-components";

export const AlunoContainer = styled.div`
  display: block;
  background-color: #2121b6;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const AlunoSection = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr imor !important;
  }
`;

export const LogoSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LogoIcon = styled.span`
  color: white;
  font-size: 4em;
  font-weight: bold;
`;

export const AlunoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffc800;
  margin: 1.5em;
  margin-left: 0em;
  padding: 3em;
`;

export const FormInput = styled.input`
  padding: 1em;
  width: 100%;
  margin-bottom: 1em;
  box-shadow: none;
  border: 1px solid white;
`;
