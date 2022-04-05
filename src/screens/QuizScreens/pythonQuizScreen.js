import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Option from '../../components/Options/PythonOptions';
import Questions from '../../jsonFiles/questions.json';

export default function quizScreen({route, navigation}) {
  const {index} = route.params;
  return (
    <View style={styles.mainView}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.python.length}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.python[index].question}</Text>
      {Questions.python[index].answers.map((option, i) => (
        <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    height: '100%',
  },
  questionNo: {
    color: 'red',
    fontSize: 25,
    margin: 20,
  },
  Question: {
    fontSize: 30,
    margin: 25,
  },
  nextButton: {
    height: 50,
    width: '20%',
    backgroundColor: '#3700B3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
});
