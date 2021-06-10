import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';

export const SafeArea = styled.SafeAreaView`
  width: 280px;
  height: 100%;
  background-color: ${colors.secondary};
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
})`
  flex: 1;
  padding: 15px;
  background-color: transparent;
`;

export const HeaderButtons = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 500px;
  background-color: ${`${colors.white}22`};
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonConfig = styled(FontAwesome).attrs(props => {
  return {
    size: 20,
    name: 'cog',
    color: colors.white,
  };
})``;

export const PhotoContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${colors.secondary};
`;

export const UserName = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
  margin: 15px 0;
`;

export const ProfileImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 500px;
`;

export const NoProfileImageContainer = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 500px;
  background-color: ${`${colors.white}AA`};
  align-items: center;
  justify-content: center;
`;

export const NoProfileImageIcon = styled(MaterialCommunityIcons).attrs({
  size: 100,
  name: 'account',
  color: `${colors.white}66`,
})``;

export const NavigationButton = styled.TouchableOpacity<{ active: boolean }>`
  width: 100%;
  background-color: ${props =>
    props.active ? colors.primary : `${colors.white}11`};
  height: 60px;
  border-radius: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
`;

export const NavigationButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => {
  return {
    size: 28,
    color: colors.white,
  };
})``;

export const Notify = styled.View`
  position: absolute;
  top: 2px;
  right: 0px;
  width: 12px;
  height: 12px;
  background-color: ${colors.primary};
  border-radius: 500px;
`;
