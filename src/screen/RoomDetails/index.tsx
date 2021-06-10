import React, { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setToken } from '~/store/modules/login/slice';
import {
  Container,
  RoomImage,
  Title,
  Panel1,
  Panel2,
  Scroll,
  Subtitle,
  ImageContainer,
  Text,
  MeetingButton,
} from './styles';
import Input from '~/components/TextInput';
import TextLogo from '~/assets/svgs/textLogo.svg';
import ImageLogo from '~/assets/svgs/imageLogo.svg';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import moment from 'moment';

export default function RoomDetails() {
  const navigation = useNavigation();
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1 }}>
        <ImageContainer>
          <RoomImage background={'purple'}>
            <Icon name="account-group" size={50} />
          </RoomImage>
          <Title>Room 1</Title>
        </ImageContainer>

        <Panel1>
          <Subtitle>Users</Subtitle>
          <Scroll>
            <Text style={{ marginBottom: 10 }}>
              - Fernando Severino Almeida
            </Text>
            <Text style={{ marginBottom: 10 }}>- Amanda Lobo Gomes</Text>
            <Text style={{ marginBottom: 10 }}>- Alan Brito Barros</Text>
          </Scroll>
        </Panel1>

        <Panel2>
          <Subtitle>Meetings</Subtitle>
          <Scroll>
            <MeetingButton onPress={() => navigation.navigate('Meeting')}>
              <Text>Meeting 01 - {moment().format('llll')}</Text>
              <Icon name="arrow-right" size={20} />
            </MeetingButton>

            <MeetingButton onPress={() => navigation.navigate('Meeting')}>
              <Text>Meeting 02 - {moment().format('llll')}</Text>
              <Icon name="arrow-right" size={20} />
            </MeetingButton>

            <MeetingButton onPress={() => navigation.navigate('Meeting')}>
              <Text>Meeting 03 - {moment().format('llll')}</Text>
              <Icon name="arrow-right" size={20} />
            </MeetingButton>

            <MeetingButton onPress={() => navigation.navigate('Meeting')}>
              <Text>Meeting 04 - {moment().format('llll')}</Text>
              <Icon name="arrow-right" size={20} />
            </MeetingButton>
          </Scroll>
        </Panel2>
      </SafeAreaView>
    </Container>
  );
}
