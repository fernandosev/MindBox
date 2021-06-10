import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
  background-color: transparent;
`;

export const LogoContainer = styled.View`
  background-color: ${colors.primary};
  margin-left: 20px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  background-color: transparent;
  margin-top: 5px;
`;

export const Title = styled.Text`
  color: ${colors.primaryText};
  font-size: 34px;
  margin-bottom: 40px;
  text-align: center;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.primaryText};
`;
