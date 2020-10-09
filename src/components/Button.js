import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.01rem solid var(--beige);
  border-color: ${props => (props.cart ? "var(--beige)" : "var(--etonBlue)")};
  color: ${props => (props.cart ? "var(--beige)" : "var(--etonBlue)")};
  border-radius: 10rem;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--beige)" : "var(--etonBlue)")};
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
`;
