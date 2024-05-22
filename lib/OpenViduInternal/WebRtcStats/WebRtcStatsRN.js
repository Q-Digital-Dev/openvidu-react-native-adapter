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
exports.WebRtcStatsRN = void 0;
var WebRtcStats_1 = require("openvidu-browser/lib/OpenViduInternal/WebRtcStats/WebRtcStats");
var WebRtcStatsRN = /** @class */ (function (_super) {
    __extends(WebRtcStatsRN, _super);
    function WebRtcStatsRN(stream) {
        return _super.call(this, stream) || this;
    }
    WebRtcStatsRN.prototype.initWebRtcStats = function () {
        console.debug('WebRtc stats not enabled');
    };
    return WebRtcStatsRN;
}(WebRtcStats_1.WebRtcStats));
exports.WebRtcStatsRN = WebRtcStatsRN;
//# sourceMappingURL=WebRtcStatsRN.js.map