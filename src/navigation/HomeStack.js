import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeScreen from '../screens/welcomeScreen';
import quizScreen from '../screens/QuizScreens/quizScreen';
import PythonScreen from '../screens/QuizScreens/pythonQuizScreen';
import SqlScreen from '../screens/QuizScreens/sqlQuizScreen';
import JavaScreen from '../screens/QuizScreens/javaQuizScreen';
import {StateProvider} from '../stateProvider';
import reducer, {initialState} from '../reducer';
import congratScreen from '../screens/congratScreen';
import Login from '../screens/Login/Login';
import Categories from '../screens/Categories/Categories';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={welcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QuestionScreen"
            component={quizScreen}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />
          <Stack.Screen
            name="PythonQuizScreen"
            component={PythonScreen}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />
          <Stack.Screen
            name="SqlQuizScreen"
            component={SqlScreen}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />
          <Stack.Screen
            name="JavaQuizScreen"
            component={JavaScreen}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />
          <Stack.Screen
            name="CongratsScreen"
            component={congratScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
