// Import the necessary libraries
import React from 'react';
import { Link } from 'react-router-dom';


// Import images.
import Logo from '../../images/logo.svg';

// Import the styled component
import {Wrapper, Content, LogoImg } from "./Header.styles";


// Header Component

const Header = () => {

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={Logo} alt='logo'/>
                </Link>

            </Content>
        </Wrapper>
    )
};

// Export the Header Component
export default Header;