import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { LeftSection,Img } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Bienvenue sur<br />
        mon portfolio personnel
        </SectionTitle>
        <SectionText>
        J'ai toujours été fasciné par les technologies de développement web et de manipulation de données, vu la rapidité d'évolution de ce domaine d'un jour à l'autre. Je suis très intéressé par la création de sites Web et la mise en œuvre de solutions automatisées pour l'intégration de données.        </SectionText>
        <Link href="#projects">
        <Button onClick={props.handleClick}>Voir Projets</Button>
        </Link>
      </LeftSection>
      <Img src="/images/mehdi.png" alt="Avatar" />

    </Section>
  </>
);

export default Hero;