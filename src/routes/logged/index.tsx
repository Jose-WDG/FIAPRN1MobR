import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoggedDrawer} from './drawer';
import type {ILoggedStack} from './types';
import {Membros} from '../../screens/Members';
import {MemberDetail} from '../../screens/MemberDetail';

const Stack = createStackNavigator<ILoggedStack>();

export function LoggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Drawer" component={LoggedDrawer} />
      <Stack.Screen name="Membros" component={Membros} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} />
    </Stack.Navigator>
  );
}
