import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useGetPostListQuery} from '../services/rtkQuery';
import {selectPostList, useAppSelector} from '../store';
import List from '../components/List';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home: FC = () => {
  const postList = useAppSelector(selectPostList);

  useGetPostListQuery();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <List postList={postList} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});

export default Home;
