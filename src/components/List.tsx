import React, {FC, useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Post, deleteItem} from '../store';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, StackNavigationProp} from '../navigation/types';
import {useDispatch} from 'react-redux';
import Header from './Header';
import {CreateModal} from './CreateModal';

interface Props {
  postList: Post[];
}

const List: FC<Props> = ({postList}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [modal, setModal] = useState<boolean>(false);

  const goToDetails = useCallback(
    (id: number) => {
      navigation.navigate('Details', {id});
    },
    [navigation],
  );

  const onDelete = useCallback(
    (id: number) => {
      dispatch(deleteItem({id}));
    },
    [dispatch],
  );

  const onCreate = useCallback(() => {
    setModal(true);
  }, []);

  const onClose = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <FlatList<Post>
        data={postList ?? []}
        numColumns={2}
        bounces={false}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header onCreate={onCreate} />}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            key={item.id}
            onPress={() => goToDetails(item.id)}
            onDelete={() => onDelete(item.id)}
            url={item.url}
            title={item.title}
          />
        )}
      />
      {modal && <CreateModal modalVisible={modal} closeModal={onClose} />}
    </>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default List;
