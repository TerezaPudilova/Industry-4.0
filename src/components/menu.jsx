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
                  <img src={logo} alt="logoFBE" width="150" height="60" />
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div className="links">
                  <Link className="link" to="/dotaznik">
                    Questionnnaire
                  </Link>
                  <Link className="link" to="/finalPage">
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
