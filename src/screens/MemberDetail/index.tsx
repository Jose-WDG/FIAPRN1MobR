import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export function MemberDetail({ route }) {
//  const {membro: Membro} = route.params.membro;
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: membro.imagemUrl }} style={styles.image} /> */}
      <Text style={styles.name}>José Ramalho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
