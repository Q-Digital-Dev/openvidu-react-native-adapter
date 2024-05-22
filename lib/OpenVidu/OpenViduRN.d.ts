import { OpenVidu, Device, PublisherProperties } from 'openvidu-browser';
import { CustomMediaStreamConstraints } from 'openvidu-browser/lib/OpenViduInternal/Interfaces/Private/CustomMediaStreamConstraints';
/** React Native Imports */
export declare class OpenViduRN extends OpenVidu {
    constructor();
    onOrientationChanged(handler: any): void;
    checkSystemRequirements(): number;
    getDevices(): Promise<Device[]>;
    configureDeviceIdOrScreensharing(myConstraints: CustomMediaStreamConstraints, publisherProperties: PublisherProperties, resolve: any, reject: any): void;
    setVideoSource(myConstraints: CustomMediaStreamConstraints, videoSource: string): void;
}
