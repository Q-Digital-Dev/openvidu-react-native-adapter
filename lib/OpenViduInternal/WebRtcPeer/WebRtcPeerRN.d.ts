import { WebRtcPeer, WebRtcPeerConfiguration } from 'openvidu-browser/lib/OpenViduInternal/WebRtcPeer/WebRtcPeer';
export declare class WebRtcPeerRN extends WebRtcPeer {
    constructor(configuration: WebRtcPeerConfiguration);
    deprecatedPeerConnectionTrackApi(): void;
    setRemoteDescription(sdp: RTCSessionDescriptionInit): Promise<void>;
    generateUniqueId(): string;
}
