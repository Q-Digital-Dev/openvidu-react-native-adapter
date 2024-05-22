import { StreamManager, Stream, StreamManagerVideo } from 'openvidu-browser';
export declare abstract class StreamManagerRN extends StreamManager {
    constructor(stream: Stream, targetElement?: HTMLElement | string);
    addVideoElement(video: HTMLVideoElement): number;
    addPlayEventToFirstVideo(): void;
    createVideo(): any;
    removeSrcObject(streamManagerVideo: StreamManagerVideo): void;
    updateMediaStream(mediaStream: MediaStream): void;
}
