// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator();
// const navigator = createStackNavigator({
//   Search: SearchScreen
// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'BusinessSearch'
//   }
// })
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Business Search' }}
      />
      <Stack.Screen
        name="ResultsShow"
        component={ResultsShowScreen}
        options={{ title: 'Results Show Screen' }}
      />
    </Stack.Navigator>
  );
}

// export default createAppContainer(navigator)
export default function App() {
  return <NavigationContainer ref={navigationRef}>{RootStack()}</NavigationContainer>;
}