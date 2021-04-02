import Model from './reports_model.js';
import View from './reports_view.js';
import Controller from './reports_controller.js';
import router from "../../router.js";
import EventBus from '../../eventBus.js';

const eventBus = new EventBus();

const reportsInit = () => {
    const model = new Model();
    const view = new View(router, eventBus);
    const controller = new Controller(view, model, eventBus);
    return controller;
};

export default reportsInit;
