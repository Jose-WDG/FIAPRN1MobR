import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {$COLORS} from '@utils';

const COORDS = [
  {
    latitude: -23.5640793,
    longitude: -46.6572574,
    title: 'FIAP',
    description: 'Educação que transforma',
  },
  {
    latitude: -23.6102603,
    longitude: -46.6691921,
    title: 'Shopping Ibirapuera',
    description: 'Comprinhas',
  },
  {
    latitude: -22.8473459,
    longitude: -47.0653847,
    title: 'Shopping D. Pedro',
    description: 'Longe Bagarai',
  },
  {
    latitude: -23.5417489,
    longitude: -46.6326566,
    title: 'Shopping D. Pedro',
    description: 'Longe Bagarai',
  },
];

const GOOGLE_MAPS_APIKEY = 'AIzaSyA5u1hrq_s_iChyijheYTrr8hoKJnyrWyQ';

export function Membros() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Membros
      </Text>
    </View>
  );
}
