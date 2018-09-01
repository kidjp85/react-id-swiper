import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

configure({ adapter: new Adapter() });
