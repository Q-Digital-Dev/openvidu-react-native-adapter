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
exports.StreamRN = void 0;
var openvidu_browser_1 = require("openvidu-browser");
var StreamRN = /** @class */ (function (_super) {
    __extends(StreamRN, _super);
    function StreamRN(session, options) {
        return _super.call(this, session, options) || this;
    }
    StreamRN.prototype.remotePeerSuccessfullyEstablished = function () {
        // REACT NATIVE LIMITATION: must use deprecated WebRTC API
        var pc1 = this.webRtcPeer.pc;
        this.mediaStream = pc1.getRemoteStreams()[0];
        console.debug('Peer remote stream', this.mediaStream);
        if (!!this.mediaStream) {
            if (this.streamManager instanceof openvidu_browser_1.Subscriber) {
                // Apply SubscriberProperties.subscribeToAudio and SubscriberProperties.subscribeToVideo
                if (!!this.mediaStream.getAudioTracks()[0]) {
                    var enabled = !!this.streamManager.properties.subscribeToAudio;
                    this.mediaStream.getAudioTracks()[0].enabled = enabled;
                }
                if (!!this.mediaStream.getVideoTracks()[0]) {
                    var enabled = !!this.streamManager.properties.subscribeToVideo;
                    this.mediaStream.getVideoTracks()[0].enabled = enabled;
                }
            }
            this.updateMediaStreamInVideos();
            // this.initHarkEvents(); // Init hark events for the remote stream
        }
    };
    return StreamRN;
}(openvidu_browser_1.Stream));
exports.StreamRN = StreamRN;
//# sourceMappingURL=StreamRN.js.map