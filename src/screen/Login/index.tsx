import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setToken } from '~/store/modules/login/slice';
import {
  Container,
  LogoContainer,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';
import Input from '~/components/TextInput';
import TextLogo from '~/assets/svgs/textLogo.svg';
import ImageLogo from '~/assets/svgs/imageLogo.svg';
import Button from '~/components/Button';

export default function Login() {
  const navigation = useNavigation();
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SafeAreaView>
        <LogoContainer>
          <TextLogo />
          <ImageLogo style={{ marginTop: 20 }} />
        </LogoContainer>
        <Input title="" placeholder="E-mail" style={{ marginBottom: 30 }} />
        <Input title="" placeholder="Password" secureTextEntry />
        <ForgotPasswordButton>
          <ForgotPasswordText>Forgot password?</ForgotPasswordText>
        </ForgotPasswordButton>

        <Button
          width="100%"
          onPress={() => dispatch(setToken({ token: 'MindBox' }))}
          style={{ marginTop: 50 }}
        >
          Login
        </Button>

        <Button
          width="100%"
          onPress={() => navigation.navigate('Register')}
          style={{ marginTop: 10 }}
        >
          Register
        </Button>
      </SafeAreaView>
    </Container>
  );
}
