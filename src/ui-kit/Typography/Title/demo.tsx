import React from 'react';
import { Title } from './Title';

export const TitlesDemo: React.FC = () => {
  return (
    <>
      <Title align="left">h1.Title</Title>
      <Title level={2} align="left">
        h2.Title
      </Title>
      <Title level={3} align="left">
        h3.Title
      </Title>
      <Title level={4} align="left">
        h4.Title
      </Title>
    </>
  );
};
