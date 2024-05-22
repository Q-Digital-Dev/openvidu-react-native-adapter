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
exports.PlatformUtilsRN = void 0;
var Platform_1 = require("openvidu-browser/lib/OpenViduInternal/Utils/Platform");
var PlatformUtilsRN = /** @class */ (function (_super) {
    __extends(PlatformUtilsRN, _super);
    function PlatformUtilsRN() {
        var _this = _super.call(this) || this;
        _this.version = '';
        _this.os = '';
        try {
            // Getting platform info from react-native module (if it is installed on the app modules)
            var rn = require('react-native');
            _this.os = rn.Platform.OS;
            _this.version = rn.Platform.Version;
        }
        catch (error) {
            console.log("Cannot get platform info from react-native module");
        }
        return _this;
    }
    PlatformUtilsRN.getInstance = function () {
        if (!this.instance) {
            this.instance = new PlatformUtilsRN();
        }
        return Platform_1.PlatformUtils.instance;
    };
    PlatformUtilsRN.prototype.isChromeBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isSafariBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isChromeMobileBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isFirefoxBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isFirefoxMobileBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isOperaBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isOperaMobileBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isEdgeBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isAndroidBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isElectron = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isSamsungBrowser = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isIPhoneOrIPad = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isIOSWithSafari = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isIonicIos = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isIonicAndroid = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isMobileDevice = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.isReactNative = function () {
        return true;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.canScreenShare = function () {
        return false;
    };
    /**
     * @hidden
     */
    PlatformUtilsRN.prototype.getName = function () {
        return 'React Native';
    };
    PlatformUtilsRN.prototype.getVersion = function () {
        return this.version;
    };
    PlatformUtilsRN.prototype.getFamily = function () {
        var capitalizeOS = '';
        if (!!this.os) {
            capitalizeOS = this.os.toUpperCase() === 'IOS' ? 'iOS' : (this.os.charAt(0).toUpperCase() + this.os.slice(1));
        }
        return capitalizeOS;
    };
    PlatformUtilsRN.prototype.getDescription = function () {
        return !!this.getFamily() ? (this.getName() + ' on ' + this.getFamily() + ' ' + this.getVersion()) : this.getName();
    };
    return PlatformUtilsRN;
}(Platform_1.PlatformUtils));
exports.PlatformUtilsRN = PlatformUtilsRN;
//# sourceMappingURL=Platform.js.map