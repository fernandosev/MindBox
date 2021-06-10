import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
  background-color: ${colors.primary};
`;

export const LogoContainer = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  margin: 60px 0;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  background-color: transparent;
  margin-top: 5px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.primaryText};
`;
