import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),

  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
