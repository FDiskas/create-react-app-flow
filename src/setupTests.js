import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),

  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
