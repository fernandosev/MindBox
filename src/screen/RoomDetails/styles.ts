import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: transparent;
`;

export const RoomImage = styled.TouchableOpacity<{ background: string }>`
  width: 100px;
  height: 100px;
  margin-top: 30px;
  background-color: ${props => props.background};
  border-radius: 200px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 28px;
  color: ${colors.primaryText};
  text-align: center;
  margin-top: 10px;
`;

export const Panel1 = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const Panel2 = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
})`
  flex: 1;
  background-color: transparent;
`;

export const Subtitle = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 18px;
  color: ${colors.primaryText};
  margin-top: 10px;
  padding-left: 20px;
`;

export const Text = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 16px;
  color: ${colors.primaryText};
  margin-right: 5px;
`;

export const MeetingButton = styled.TouchableOpacity`
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;
