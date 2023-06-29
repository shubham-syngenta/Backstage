import { Content, Header, LinkButton, Page } from '@backstage/core-components';
import React from 'react';

export const HomePage = () => {
  /* We will shortly compose a pretty homepage here. */
  return (
    <Page themeId="home">
      <Header title="Home Page" />
      <Content>
        <LinkButton to='https://devops.syngenta-digital.com/30000-ft'>Link To Open</LinkButton>
        <iframe title="url" src="https://api.ipify.org?format=json" 
          width='400' height='400' allowFullScreen sandbox='allow-scripts allow-same-origin'/>
      </Content>
      </Page>
  );
};
