
export default class EventBus{
constructor() {
    this.eventCallbacksPairs = [];
}
    subscribe ( eventType, callback ) {
        const eventCallbacksPair = this._findEventCallbacksPair(eventType);

        if(eventCallbacksPair)
            eventCallbacksPair.callbacks.push(callback);
        else
            this.eventCallbacksPairs.push( new this._EventCallbacksPair(eventType, callback) );
    };

    publish ( eventType, args ) {
        const eventCallbacksPair = this._findEventCallbacksPair(eventType);

        if(!eventCallbacksPair) {
            console.error("no subscribers for event " +eventType);
            return;
        }

        eventCallbacksPair.callbacks.forEach( callback => callback(args) );
    };

    _findEventCallbacksPair(eventType) {
        return this.eventCallbacksPairs.find( eventObject => eventObject.eventType === eventType );
    };

    _EventCallbacksPair = class {
        constructor(eventType, callback ) {
            this.eventType = eventType;
            this.callbacks = [callback];
        }
    }
}