import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setKey } from '~/store/modules/teste/slice';
import {
  Container,
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  Panel5,
  ButtonPanelTypeContainer,
  ButtonPanelType,
  TextButtonPanelType,
  UserRigthContainer,
  UserImage,
  UserName,
  UserCenterContainer,
  UserCenterImage,
  UserCenterName,
  MessageContainer,
  MessageAuthor,
  Message,
  InputContainer,
  SendMessageButton,
} from './styles';
import Header from '~/components/Header';
import RowRoom from '~/components/RowRoom';
import Icon from '~/components/Icon';

// @ts-ignore
import cloud from '~/assets/images/cloud.png';
import { Input } from '~/components/TextInput/styles';
import { colors } from '~/styles';

export default function Meeting({ navigation }: { navigation: any }) {
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  const [activePanel, setActivePanel] = useState<'chat' | 'camera'>('chat');

  const renderPanel2 = () => {
    if (activePanel === 'camera')
      return (
        <>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Panel3>
              <UserCenterContainer>
                <UserCenterImage background="orange">
                  <Icon name="account" size={40} />
                </UserCenterImage>
                <UserCenterName>Fernando Federson</UserCenterName>
              </UserCenterContainer>
            </Panel3>
            <Panel4>
              <UserRigthContainer>
                <UserImage background="purple">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Fernando Severino</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="red">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Amanda Lobo</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="green">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Alan Brito</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="blue">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>João Santo</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="orange">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Augusto Souza</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="purple">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Marcos Ferreira</UserName>
              </UserRigthContainer>

              <UserRigthContainer>
                <UserImage background="green">
                  <Icon name="account" size={25} />
                </UserImage>
                <UserName>Pedro Gomes</UserName>
              </UserRigthContainer>
            </Panel4>
          </View>
        </>
      );

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      >
        <Panel5>
          <MessageContainer>
            <MessageAuthor>Fernando Severino</MessageAuthor>
            <Message>Testando chat</Message>
          </MessageContainer>

          <MessageContainer>
            <MessageAuthor>Amanda Lobo</MessageAuthor>
            <Message>Oi gente</Message>
          </MessageContainer>

          <MessageContainer>
            <MessageAuthor>Alan Brito</MessageAuthor>
            <Message>Boa noite!</Message>
          </MessageContainer>
        </Panel5>
        <InputContainer>
          <Input style={{ flex: 1 }} />
          <SendMessageButton>
            <Icon name="send" />
          </SendMessageButton>
        </InputContainer>
      </View>
    );
  };

  return (
    <Container>
      <Header
        leftButton="menu"
        leftButtonFunction={() => navigation.openDrawer()}
        title="Meeting"
      />

      <Panel1>
        <Image source={cloud} style={{ width: '100%' }} resizeMode="contain" />
      </Panel1>

      <Panel2>
        <ButtonPanelTypeContainer>
          <ButtonPanelType
            onPress={() => setActivePanel('chat')}
            active={activePanel === 'chat'}
          >
            <TextButtonPanelType>Chat</TextButtonPanelType>
          </ButtonPanelType>

          <ButtonPanelType
            onPress={() => setActivePanel('camera')}
            active={activePanel === 'camera'}
          >
            <TextButtonPanelType>Camera</TextButtonPanelType>
          </ButtonPanelType>
        </ButtonPanelTypeContainer>
        {renderPanel2()}
      </Panel2>
    </Container>
  );
}
