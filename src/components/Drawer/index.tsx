import React from 'react';
import { setToken } from '~/store/modules/login/slice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  SafeArea,
  Container,
  HeaderButtons,
  HeaderButton,
  HeaderButtonConfig,
  PhotoContainer,
  ProfileImage,
  UserName,
  NoProfileImageIcon,
  NoProfileImageContainer,
  NavigationButton,
  NavigationButtonText,
  Icon,
  Notify,
} from './styles';

export default function Drawer({
  navigation,
  activeItemIndex,
}: {
  navigation: any;
  activeItemIndex: number;
}) {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <Container>
        <HeaderButtons>
          <HeaderButton
            onPress={() => {
              navigation.closeDrawer();
            }}
          >
            <HeaderButtonConfig />
          </HeaderButton>
        </HeaderButtons>
        <PhotoContainer>
          <NoProfileImageContainer>
            <NoProfileImageIcon />
          </NoProfileImageContainer>

          <UserName>Welcome, Fernando Severino</UserName>
        </PhotoContainer>

        <NavigationButton
          active={activeItemIndex === 0}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <NavigationButtonText>Rooms</NavigationButtonText>
          <Icon name="home" />
        </NavigationButton>

        <NavigationButton
          active={false}
          onPress={() => {
            navigation.closeDrawer();
            dispatch(setToken({ token: undefined }));
          }}
          style={{ position: 'absolute', bottom: 0 }}
        >
          <NavigationButtonText>Sair</NavigationButtonText>
          <Icon name="logout" />
        </NavigationButton>
      </Container>
    </SafeArea>
  );
}
