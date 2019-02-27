require("@babel/register")(
    {
        "plugins": [
            "@babel/plugin-proposal-class-properties"
        ]

    }
);

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {window} =new JSDOM('<!doctype html><html><body></body></html>');
const{document} = window;

global.window = window;
global.document = document;
global.navigator = {userAgent: 'node.js'};
