import React from 'react';
import { ViewStyle } from 'react-native';
import Loading from '~/components/Loading';
import Icon from '~/components/Icon';
import { Container, RoomImage, TextContainer, Title, Subtitle } from './styles';

const RowRoom: React.FC<{
  name: string;
  color: string;
  numberOfUsers: number;
  onPress?: () => void | undefined;
}> = ({ name, color, numberOfUsers, onPress }) => {
  return (
    <Container onPress={onPress}>
      <RoomImage background={color}>
        <Icon name="account-group" size={25} />
      </RoomImage>

      <TextContainer>
        <Title>{name}</Title>
        <Subtitle>Users: {numberOfUsers}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default RowRoom;
