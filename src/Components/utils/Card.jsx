import React from 'react';
import { Card } from '../../Styles/components/card';
import { Title } from '../../Styles/components/Utils';

export default props => (
  <Card>
    <Title className="p-3">{props.title}</Title>
    {props.children}
  </Card>
)