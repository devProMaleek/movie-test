// Import the necessary library
import React from 'react';
import PropTypes from 'prop-types';

// Import styles
import { Image } from './Thumb.styles';

const Thumb = ({ image }) => (
    <div>
        <Image src={image} alt='movie-thumb'/>
     </div>
);

// Validating prop types.

Thumb.propTypes = {
     image: PropTypes.string
}

export default Thumb;