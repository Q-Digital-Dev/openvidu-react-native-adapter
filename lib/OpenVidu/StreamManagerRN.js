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
exports.StreamManagerRN = void 0;
var openvidu_browser_1 = require("openvidu-browser");
var uuid_1 = require("uuid");
var StreamManagerRN = /** @class */ (function (_super) {
    __extends(StreamManagerRN, _super);
    function StreamManagerRN(stream, targetElement) {
        return _super.call(this, stream, targetElement) || this;
    }
    StreamManagerRN.prototype.addVideoElement = function (video) {
        if (!!this.stream.getMediaStream() && !!video) {
            video.setNativeProps({ streamURL: this.stream.getMediaStream().toURL() });
        }
        this.pushNewStreamManagerVideo({
            video: video,
            id: (0, uuid_1.v4)(),
            canplayListenerAdded: false
        });
        console.info('New video element associated to ', this);
        return 1;
    };
    StreamManagerRN.prototype.addPlayEventToFirstVideo = function () {
        // Do nothing
    };
    StreamManagerRN.prototype.createVideo = function () {
        return undefined;
    };
    StreamManagerRN.prototype.removeSrcObject = function (streamManagerVideo) {
        if (!!streamManagerVideo.video) {
            streamManagerVideo.video.setNativeProps({ streamURL: null });
        }
    };
    StreamManagerRN.prototype.updateMediaStream = function (mediaStream) {
        this.videos.forEach(function (streamManagerVideo) {
            streamManagerVideo.video.srcObject = mediaStream;
            streamManagerVideo.video.setNativeProps({ streamURL: mediaStream.toURL() });
        });
    };
    return StreamManagerRN;
}(openvidu_browser_1.StreamManager));
exports.StreamManagerRN = StreamManagerRN;
//# sourceMappingURL=StreamManagerRN.js.map