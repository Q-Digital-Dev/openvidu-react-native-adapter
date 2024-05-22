export declare class OpenViduReactNativeAdapter {
    constructor();
    initialize(): void;
}
export { OpenViduRN as OpenVidu } from './OpenVidu/OpenViduRN';
export { SessionRN as Session } from './OpenVidu/SessionRN';
export { PublisherRN as Publisher } from './OpenVidu/PublisherRN';
export { StreamManagerRN as StreamManager } from './OpenVidu/StreamManagerRN';
export { StreamRN as Stream } from './OpenVidu/StreamRN';
export { EventRN as Event } from './OpenViduInternal/Events/EventRN';
export { Subscriber, Connection, LocalRecorder, Filter, LocalRecorderState, OpenViduError, VideoInsertMode, ConnectionEvent, PublisherSpeakingEvent, RecordingEvent, SessionDisconnectedEvent, SignalEvent, StreamEvent, StreamManagerEvent, VideoElementEvent, StreamPropertyChangedEvent, FilterEvent, Capabilities, Device, EventDispatcher, OpenViduAdvancedConfiguration, PublisherProperties, SignalOptions, StreamManagerVideo, SubscriberProperties, } from 'openvidu-browser';
export * from 'react-native-webrtc';
