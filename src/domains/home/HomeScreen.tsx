import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../../lib';

const styles = StyleSheet.create({
  context: {
    flex: 1,
  },
});

const HomeScreen: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.context}>
      <ScrollView>
        <Text>Dados do login:</Text>
        <Text>{JSON.stringify(appContext.login, null, 2)}</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
