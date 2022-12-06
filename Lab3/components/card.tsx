import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  name: string;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
};

const Card = ({
  name = 'Epic_Repo',
  full_name = 'John-Doe/Epic_Repo',
  description = 'This is a cool projeeect!!!',
  forks_count = 10,
  stargazers_count = 15,
}: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardFullName}>{full_name}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
      <View style={styles.iconRow}>
        <Text style={styles.cardForks}>Forks: {forks_count}</Text>
        <Text style={styles.cardStars}>Stars: {stargazers_count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#424242',
  },

  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardFullName: {
    color: 'lightgrey',
    fontSize: 12,
    marginBottom: 10,
  },

  cardDesc: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },

  iconRow: {
    marginBottom: -10,
    marginRight: -10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  cardForks: {
    color: 'white',
    backgroundColor: '#3e3e3e',
    padding: 4,
  },
  cardStars: {
    color: 'black',
    backgroundColor: '#f6f292',
    padding: 4,
    marginRight: -10,
  },

  select: {
    backgroundColor: 'lightblue',
  },
});

export default Card;