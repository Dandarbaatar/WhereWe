import { Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBarManager.HEIGHT;
