import EventBus from '../../eventBus.js';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
}