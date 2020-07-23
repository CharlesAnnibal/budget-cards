
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';


console.log("Setting up tests")
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);


Enzyme.configure({ adapter: new Adapter() })
