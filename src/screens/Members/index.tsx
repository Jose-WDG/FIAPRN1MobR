import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  membroContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  membroImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  membroNome: {
    fontSize: 18,
  },
});

type Contact = {
  name: string;
  url: string;
};

type Membro = {
  id: number;
  nome: string;
  imagemUrl: string;
  technologies: string[];
  biography: string;
  recentWork: string;
  contacts: Contact[];
};

const members: Membro[] = [
  {
    id: 1,
    nome: `José Ramalho`,
    imagemUrl: `https://avatars.githubusercontent.com/u/42223303?v=4`,
    technologies: ['Android', 'Java', 'Kotlin'],
    biography:
      'Desenvolvedor mobile altamente experiente, com uma sólida formação em análise e desenvolvimento de sistemas e 3 anos de experiência em desenvolvimento de aplicativos móveis. Meu foco principal é trabalhar com grandes corporações financeiras, criando aplicativos inovadores e funcionais que atendam às necessidades específicas de seus clientes. Com um bom conhecimento em tecnologias móveis, sou capaz de criar aplicativos móveis robustos e escaláveis. Conhecimentos em iOS e Android, estou sempre procurando maneiras de usar as tecnologias mais recentes para aprimorar os projetos. Excelente comunicação e trabalho em estreita colaboração com minha equipe para garantir máxima qualidade. Comprometido em entregar projetos dentro do prazo. Quando não estou trabalhando, gosto de jogar video game e adoro viajar para novos lugares. Estou sempre procurando maneiras de crescer na minha carreira como desenvolvedor, buscando aprimorar minhas habilidades e aprender novas tecnologias para fazer projetos de qualidade.',
    recentWork: 'BRQ digital solutions',
    contacts: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jos%C3%A9-ramalho-8a1a07159/',
      },
      {
        name: 'Github',
        url: 'https://github.com/Jose-WDG',
      },
      {
        name: 'BRQ digital solutions',
        url: 'https://www.trakto.io',
      },
    ],
  },
  {
    id: 2,
    nome: `Felipe Araújo`,
    imagemUrl: `https://avatars.githubusercontent.com/u/37382504?v=4`,
    technologies: ['Swift', 'Dart', 'Flutter'],
    biography:
      'Sou desenvolvedor mobile a 6 anos e comecei trabalhando com o Ionic na sua primeira versão com javascript em 2017 e fiquei 2 anos trabalhando com o Ionic em angular ate a versão 4 do Ionic. Trabalho com Flutter atualmente na Trakto uma startup de design que esta a muitos anos no mercado, mas ja trabalhei com Swift, Java Android. Já trabalhei em inumeros projetos de backend, front e mobile. Tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs. Sou apaixonado por eletronica e iots e tenho varios projetos usando arduino.',
    recentWork: 'Trakto',
    contacts: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/',
      },
      {
        name: 'Github',
        url: 'https://github.com/FelipeCostaAraujo',
      },
      {
        name: 'Trakto',
        url: 'https://www.trakto.io',
      },
    ],
  },
];

export function Membros({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participantes do Grupo</Text>
      <FlatList
        data={members}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.membroContainer}
            onPress={() => navigation.navigate('MemberDetail', {membro: item})}>
            <Image source={{uri: item.imagemUrl}} style={styles.membroImage} />
            <Text style={styles.membroNome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
