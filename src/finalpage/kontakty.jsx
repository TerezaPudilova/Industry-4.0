import React from 'react';
import styled from '@emotion/styled';
import {colors} from '../styles/variables.js';
import { Container, FullWidthContainer, Contacts, Title2 } from '../styles/Container';



export const Kontakty =()=>{
      return (
        <FullWidthContainer bgColor={colors.darkBlue}>
        <Container>
       
    <Title2>Pro doplnění informací a případnou konzultaci kontaktujte naše specialisty</Title2>

    <Contacts>
            <Title2>Karol Horváth</Title2>
            <div>Email:karol.horvath@fbe.sk</div>
            <img src="img/horvath.png" alt="horvath"/>
          
            <Title2>Tomáš Marek</Title2>
            <div>Email:tomas.marek@fbe.cz</div>
            <img src="img/marek.jpg" alt="marek"/>
         </Contacts>
      
           </Container>
           </FullWidthContainer>
      );
    }
 