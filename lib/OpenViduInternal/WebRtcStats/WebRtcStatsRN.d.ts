import { WebRtcStats } from 'openvidu-browser/lib/OpenViduInternal/WebRtcStats/WebRtcStats';
import { Stream } from 'openvidu-browser';
export declare class WebRtcStatsRN extends WebRtcStats {
    constructor(stream: Stream);
    initWebRtcStats(): void;
}
