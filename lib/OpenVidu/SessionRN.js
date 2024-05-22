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
exports.SessionRN = void 0;
var openvidu_browser_1 = require("openvidu-browser");
var SessionDisconnectedEvent_1 = require("openvidu-browser/lib/OpenViduInternal/Events/SessionDisconnectedEvent");
var Platform_1 = require("../OpenViduInternal/Utils/Platform");
var SessionRN = /** @class */ (function (_super) {
    __extends(SessionRN, _super);
    function SessionRN(openvidu) {
        return _super.call(this, openvidu) || this;
    }
    /**
     * @hidden
     */
    SessionRN.prototype.recvIceCandidate = function (msg) {
        var candidate = {
            address: msg.address,
            candidate: msg.candidate,
            component: msg.component,
            foundation: msg.foundation,
            port: msg.port,
            priority: msg.priority,
            protocol: msg.protocol,
            relatedAddress: msg.relatedAddress,
            relatedPort: msg.relatedPort,
            sdpMid: msg.sdpMid,
            sdpMLineIndex: msg.sdpMLineIndex,
            tcpType: msg.tcpType,
            usernameFragment: msg.usernameFragment,
            type: msg.type,
            toJSON: function () {
                return { candidate: msg.candidate };
            }
        };
        this.getConnection(msg.senderConnectionId, 'Connection not found for connectionId ' +
            msg.senderConnectionId +
            ' owning endpoint ' +
            msg.endpointName +
            '. Ice candidate will be ignored: ' +
            candidate)
            .then(function (connection) {
            var stream = connection.stream;
            // React Native Platform, Cleaning iceCandidate
            var candidate2 = new RTCIceCandidate({
                sdpMLineIndex: candidate.sdpMLineIndex,
                sdpMid: candidate.sdpMid,
                candidate: candidate.candidate
            });
            candidate = candidate2;
            stream === null || stream === void 0 ? void 0 : stream.getWebRtcPeer().addIceCandidate(candidate)["catch"](function (error) {
                console.error('Error adding candidate for ' +
                    stream.streamId +
                    ' stream of endpoint ' +
                    msg.endpointName +
                    ': ' +
                    error);
            });
        })["catch"](function (openViduError) {
            console.error(openViduError);
        });
    };
    SessionRN.prototype.initializeParams = function (token) {
        var joinParams = {
            token: !!token ? token : '',
            session: this.sessionId,
            platform: Platform_1.PlatformUtilsRN.getInstance().getDescription(),
            sdkVersion: this.openvidu.libraryVersion,
            metadata: !!this.options.metadata ? this.options.metadata : '',
            secret: this.openvidu.getSecret(),
            recorder: this.openvidu.getRecorder()
        };
        return joinParams;
    };
    SessionRN.prototype.leave = function (forced, reason) {
        var _this = this;
        forced = !!forced;
        this.stopVideoDataIntervals();
        if (!!this.connection) {
            if (!this.connection.disposed && !forced) {
                this.openvidu.sendRequest('leaveRoom', function (error, response) {
                    if (reason == 'networkDisconnect') {
                        return
                    }
                    _this.openvidu.closeWs();
                    _this.ee.emitEvent('fullDisconnected', []);
                });
            }
            else {
                this.openvidu.closeWs();
            }
            this.stopPublisherStream(reason);
            if (!this.connection.disposed) {
                // Make Session object dispatch 'sessionDisconnected' event (if it is not already disposed)
                var sessionDisconnectEvent = new SessionDisconnectedEvent_1.SessionDisconnectedEvent(this, reason);
                this.ee.emitEvent('sessionDisconnected', [sessionDisconnectEvent]);
                sessionDisconnectEvent.callDefaultBehavior();
            }
        }
    };
    SessionRN.prototype.disconnect = function (reason = 'disconnect') {
        this.leave(false, reason);
    };
    return SessionRN;
}(openvidu_browser_1.Session));
exports.SessionRN = SessionRN;
//# sourceMappingURL=SessionRN.js.map