import Model from './task_list_model.js';
import View from './task_list_view.js';
import Controller from './task_list_controller.js';
import router from "../../router.js";
import EventBus from '../../eventBus.js';

const eventBus = new EventBus();
const taskListInit = () => {
    const model = new Model();
    const view = new View(router, eventBus);
    const controller = new Controller(view, model, eventBus);
    return controller;
};

export default taskListInit;


