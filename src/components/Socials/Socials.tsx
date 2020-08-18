import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  StyledSocials,
  StyledSocialsHeading,
  StyledSocialsIcon,
  StyledSocialsIconContainer,
} from './Socials.styles';

const Socials = () => (
  <StyledSocials>
    <StyledSocialsHeading>
      Bobby Martin | Front End Engineer
    </StyledSocialsHeading>
    <StyledSocialsIconContainer>
      <StyledSocialsIcon>
        <FontAwesomeIcon icon={faGithub} size='sm' />
      </StyledSocialsIcon>
      <StyledSocialsIcon>
        <FontAwesomeIcon icon={faLinkedin} size='sm' />
      </StyledSocialsIcon>
      <StyledSocialsIcon>
        <FontAwesomeIcon icon={faEnvelope} size='sm' />
      </StyledSocialsIcon>
    </StyledSocialsIconContainer>
  </StyledSocials>
);

export default Socials;
