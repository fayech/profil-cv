import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineBars } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Mohamed Mehdi Fayech</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>À propos</NavLink>
        </Link>
      </li>  
      <li>
        
      </li>       
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/fayech">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mohamed-mehdi-fayech/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
       
     
      </Div3>
    </Container>
);

export default Header;
