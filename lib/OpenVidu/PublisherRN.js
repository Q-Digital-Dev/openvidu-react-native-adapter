"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PublisherRN = void 0;
var openvidu_browser_1 = require("openvidu-browser");
var PublisherRN = /** @class */ (function (_super) {
    __extends(PublisherRN, _super);
    function PublisherRN(targEl, properties, openvidu) {
        return _super.call(this, targEl, properties, openvidu) || this;
    }
    PublisherRN.prototype.initializeVideoReference = function (mediaStream) {
        this.stream.setMediaStream(mediaStream);
        if (!!this.firstVideoElement) {
            this.createVideoElement(this.firstVideoElement.targetElement, this.properties.insertMode);
        }
    };
    PublisherRN.prototype.getVideoDimensions = function () {
        // react-native-webrtc does not implements getSettings
        // https://github.com/react-native-webrtc/react-native-webrtc/issues/814
        // mediaStream.getVideoTracks()[0].getSettings();
        var _this = this;
        return new Promise(function (resolve, reject) {
            var constraints = _this.stream.getMediaStream().getVideoTracks()[0].getConstraints();
            resolve({ width: constraints.width || 480, height: constraints.height || 640 });
        });
    };
    return PublisherRN;
}(openvidu_browser_1.Publisher));
exports.PublisherRN = PublisherRN;
//# sourceMappingURL=PublisherRN.js.map