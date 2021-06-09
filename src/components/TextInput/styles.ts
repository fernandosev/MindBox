import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Title = styled.Text`
  color: ${colors.secondaryText};
  margin-bottom: 5px;
`;

export const Input = styled.TextInput<{ borderColor?: string | undefined }>`
  height: 55px;
  background-color: ${colors.white};
  color: ${colors.secondaryText};
  font-size: ${metrics.fontSizeLow}px;
  border-radius: ${metrics.baseRadiusLow}px;
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
  border-color: ${props =>
    props.borderColor ? props.borderColor : 'transparent'};
  border-width: 2px;
`;

export const SmallTextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const SmallText = styled.Text`
  font-size: ${metrics.fontSizeLow}px;
  color: ${colors.secondaryText};
`;

export const Labels = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
