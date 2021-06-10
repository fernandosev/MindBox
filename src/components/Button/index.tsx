import React from 'react';
import { ViewStyle } from 'react-native';
import Loading from '~/components/Loading';
import { Container, Text } from './styles';

const Button: React.FC<{
  children: Element;
  width?: number | string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => any;
  style?: ViewStyle;
}> = ({
  children,
  width = 170,
  style,
  loading = false,
  onPress,
  disabled = false,
  ...rest
}) => {
  return (
    <Container
      disabled={disabled}
      style={style}
      width={width}
      onPress={!disabled ? onPress : undefined}
      {...rest}
    >
      {loading ? <Loading /> : <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
