
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
console.log("Setting up tests")
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);