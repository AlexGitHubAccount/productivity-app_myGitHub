import Model from './settings_model.js';
import View from './settings_view.js';
import Controller from './settings_controller.js';
import router from "../../router.js";
import EventBus from '../../eventBus.js';

const eventBus = new EventBus();

const settingsInit = () => {
    const model = new Model();
    const view = new View(router, eventBus);
    const controller = new Controller(view, model, eventBus);
    return controller;
};

export default settingsInit;
