import React, {useCallback} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../../lib';
import {LoginType} from '../../../lib/types';
import {useNativeStackNavigation} from '../../hooks/useNavigation';

const styles = StyleSheet.create({
  context: {
    flex: 1,
  },
});

const MOCKED_USER: LoginType = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  loggedUser: {
    id: 'a1b2c3',
    name: 'Jhon Doe',
    email: 'jhon.doe@mail.com',
  },
  roles: [],
};

const LoginScreen: React.FC = () => {
  const navigation = useNativeStackNavigation();
  const {setLogin} = useAppContext();

  const handlePress = useCallback(() => {
    setLogin(MOCKED_USER);
    navigation.replace('Home');
  }, [navigation, setLogin]);

  return (
    <View style={styles.context}>
      <ScrollView>
        <Text>Click para entrar:</Text>
        <Button title="Entrar" onPress={handlePress} />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
