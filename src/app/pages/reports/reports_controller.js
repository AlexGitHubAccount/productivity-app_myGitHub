// import EventBus from '../../eventBus.js';
// const eventBus = new EventBus();

export default class Controller {
    constructor(view, model, eventBus) {
        this.view = view;
        this.model = model;
        this.eventBus = eventBus;
    }
}