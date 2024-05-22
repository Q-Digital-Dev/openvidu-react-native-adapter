import { PlatformUtils } from 'openvidu-browser/lib/OpenViduInternal/Utils/Platform';
export declare class PlatformUtilsRN extends PlatformUtils {
    private version;
    private os;
    constructor();
    static getInstance(): PlatformUtils;
    isChromeBrowser(): boolean;
    /**
     * @hidden
     */
    isSafariBrowser(): boolean;
    /**
     * @hidden
     */
    isChromeMobileBrowser(): boolean;
    /**
     * @hidden
     */
    isFirefoxBrowser(): boolean;
    /**
     * @hidden
     */
    isFirefoxMobileBrowser(): boolean;
    /**
     * @hidden
     */
    isOperaBrowser(): boolean;
    /**
     * @hidden
     */
    isOperaMobileBrowser(): boolean;
    /**
     * @hidden
     */
    isEdgeBrowser(): boolean;
    /**
     * @hidden
     */
    isAndroidBrowser(): boolean;
    /**
     * @hidden
     */
    isElectron(): boolean;
    /**
     * @hidden
     */
    isSamsungBrowser(): boolean;
    /**
     * @hidden
     */
    isIPhoneOrIPad(): boolean;
    /**
     * @hidden
     */
    isIOSWithSafari(): boolean;
    /**
     * @hidden
     */
    isIonicIos(): boolean;
    /**
     * @hidden
     */
    isIonicAndroid(): boolean;
    /**
     * @hidden
     */
    isMobileDevice(): boolean;
    /**
     * @hidden
     */
    isReactNative(): boolean;
    /**
     * @hidden
     */
    canScreenShare(): boolean;
    /**
     * @hidden
     */
    getName(): string;
    getVersion(): string;
    getFamily(): string;
    getDescription(): string;
}
