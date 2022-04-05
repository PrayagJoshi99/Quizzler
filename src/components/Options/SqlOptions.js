import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from '../../jsonFiles/questions.json';
import {useStateValue} from '../../stateProvider';

const Option = props => {
  const [{score}, dispatch] = useStateValue();
  const updateScore = Score => {
    dispatch({
      type: 'UPDATE_SCORE',
      score: Score,
    });
  };
  console.log(score);
  let correctAnswerIdx = Questions.sql[props.qnIndex].correctIndex;
  return (
    <View>
      <TouchableOpacity
        style={[styles.Option]}
        onPress={() => {
          props.optionIdx === correctAnswerIdx
            ? updateScore(1)
            : updateScore(0);
          if (props.qnIndex + 1 >= Questions.sql.length) {
            console.log('End of Quiz');
            props.navigation.navigate('CongratsScreen');
          } else {
            props.navigation.navigate('SqlQuizScreen', {
              index: props.qnIndex + 1,
            });
          }
        }}>
        <Text style={styles.OptionText}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    marginBottom: 3,
    borderRadius: 25,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bf5745',
  },
  OptionText: {
    fontSize: 26,
    color: 'white',
  },
});
