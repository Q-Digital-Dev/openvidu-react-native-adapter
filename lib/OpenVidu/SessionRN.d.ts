import { Session, OpenVidu } from 'openvidu-browser';
export declare class SessionRN extends Session {
    constructor(openvidu: OpenVidu);
    /**
     * @hidden
     */
    disconnect(reason: string = 'disconnect'): void;
    recvIceCandidate(msg: any): void;
    initializeParams(token: string): {
        token: string;
        session: string;
        platform: string;
        sdkVersion: string;
        metadata: string;
        secret: string;
        recorder: boolean;
    };
}
