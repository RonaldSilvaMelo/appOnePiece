import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Luffy from './Luffy';
import Zoro from './Zoro';
import Sanji from './Sanji';
import Nami from './Nami';
import Usopp from './Usopp';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Luffy"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Nami"
        component={Nami}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/namiicon.png')}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sanji"
        component={Sanji}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/sanjiicon.png')}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Luffy"
        component={Luffy}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/luffyicon.png')}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Zoro"
        component={Zoro}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/zoroicon.png')}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Usopp"
        component={Usopp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/usoppicon.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 38,
    height: 38,
  },
});
