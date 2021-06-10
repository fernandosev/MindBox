import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  flex-direction: row;
  align-items: center;
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
  height: 100%;
  margin-left: 30px;
  justify-content: center; ;
`;

export const Title = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 18px;
  color: ${colors.primary};
`;

export const Subtitle = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 14px;
  color: ${colors.primary};
`;

export const NextMeetingText = styled.Text`
  font-family: ${metrics.fontBold};
  font-size: 11px;
  color: #777777;
  text-align: right;
  position: absolute;
  bottom: 2px;
  right: 0;
`;
