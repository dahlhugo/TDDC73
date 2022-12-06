import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import { Pressable, Select } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/card';
import { RepoData, RootStackParamList } from '../utils/types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({ route, navigation }: HomeProps): JSX.Element => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [lang, setLang] = useState('');

  const getData = useCallback(async (language: string) => {
    const lastWeek = moment().subtract('w', 1).format('YYYY-MM-DD');
    let query: string = '';
    if (language !== '') {
      query = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&created:> ${lastWeek}`;
    } else {
      query = `https://api.github.com/search/repositories?q=sort=stars&order=desc&created:> ${lastWeek}`;
    }

    try {
      await fetch(query)
        .then(res => res.json())
        .then(resJson => setData(resJson.items));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  const renderItem = ({ item }) => {

    const repo_data: RepoData = {
      title: item.name,
      description: item.description,
      license: item.license !== null ? item.license.name : 'No License',
      commits: 10,
      branches: 10,
    }

    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Details', { repo: repo_data });
        }}>
        <Card
          name={item.name}
          full_name={item.full_name}
          description={item.description}
          forks_count={item.forks_count}
          stargazers_count={item.stargazers_count}
        />
      </Pressable>
    );
  };

  return (
    !isLoading ?
      <>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
          }}
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
      : <View />
  );
};

export default HomeScreen;

