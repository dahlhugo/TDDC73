/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, PushNotificationIOS, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TOKEN } from '@env';
import moment from 'moment';
import { NativeBaseProvider, Select } from 'native-base';


const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [lang, setLang] = useState('');

  const renderItem = ({ item }) => (
    <Card
      name={item.name}
      full_name={item.full_name}
      description={item.description}
      forks_count={item.forks_count}
      stargazers_count={item.stargazers_count}
    />
  );

  const getData = useCallback(async (language: string) => {
    if (lang === '') {
      try {
        const lastWeek = moment().subtract('w', 1).format('YYYY-MM-DD');

        await fetch(
          `https://api.github.com/search/repositories?q=sort=stars&order=desc&created:> ${lastWeek}`,
          { headers: { Authorization: 'Bearer ' + TOKEN } },
        )
          .then(res => res.json())
          .then(resJson => setData(resJson.items));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const lastWeek = moment().subtract('w', 1).format('YYYY-MM-DD');

        await fetch(
          `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&created:> ${lastWeek}`,
          { headers: { Authorization: 'Bearer ' + TOKEN } },
        )
          .then(res => res.json())
          .then(resJson => setData(resJson.items));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const useGetRepos = (language: string) => {
    useEffect(() => {
      setLoading(true);
      getData(language).catch(console.error);
      setLoading(false);
    }, [lang]);
  };

  useGetRepos(lang);
  console.log(lang);
  return (
    <NativeBaseProvider>
      {!isLoading ? (
        <>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={2}
            removeClippedSubviews={true}
          />
          <Select
            placeholder="Language"
            onValueChange={itemValue => setLang(itemValue)}
            selectedValue={lang}
            defaultValue={lang}
            mt={1}>
            <Select.Item label="Top Overall" value="" />
            <Select.Item label="Javascript" value="javascript" />
            <Select.Item label="Typescript" value="typescript" />
            <Select.Item label="C" value="c" />
            <Select.Item label="Java" value="java" />
            <Select.Item label="C++" value="c++" />
            <Select.Item label="Swift" value="swift" />
            <Select.Item label="C#" value="c#" />
          </Select>
        </>
      ) : (
        <View></View>
      )}
    </NativeBaseProvider>
  );
};

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
    width: '95%',
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

export default App;
