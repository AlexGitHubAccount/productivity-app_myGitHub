import Model from './timer_model.js';
import View from './timer_view.js';
import Controller from './timer_controller.js';
import router from "../../router.js";
import EventBus from '../../eventBus.js';

const eventBus = new EventBus();

const timerInit = () => {
    const model = new Model();
    const view = new View(router, eventBus);
    const controller = new Controller(view, model, eventBus);
    return controller;
};

export default timerInit;
