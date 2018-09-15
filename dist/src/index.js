"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.greeting = props.width;
        return _this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null, this.greeting);
    };
    return App;
}(React.Component));
function run() {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(App, { width: '2323' })), document.getElementById('app'));
}
run();
if (module.hot) {
    module.hot.accept(function () {
        run();
    });
}
// run()
//# sourceMappingURL=index.js.map