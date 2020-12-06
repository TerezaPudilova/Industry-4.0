import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  FullWidthContainer,
  TextFooter,
  FooterItem,
  FooterPart,
  FooterMiddleItem,
} from '../styles/Container';
import LinkedInLogo from '../img/LI-Logo.png';
import { LinksItem } from '../components/menu.styles';

export const Footer = () => {
  return (
    <>
      <FooterPart id="footer">
        <FooterItem>
          {' '}
          designed by Ingrid Haburaiová&Tereza Pudilová
          <br />
          <br />
          <LinksItem href="https://www.linkedin.com/company/fbe-praha-s-r-o/">
            <img width="120px" src={LinkedInLogo} alt="logoLinkedIn" />
          </LinksItem>
        </FooterItem>

        <FooterMiddleItem>
          FBE Praha s.r.o.
          <br />
          Baarova 13, 140 00 Praha 4<br />
          tel.: +420 241 484 723
          <br />
          fax: +420 241 484 522
          <br />
          e-mail: fbe@fbe.cz
          <br />
        </FooterMiddleItem>

        <FooterItem>
          FBE Bratislava s.r.o.
          <br />
          Liptovská 10, 821 09 Bratislava
          <br />
          tel.: +421 2 5441 8513
          <br />
          fax: +421 2 5441 8515
          <br />
          e-mail: fbe@fbe.sk
          <br />
        </FooterItem>
      </FooterPart>
    </>
  );
};
