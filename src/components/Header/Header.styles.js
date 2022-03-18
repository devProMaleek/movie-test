// Import the necessary libraries
import styled from 'styled-components';


// Export the Wrapper component div style
export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px; 
`;

// Export the content component div style
export const Content = styled.div`
  width: 100% !important;
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }
`;



// Export the logo component img style
export const LogoImg = styled.img`
  width: 200px;
  
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
