import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
const { JSDOM } = require('jsdom')


const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
  .filter(prop => typeof target[prop] === 'undefined')
  .reduce((result, prop) => ({
    ...result,
    [prop]: Object.getOwnPropertyDescriptor(src, prop),
  }), {})
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

configure({ adapter: new Adapter() })
copyProps(window, global)