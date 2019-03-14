import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM();
(global as any).document = dom.window.document;
(global as any).window = dom.window;
