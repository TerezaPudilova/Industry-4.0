import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import logo from '../img/logo.png';
import { Wrapper, Links, LinksItem, LinksMenu, Logo } from './menu.styles';
import { Container } from '../styles/Container';

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
                <Logo>
                  <Link to="/">
                    <img src={logo} alt="logoFBE" width="150" height="60" />
                  </Link>
                </Logo>
              </Grid.Column>
              <Links>
                <Grid.Column width={10}>
                  <LinksMenu>
                    {/* <LinksItem>
                      <Link to="/dotaznik/:categoryCodeName">Dotazník</Link>
                    </LinksItem>
                    <Link to="/vysledky">Výslední správa</Link>
                    <LinksItem>
                      <Link to="/registrace">Registrace</Link>
                    </LinksItem>
                    <LinksItem href="#footer">Kontakty</LinksItem> */}
                    <LinksItem href="https://www.fbe.cz/index.php">FBE Praha</LinksItem>
                    <LinksItem href="https://www.fbe.sk/">FBE Bratislava</LinksItem>
                  </LinksMenu>
                </Grid.Column>
              </Links>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};
