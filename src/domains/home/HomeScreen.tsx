import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getLogger, useAppContext} from '../../../lib';
import maskCpf from '../../../lib/utils/format/mask-cpf';

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
        <Text>{maskCpf('38340691830')}</Text>
        <View style={{marginTop: 8}}>
          <Button
            title="log message"
            onPress={() => {
              getLogger().log('Testando log');
            }}
          />
        </View>
        <View style={{marginTop: 8}}>
          <Button
            title="warn message"
            onPress={() => {
              getLogger().warn('Testando warn');
            }}
          />
        </View>
        <View style={{marginTop: 8}}>
          <Button
            title="error message"
            onPress={() => {
              getLogger().error(new Error('Testando error'));
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
