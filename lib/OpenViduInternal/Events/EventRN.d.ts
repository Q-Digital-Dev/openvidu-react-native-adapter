import { Event, Session, StreamManager, Filter } from 'openvidu-browser';
export declare abstract class EventRN extends Event {
    constructor(cancelable: boolean, target: Session | StreamManager | Filter, type: string);
    preventDefault(): void;
    abstract callDefaultBehavior(): any;
}
