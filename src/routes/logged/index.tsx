import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoggedDrawer} from './drawer';
import type {ILoggedStack} from './types';
import {MemberDetail} from '@screens';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {$COLORS} from '@utils';

const Stack = createStackNavigator<ILoggedStack>();

const stackOptions = {
  headerTintColor: $COLORS.white,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: $COLORS.primary,
  },
  headerShown: false,
  animationEnabled: false,
};

export function LoggedStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="Drawer" component={LoggedDrawer} />
      <Stack.Screen
        name="MemberDetail"
        component={MemberDetail}
        options={{
          headerShown: true,
          title: 'Detalhes',
          headerTitle: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
}
