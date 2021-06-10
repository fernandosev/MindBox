import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setKey } from '~/store/modules/teste/slice';
import { Container, Scroll, ButtonNewRoom } from './styles';
import Header from '~/components/Header';
import RowRoom from '~/components/RowRoom';
import Icon from '~/components/Icon';

export default function Home({ navigation }: { navigation: any }) {
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header
        leftButton="menu"
        leftButtonFunction={() => navigation.openDrawer()}
        title="Your Rooms"
      />

      <Scroll>
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 01"
          color="purple"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 02"
          color="green"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 03"
          color="blue"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 04"
          color="orange"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 05"
          color="gray"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 06"
          color="red"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 07"
          color="purple"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 08"
          color="black"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 09"
          color="pink"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 10"
          color="green"
          numberOfUsers={200}
        />
        <RowRoom
          onPress={() => navigation.navigate('RoomDetails')}
          name="Room 11"
          color="blue"
          numberOfUsers={200}
        />

        <ButtonNewRoom>
          <Icon name="plus" size={40} />
        </ButtonNewRoom>
      </Scroll>
    </Container>
  );
}
