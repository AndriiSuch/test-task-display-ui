import {
  NavigationProp,
  ParamListBase,
  StackActionHelpers,
  StackNavigationState,
} from '@react-navigation/native';

export type StackNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  StackNavigationState<ParamList>
> &
  StackActionHelpers<ParamList>;

export type RootStackParamList = {
  Home: undefined;
  Details: {id: number};
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList = keyof RootStackParamList,
> = StackNavigationProp<RootStackParamList, Screen>;
