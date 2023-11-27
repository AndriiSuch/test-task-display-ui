import React, {FC, useCallback} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {selectPostItem, setPostItem, useAppSelector} from '../store';
import {useGetPostByIdQuery} from '../services/rtkQuery';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

const Details: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const id =
    route.params && 'id' in route.params ? (route.params.id as number) : 0;
  const post = useAppSelector(selectPostItem);

  console.log(post, 'postpostpost');

  const goBack = useCallback(() => {
    navigation.goBack();
    // dispatch(setPostItem(null));
  }, [navigation]);

  const {isLoading} = useGetPostByIdQuery({id});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={goBack}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
      </View>
      {isLoading && !post ? <Text>Loading...</Text> : null}
      {post && !isLoading ? (
        <View style={styles.content}>
          <Image style={styles.img} source={{uri: post.url}} />
          <Text style={{color: 'black'}}>{post.title}</Text>
        </View>
      ) : (
        <Text>Data not found</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  goBack: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default Details;
