import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {colors} from '../utils/colors';

interface TextFieldProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoComplete?: TextInputProps['autoComplete'];
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextField: FC<TextFieldProps> = ({
  label,
  value,
  style,
  onBlur,
  onFocus,
  setValue,
  placeholder,
  secureTextEntry,
  autoComplete,
  containerStyles,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyles]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={setValue}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder || label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginBottom: 12,
    zIndex: 0,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    paddingHorizontal: 7,
    paddingVertical: 12,
    borderRadius: 16,
    fontSize: 16,
    zIndex: 0,
  },
});
