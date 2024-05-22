import { Stream, Session } from 'openvidu-browser';
import { InboundStreamOptions } from 'openvidu-browser/lib/OpenViduInternal/Interfaces/Private/InboundStreamOptions';
import { OutboundStreamOptions } from 'openvidu-browser/lib/OpenViduInternal/Interfaces/Private/OutboundStreamOptions';
export declare class StreamRN extends Stream {
    constructor(session: Session, options: InboundStreamOptions | OutboundStreamOptions | {});
    remotePeerSuccessfullyEstablished(): void;
}
