import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.SafeAreaView<{
  background: string | undefined;
}>`
  background-color: ${props => props.background || colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${metrics.baseMargin}px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${metrics.fontBold};
  color: ${colors.primaryText};
`;

export const IconTouchableArea = styled.TouchableOpacity`
  border-radius: ${metrics.baseRadiusHigh}px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: transparent;
`;

export const LeftIconsContainer = styled.View`
  width: 70px;
  align-items: flex-start;
  margin-left: 10px;
  background-color: transparent;
  padding-bottom: 10px;
`;

export const RightIconsContainer = styled.View`
  width: 70px;
  flex-direction: row;
  justify-content: flex-end;
  background-color: transparent;
`;

export const EmptyContainer = styled.View`
  width: 70px;
  margin-right: 10px;
`;
