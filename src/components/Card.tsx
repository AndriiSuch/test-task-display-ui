import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Post} from '../store';
import {colors} from '../utils/colors';

interface Props extends Pick<Post, 'title' | 'url'> {
  onPress: () => void;
  onDelete: () => void;
}

const Card: FC<Props> = ({url, title, onPress, onDelete}) => {
  return (
    <View style={styles.container}>
      {url ? (
        <Image style={styles.image} source={{uri: url}} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text>Placeholder</Text>
        </View>
      )}

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.details}>
        <Text style={styles.detailsText}>Details {'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.details}>
        <Text style={styles.detailsText}>Delete Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },
  placeholder: {
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  details: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Card;
