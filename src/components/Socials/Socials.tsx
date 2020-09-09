import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <FontAwesomeIcon icon={faGithub} size='xs' fixedWidth inverse />
      </StyledSocialsIcon>
      <StyledSocialsIcon>
        <img src='linkedin.svg' alt='connect with me on linkedin' />
      </StyledSocialsIcon>
      <StyledSocialsIcon>
        <img src='email.svg' alt='email me' />
      </StyledSocialsIcon>
    </StyledSocialsIconContainer>
  </StyledSocials>
);

export default Socials;
