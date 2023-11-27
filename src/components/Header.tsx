import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../utils/colors';

interface Props {
  onCreate: () => void;
}

const Header: FC<Props> = ({onCreate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header of post's list</Text>
      <TouchableOpacity style={styles.button} onPress={onCreate}>
        <Text style={styles.buttonText}>Create new one</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.violet,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
  },
});

export default Header;
