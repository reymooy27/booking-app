import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Tickets from './screens/Tickets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from './screens/Message';
import Account from './screens/Account';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
const HomeStackScreen = createStackNavigator();
const TicketStackScreen = createStackNavigator();
const MessageStackScreen = createStackNavigator();
const AccountStackScreen = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled: false}}>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeTab} />
        <Stack.Screen name="Tickets" component={Tickets} />
      </Stack.Navigator>
      <StatusBar backgroundColor="#172132"/>
    </NavigationContainer>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Ticket') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        }
          else if (route.name === 'Message') {
          iconName = focused ? 'document-text' : 'document-text-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#C4C4C5',
        style:{backgroundColor: '#2E394F', borderTopWidth: 0, elevation: 0, height: 70, paddingHorizontal: 20},
        tabStyle:{marginTop: 10},
        labelStyle:{margin: 10}
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Ticket" component={TicketStack} />
      <Tab.Screen name="Message" component={MessageStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen name="Home" component={Home} />
    </HomeStackScreen.Navigator>
  );
};
const TicketStack = () => {
  return (
    <TicketStackScreen.Navigator>
      <TicketStackScreen.Screen name="Tickets" component={Tickets} />
    </TicketStackScreen.Navigator>
  );
};
const MessageStack = () => {
  return (
    <MessageStackScreen.Navigator>
      <MessageStackScreen.Screen name="Message" component={Message} />
    </MessageStackScreen.Navigator>
  );
};
const AccountStack = () => {
  return (
    <AccountStackScreen.Navigator>
      <AccountStackScreen.Screen name="Account" component={Account} />
    </AccountStackScreen.Navigator>
  );
};

export default App;
