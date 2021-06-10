import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Panel1 = styled.View`
  width: 100%;
  height: 45%;
  align-items: center;
  justify-content: center;
`;

export const Panel2 = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const Panel3 = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  border-right-width: 0.5px;
  border-right-color: #696969;
`;

export const Panel4 = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`;

export const UserRigthContainer = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const UserName = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 10px;
  color: ${colors.primaryText};
  margin-top: 5px;
`;

export const UserImage = styled.View<{ background: string }>`
  width: 35px;
  height: 35px;
  background-color: ${props => props.background};
  border-radius: 45px;
  align-items: center;
  justify-content: center;
`;

export const UserCenterContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const UserCenterName = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 20px;
  color: ${colors.primaryText};
  margin-top: 5px;
`;

export const UserCenterImage = styled.View<{ background: string }>`
  width: 85px;
  height: 85px;
  background-color: ${props => props.background};
  border-radius: 45px;
  align-items: center;
  justify-content: center;
`;

export const ButtonPanelTypeContainer = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  background-color: ${colors.primary};
`;

export const ButtonPanelType = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: transparent;
  border-bottom-width: 4px;
  border-bottom-color: ${props =>
    props.active ? colors.warning : colors.primary};
`;

export const TextButtonPanelType = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 16px;
  color: ${colors.primaryText};
`;

export const Panel5 = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})`
  flex: 1;
  background-color: ${colors.primary};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  background-color: transparent;
  margin-top: 20px;
`;

export const SendMessageButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  margin-left: 5px;
  align-items: center;
  background-color: ${colors.info};
  border-radius: 200px;
  justify-content: center;
`;

export const MessageContainer = styled.View`
  padding: 5px;
  background-color: ${colors.secondary};
  border-radius: 10px;
  margin: 5px 0;
  width: 100%;
`;

export const MessageAuthor = styled.Text`
  font-family: ${metrics.fontBlack};
  font-size: 14px;
  color: ${colors.warning};
  margin-bottom: 10px;
`;

export const Message = styled.Text`
  font-family: ${metrics.fontNormal};
  font-size: 16px;
  color: ${colors.primaryText};
`;
