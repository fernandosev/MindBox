import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setKey } from '~/store/modules/teste/slice';
import { Container, Scroll, LogoContainer, Title } from './styles';
import Input from '~/components/TextInput';
import Logo from '~/assets/svgs/logoLight.svg';
import ImageLogo from '~/assets/svgs/imageLogo.svg';
import Button from '~/components/Button';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SafeAreaView style={{ backgroundColor: 'transparent' }}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </SafeAreaView>
      <Scroll>
        <SafeAreaView style={{ backgroundColor: 'transparent' }}>
          <Title>Forgot Password</Title>
          <Input
            title=""
            placeholder="Your email"
            style={{ marginBottom: 30 }}
          />

          <Button
            width="100%"
            onPress={() => 'Register'}
            style={{ marginTop: 50 }}
          >
            Send
          </Button>
        </SafeAreaView>
      </Scroll>
    </Container>
  );
}
