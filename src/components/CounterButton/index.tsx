import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Button,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps {
  type: 'plus' | 'minus'
}

export function CounterButton({ type, ...rest }: Props) {
  return (
    <Container>
      <Button type={type} {...rest}>
        <Icon name={type} />
      </Button>


    </Container>
  );
}