"use strict";
// tslint:disable: no-string-literal
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OpenViduRN = void 0;
var openvidu_browser_1 = require("openvidu-browser");
/** React Native Imports */
var react_native_webrtc_1 = require("react-native-webrtc");
//var base_64_1 = require("base-64");
/** React Native Imports */
var OpenViduRN = /** @class */ (function (_super) {
    __extends(OpenViduRN, _super);
    function OpenViduRN() {
        var _this = _super.call(this) || this;
        //window.btoa = base_64_1.encode;
        window['RTCPeerConnection'] = react_native_webrtc_1.RTCPeerConnection;
        window['RTCIceCandidate'] = react_native_webrtc_1.RTCIceCandidate;
        window['RTCSessionDescription'] = react_native_webrtc_1.RTCSessionDescription;
        window['MediaStream'] = react_native_webrtc_1.MediaStream;
        window['MediaStreamTrack'] = react_native_webrtc_1.MediaStreamTrack;
        window.navigator['mediaDevices'] = react_native_webrtc_1.mediaDevices;
        return _this;
    }
    OpenViduRN.prototype.onOrientationChanged = function (handler) {
        try {
            // Getting Dimensions from react-native module (if it is installed on the app modules)
            // This import cannot be inside of the constructor because the the constructor calls
            // to onOrientationChanged method and this throw an exception because dimensions object is not initialized.
            var dimensions = require('react-native').Dimensions;
            dimensions.addEventListener('change', handler);
        }
        catch (_a) {
            console.warn('react-native dependecy not found. onOrientationChanged method will not work');
        }
    };
    OpenViduRN.prototype.checkSystemRequirements = function () {
        return 1;
    };
    OpenViduRN.prototype.getDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var devicesInfos, devices_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devicesInfos = _a.sent();
                        devices_1 = [];
                        devicesInfos.forEach(function (deviceInfo) {
                            if (deviceInfo.kind === 'audioinput') {
                                devices_1.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: deviceInfo.label
                                });
                            }
                            else if (deviceInfo.kind === 'videoinput') {
                                devices_1.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: deviceInfo.deviceId === '0' ? 'Back Camera' : 'Front Camera'
                                });
                            }
                        });
                        resolve(devices_1);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error getting devices', error_1);
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenViduRN.prototype.configureDeviceIdOrScreensharing = function (myConstraints, publisherProperties, resolve, reject) {
        var audioSource = publisherProperties.audioSource;
        if (typeof audioSource === 'string') {
            myConstraints.constraints.audio = { deviceId: { exact: audioSource } };
        }
        if (typeof myConstraints.constraints.video === 'boolean') {
            console.log('The publisher does not have video');
            return;
        }
        // Setting user mode by default
        myConstraints.constraints.video['facingMode'] = 'user';
    };
    OpenViduRN.prototype.setVideoSource = function (myConstraints, videoSource) {
        if (!myConstraints.constraints.video) {
            myConstraints.constraints.video = {};
        }
        myConstraints.constraints.video['facingMode'] =
            videoSource === '0' ? 'environment' : 'user';
    };
    return OpenViduRN;
}(openvidu_browser_1.OpenVidu));
exports.OpenViduRN = OpenViduRN;
//# sourceMappingURL=OpenViduRN.js.map