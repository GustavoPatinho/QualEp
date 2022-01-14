import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: center;
  `;

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  border-width:1px;
  align-items:center;
  justify-content:center;
  width:72px;
  height:72px;
  background-color:#000000;
  border-radius:50px;
  margin-top: 20px;
`;


export const Icon = styled(Feather)`
  font-size: 45px;
  color: white;
`;