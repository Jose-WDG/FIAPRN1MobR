import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Membro } from 'src/routes/logged/drawer/types';

export function MemberDetail({ route }) {
  const membro: Membro = route.params.membro;

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>
      <Image source={{ uri: membro.imagemUrl }} style={styles.image} />
      <Text style={styles.name}>{membro.nome}</Text>
      <Text style={styles.job}>{membro.recentWork}</Text>
      <Text style={styles.bio}>{membro.biography}</Text>
      
      <Text style={styles.sectionTitle}>Tecnologias</Text>
      <View style={styles.techContainer}>
        {membro.technologies.map((tech, index) => (
          <View style={styles.techChip} key={index}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Contatos</Text>
      <View style={styles.contactsContainer}>
        {membro.contacts.map((contact, index) => (
          <TouchableOpacity key={index} style={styles.contact} onPress={() => Linking.openURL(contact.url)}>
            {contact.name === 'LinkedIn' && <FontAwesome5 name="linkedin" size={24} color="blue" />}
            {contact.name === 'Github' && <FontAwesome5 name="github" size={24} color="black" />}
            <Text style={styles.contactText}>{contact.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
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
    marginBottom: 10,
  },
  job: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  bio: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  techChip: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  techText: {
    fontSize: 16,
  },
  contactsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
