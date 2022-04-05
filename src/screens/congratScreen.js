import React from 'react';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import PieChart from 'react-native-pie-chart';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';
const congratScreen = ({navigation}) => {
  const [{user, score}] = useStateValue();
  const widthAndHeight = 150;
  const series = [score, 10 - score];
  const sliceColor = ['#00FF00'];
  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {user}, You've scored {score} points
      </Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.55}
        coverFill={'#FFF'}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#03c6fc',
          width: '20%',
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('Categories');
        }}>
        <Text style={{fontSize: 18}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default congratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    textAlign: 'center',
  },
});
