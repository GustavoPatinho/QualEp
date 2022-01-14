import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Counter } from '../../components/Counter';
import { CounterButton } from '../../components/CounterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  Title,
  Image,
} from './styles';

export function Home() {
  const [epNumber, setEpNumber] = useState(0);
  const [pressing, setPressing] = useState<"minus" | "plus" | null>(null);

  const storeValueAtAsyncStorage = () => {
    if (epNumber) {
      AsyncStorage.setItem('@counterValue', epNumber.toString())
        .catch(() => console.log("error on put value to asyncStorage"))
    }
  }

  const getValueFromAsyncStorage = async () => {
    AsyncStorage.getItem('@counterValue').then(asyncStorageValue => {
      setEpNumber(Number(asyncStorageValue));
    }).catch(() => {
      console.log("error on get value from asyncStorage")
      setEpNumber(0);
    })
  }

  useEffect(() => {
    let timeOut;
    if (pressing) {
      timeOut = setInterval(() => {
        setEpNumber(currentValue => {
          if (pressing === "minus") {
            return currentValue - 1
          }
          return currentValue + 1
        })
      }, 100)
    }

    return () => {
      clearInterval(timeOut)
    }
  }, [pressing])

  useEffect(() => {
    getValueFromAsyncStorage()
  }, [])

  useEffect(() => {
    storeValueAtAsyncStorage()
  }, [epNumber])

  return (
    <Container>
      <Header>
        <Title>Qual o ultimo episódio que assisti?</Title>
      </Header>
      <Image
        source={{ uri: 'https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Symbol.png' }}
        resizeMode='contain'
      />

      <Counter value={epNumber} />

      <View style={{ flexDirection: 'row' }}>
        <CounterButton
          type='minus'
          onPress={() => setEpNumber(state => state - 1)}
          onLongPress={e => setPressing('minus')}
          onPressOut={e => setPressing(null)}
        />
        <CounterButton
          type='plus'
          onPress={() => setEpNumber(state => state + 1)}
          onLongPress={e => setPressing('plus')}
          onPressOut={e => setPressing(null)}
        />
      </View>
    </Container>
  );
}