import Layout from '../components/layout';
import styled from 'styled-components';
import Head from "next/head";
import { Reveal } from 'semantic-ui-react'

const HeadingContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 500px;
  font-size: 50px;
  margin-top: 20px;
  background: rgb(233,196,106);
  background: linear-gradient(90deg, rgba(233,196,106,1) 16%, rgba(244,162,97,1) 50%, rgba(231,111,81,1) 100%);
    .content-block{
      border: 1px solid #264653;
    }

    .one{
      grid-area: 2 / 2 / 4 / 4; 
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .two{ 
      grid-area: 3 / 4 / 5 / 6;
      display: flex;
      justify-content: center;
      align-items: center;
      }
`;

const Section = styled.div`
  height: 300px;
  border: 1px solid #264653;
  margin: 10px 0px;
  display: flex;
  justify-content: center;

`;

const Index = () => (
  <Layout>
    <HeadingContainer>
      <div className={'content-block one'}>
        <div>ALL MY </div>
      </div>
      <div className={'content-block two'}>
        <div> FRIENDS </div>
      </div>
    </HeadingContainer>
    <Section>
    </Section>
    <Section>
    </Section>
  </Layout>
);

export default Index;