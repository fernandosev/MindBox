import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-top: 10px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  flex-direction: row;
`;

export const RoomImage = styled.TouchableOpacity<{ background: string }>`
  width: 45px;
  height: 45px;
  background-color: ${props => props.background};
  border-radius: 45px;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 30px;
`;

export const Title = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 20px;
  color: ${colors.primary};
`;

export const Subtitle = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 16px;
  color: ${colors.primary};
`;
