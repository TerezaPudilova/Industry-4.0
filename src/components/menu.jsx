import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import logo from '../img/logo.png';
import { Wrapper } from './menu.styles';
import { Container, LinksMenu, LinksItem } from '../styles/Container';

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} >
                <div className="logoFBE">
                  <Link to="/">
                    <img src={logo} alt="logoFBE" width="150" height="60" />
                  </Link>
                </div>
              </Grid.Column >
              <Grid.Column width={10} >
                <LinksMenu>
                <LinksItem>
                  <Link to="/dotaznik/:categoryCodeName">
                    Dotazník
                  </Link>
                  </LinksItem>
                  <Link to="/vysledky">
                    Výslední správa
                  </Link>
                  <LinksItem href="#">
                    FBE Praha
                  </LinksItem>
                  <a href="#">
                    FBE Bratislava
                  </a>
                </LinksMenu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};
