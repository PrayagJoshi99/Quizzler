import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function quizScreen({navigation}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.textstyle}>
        <Text
          style={{
            borderWidth: 1,
            padding: 10,
            backgroundColor: '#9059e3',
            color: 'white',
            fontSize: 20,
            borderRadius: 10,
          }}>
          Categories
        </Text>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <View style={{marginRight: 10}}>
          <Text
            style={styles.options}
            onPress={() => {
              navigation.navigate('QuestionScreen');
            }}>
            React
          </Text>
          <Text style={styles.options}>SQL</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.options}>Python</Text>
          <Text style={styles.options}>Java</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    justifyContent: 'center',
  },
  textstyle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  options: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 20,
    width: 130,
    fontSize: 16,
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'purple',
  },
});
