import React, {memo, useCallback, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../utils/colors';
import {Post, createPost} from '../store';
import {TextField} from './TextField';
interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}
export const CreateModal: React.FC<Props> = ({modalVisible, closeModal}) => {
  const [title, setTitle] = useState<string>('');

  const dispatch = useDispatch();

  const onCreatePost = useCallback(() => {
    const payload: Post = {
      albumId: new Date().getTime(),
      id: new Date().getTime(),
      url: '',
      thumbnailUrl: '',
      title,
    };
    dispatch(createPost(payload));
    closeModal();
  }, [title, dispatch]);

  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <View style={styles.background} />
      <View style={styles.modalWrapper}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Create</Text>
          <TextField
            label="Enter description here..."
            value={title}
            setValue={setTitle}
          />
          <TouchableOpacity onPress={onCreatePost} style={styles.button}>
            <Text>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: colors.black,
    opacity: 0.5,
    zIndex: 20,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 25,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 2,
    paddingVertical: 30,
    paddingHorizontal: 20,
    minHeight: 150,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.violet,
  },
});
