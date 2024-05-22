import { Publisher, PublisherProperties, OpenVidu } from 'openvidu-browser';
export declare class PublisherRN extends Publisher {
    constructor(targEl: string | HTMLElement, properties: PublisherProperties, openvidu: OpenVidu);
    initializeVideoReference(mediaStream: MediaStream): void;
    getVideoDimensions(): Promise<{
        width: number;
        height: number;
    }>;
}
