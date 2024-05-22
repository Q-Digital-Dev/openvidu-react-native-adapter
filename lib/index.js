"use strict";
// tslint:disable-next-line: no-var-requires
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.EventDispatcher = exports.FilterEvent = exports.StreamPropertyChangedEvent = exports.VideoElementEvent = exports.StreamManagerEvent = exports.StreamEvent = exports.SignalEvent = exports.SessionDisconnectedEvent = exports.RecordingEvent = exports.PublisherSpeakingEvent = exports.ConnectionEvent = exports.VideoInsertMode = exports.OpenViduError = exports.LocalRecorderState = exports.Filter = exports.LocalRecorder = exports.Connection = exports.Subscriber = exports.Event = exports.Stream = exports.StreamManager = exports.Publisher = exports.Session = exports.OpenVidu = exports.OpenViduReactNativeAdapter = void 0;
var OpenViduRN_1 = require("./OpenVidu/OpenViduRN");
var SessionRN_1 = require("./OpenVidu/SessionRN");
var PublisherRN_1 = require("./OpenVidu/PublisherRN");
var StreamManagerRN_1 = require("./OpenVidu/StreamManagerRN");
var StreamRN_1 = require("./OpenVidu/StreamRN");
var EventRN_1 = require("./OpenViduInternal/Events/EventRN");
var WebRtcPeerRN_1 = require("./OpenViduInternal/WebRtcPeer/WebRtcPeerRN");
var WebRtcStatsRN_1 = require("./OpenViduInternal/WebRtcStats/WebRtcStatsRN");
var Platform_1 = require("./OpenViduInternal/Utils/Platform");
var OpenVidu = require("openvidu-browser/lib/OpenVidu/OpenVidu");
var Publisher = require("openvidu-browser/lib/OpenVidu/Publisher");
var Session = require("openvidu-browser/lib/OpenVidu/Session");
var StreamManager = require("openvidu-browser/lib/OpenVidu/StreamManager");
var Stream = require("openvidu-browser/lib/OpenVidu/Stream");
var Event = require("openvidu-browser/lib/OpenViduInternal/Events/Event");
var WebRtcPeerOverride = require("openvidu-browser/lib/OpenViduInternal/WebRtcPeer/WebRtcPeer");
var WebRtcStatsOverride = require("openvidu-browser/lib/OpenViduInternal/WebRtcStats/WebRtcStats");
var PlatformOverride = require("openvidu-browser/lib/OpenViduInternal/Utils/Platform");
var packageJson = require('../package.json');
var OpenViduReactNativeAdapter = /** @class */ (function () {
    function OpenViduReactNativeAdapter() {
        console.info('openvidu-react-native-adapter version: ', packageJson.version);
        globalThis.HTMLElement = null;
    }
    OpenViduReactNativeAdapter.prototype.initialize = function () {
        PlatformOverride.PlatformUtils = (function (original) {
            PlatformOverride.PlatformUtils.prototype = Platform_1.PlatformUtilsRN.prototype;
            // tslint:disable-next-line: no-string-literal
            PlatformOverride.PlatformUtils.prototype['getInstance'] = Platform_1.PlatformUtilsRN.prototype['getInstance'];
            return Platform_1.PlatformUtilsRN;
        })(PlatformOverride.PlatformUtils);
        OpenVidu.OpenVidu = (function (original) {
            OpenVidu.OpenVidu.prototype = OpenViduRN_1.OpenViduRN.prototype;
            return OpenViduRN_1.OpenViduRN;
        })(OpenVidu.OpenVidu);
        Publisher.Publisher = (function (original) {
            Publisher.Publisher.prototype.initializeVideoReference = PublisherRN_1.PublisherRN.prototype.initializeVideoReference;
            Publisher.Publisher.prototype.getVideoDimensions = PublisherRN_1.PublisherRN.prototype.getVideoDimensions;
            return PublisherRN_1.PublisherRN;
        })(Publisher.Publisher);
        Session.Session = (function (original) {
            Session.Session.prototype.recvIceCandidate = SessionRN_1.SessionRN.prototype.recvIceCandidate;
            Session.Session.prototype.initializeParams = SessionRN_1.SessionRN.prototype.initializeParams;
            return SessionRN_1.SessionRN;
        })(Session.Session);
        StreamManager.StreamManager = (function (original) {
            StreamManager.StreamManager.prototype.addVideoElement = StreamManagerRN_1.StreamManagerRN.prototype.addVideoElement;
            StreamManager.StreamManager.prototype.addPlayEventToFirstVideo =
                StreamManagerRN_1.StreamManagerRN.prototype.addPlayEventToFirstVideo;
            StreamManager.StreamManager.prototype.createVideo = StreamManagerRN_1.StreamManagerRN.prototype.createVideo;
            StreamManager.StreamManager.prototype.removeSrcObject = StreamManagerRN_1.StreamManagerRN.prototype.removeSrcObject;
            StreamManager.StreamManager.prototype.updateMediaStream = StreamManagerRN_1.StreamManagerRN.prototype.updateMediaStream;
            return StreamManagerRN_1.StreamManagerRN;
        })(StreamManager.StreamManager);
        Stream.Stream = (function (original) {
            Stream.Stream.prototype.remotePeerSuccessfullyEstablished = StreamRN_1.StreamRN.prototype.remotePeerSuccessfullyEstablished;
            return StreamRN_1.StreamRN;
        })(Stream.Stream);
        Event.Event = (function (original) {
            Event.Event.prototype.preventDefault = EventRN_1.EventRN.prototype.preventDefault;
            return EventRN_1.EventRN;
        })(Event.Event);
        WebRtcPeerOverride.WebRtcPeer = (function (original) {
            WebRtcPeerOverride.WebRtcPeer.prototype.deprecatedPeerConnectionTrackApi = WebRtcPeerRN_1.WebRtcPeerRN.prototype.deprecatedPeerConnectionTrackApi;
            WebRtcPeerOverride.WebRtcPeer.prototype.setRemoteDescription = WebRtcPeerRN_1.WebRtcPeerRN.prototype.setRemoteDescription;
            WebRtcPeerOverride.WebRtcPeer.prototype.generateUniqueId = WebRtcPeerRN_1.WebRtcPeerRN.prototype.generateUniqueId;
            return WebRtcPeerRN_1.WebRtcPeerRN;
        })(WebRtcPeerOverride.WebRtcPeer);
        WebRtcStatsOverride.WebRtcStats = (function (original) {
            WebRtcStatsOverride.WebRtcStats.prototype.initWebRtcStats = WebRtcStatsRN_1.WebRtcStatsRN.prototype.initWebRtcStats;
            return WebRtcStatsRN_1.WebRtcStatsRN;
        })(WebRtcStatsOverride.WebRtcStats);
        console.info('OpenVidu React Native Adapter initialized');
    };
    return OpenViduReactNativeAdapter;
}());
exports.OpenViduReactNativeAdapter = OpenViduReactNativeAdapter;
var OpenViduRN_2 = require("./OpenVidu/OpenViduRN");
__createBinding(exports, OpenViduRN_2, "OpenViduRN", "OpenVidu");
var SessionRN_2 = require("./OpenVidu/SessionRN");
__createBinding(exports, SessionRN_2, "SessionRN", "Session");
var PublisherRN_2 = require("./OpenVidu/PublisherRN");
__createBinding(exports, PublisherRN_2, "PublisherRN", "Publisher");
var StreamManagerRN_2 = require("./OpenVidu/StreamManagerRN");
__createBinding(exports, StreamManagerRN_2, "StreamManagerRN", "StreamManager");
var StreamRN_2 = require("./OpenVidu/StreamRN");
__createBinding(exports, StreamRN_2, "StreamRN", "Stream");
var EventRN_2 = require("./OpenViduInternal/Events/EventRN");
__createBinding(exports, EventRN_2, "EventRN", "Event");
var openvidu_browser_1 = require("openvidu-browser");
__createBinding(exports, openvidu_browser_1, "Subscriber");
__createBinding(exports, openvidu_browser_1, "Connection");
__createBinding(exports, openvidu_browser_1, "LocalRecorder");
__createBinding(exports, openvidu_browser_1, "Filter");
__createBinding(exports, openvidu_browser_1, "LocalRecorderState");
__createBinding(exports, openvidu_browser_1, "OpenViduError");
__createBinding(exports, openvidu_browser_1, "VideoInsertMode");
__createBinding(exports, openvidu_browser_1, "ConnectionEvent");
__createBinding(exports, openvidu_browser_1, "PublisherSpeakingEvent");
__createBinding(exports, openvidu_browser_1, "RecordingEvent");
__createBinding(exports, openvidu_browser_1, "SessionDisconnectedEvent");
__createBinding(exports, openvidu_browser_1, "SignalEvent");
__createBinding(exports, openvidu_browser_1, "StreamEvent");
__createBinding(exports, openvidu_browser_1, "StreamManagerEvent");
__createBinding(exports, openvidu_browser_1, "VideoElementEvent");
__createBinding(exports, openvidu_browser_1, "StreamPropertyChangedEvent");
__createBinding(exports, openvidu_browser_1, "FilterEvent");
__createBinding(exports, openvidu_browser_1, "EventDispatcher");
__exportStar(require("react-native-webrtc"), exports);
//# sourceMappingURL=index.js.map