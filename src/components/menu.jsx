import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import logo from '../img/logo.png';
import { Wrapper } from './menu.styles';
import { Container } from '../styles/Container';

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
                <div className="logoFBE">
                  <Link className="link" to="/">
                    <img src={logo} alt="logoFBE" width="150" height="60" />
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div className="links">
                  <Link className="link" to="/dotaznik/:categoryCodeName">
                    Questionnaire
                  </Link>
                  <Link className="link" to="/vysledky">
                    Finalpage
                  </Link>
                  <a className="link" href="#">
                    FBE Praha
                  </a>
                  <a className="link" href="#">
                    FBE Bratislava
                  </a>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};
