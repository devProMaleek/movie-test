// Import styled from the styled-component libraries.
import styled from 'styled-components';

// Export the Wrapper style component
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);
  
  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px; 
    outline: none;
  }
`;
