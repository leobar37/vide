import React from 'react';
import styled from '@emotion/styled';
import SmallCardProps from './SmallCardProps';


const Wrapper = styled.div`
    min-width: 180px;
    min-height: 180px;
    background-color: #fff;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #f8f8f8;
    }

    @media (min-width: 1024px) {
        min-width: 260px;
        min-height: 260px;
        margin-right: 4rem;
        margin-bottom: 4rem;
        border-radius: 0.25rem;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;

    @media (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
`;

function SmallCard({ title, icon }: SmallCardProps): JSX.Element {
  return (
      <Wrapper>
          <Container>
              <Icon>{ icon }</Icon>
              <Title>{ title }</Title>
          </Container>
      </Wrapper>
  );
}

export default SmallCard;