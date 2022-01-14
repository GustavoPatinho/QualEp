import React, { useEffect, useState } from 'react';

import {
  Container,
  Number,
} from './styles';


export function Counter({ value }) {
  const [valueToDisplay, setValueToDisplay] = useState<string[]>([]);

  const convertNumberToString = () => {
    let tmpValue = value.toString().split('')
    if (tmpValue.length <= 3) {
      const loops = 4 - tmpValue.length
      for (let index = 0; index < loops; index++) {
        tmpValue.unshift("0");
      }
    }
    setValueToDisplay(tmpValue);
  }

  useEffect(() => convertNumberToString(), [value])

  return (
    <Container>
      {valueToDisplay.map((it, index) => {
        return <Number key={index}>{it}</Number>
      })}
    </Container>

  );
}