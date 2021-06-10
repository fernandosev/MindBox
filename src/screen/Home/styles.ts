import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
})`
  flex: 1;
  background-color: transparent;
`;

export const ButtonNewRoom = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.primary};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;
