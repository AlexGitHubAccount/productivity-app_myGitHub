
import '../../../assets/less/common/_general.less';
import "../../../assets/less/base/_normalize.less";

import reportsFrame from '../../components/wrapForPage/wrapForPage.hbs';
import './reports.less';
//
import header from '../../components/header/header.hbs';
//
import title from '../../components/title/title.hbs';
import '../../components/title/title.less';

import container from '../../components/container/container.hbs';

import tabs from "../../components/tabs/tabs.hbs";
import "../../components/tabs/tabs.less";

import reports_graph from '../reports/reports_graph/reports_graph.hbs';
import '../reports/reports_graph/reports_graph.less';

// import router from "../../router.js";

export default class View {
    constructor(router, eventBus) {
        // this.router = router;
        this.eventBus = eventBus;
    }
    renderFrameAndHeader () {
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", reportsFrame({generalWrap:{className:"reports-general-flex-wrapper"}}));
        const generalWrapper = document.querySelector('.reports-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", header({header:{trashItem:false,activeStateThree:"active-state-for-elements-white"}}));
        generalWrapper.insertAdjacentHTML("beforeend", title({h1:{className:"reports-heading-h1 reports-general-flex-wrapper__reports-heading-h1",text:"Report"}}));
        generalWrapper.insertAdjacentHTML("beforeend",container({
            block:{className:"reports-tabs reports-general-flex-wrapper__reports-tabs",tag:"div"}
        }));
        document.querySelector('.reports-general-flex-wrapper__reports-tabs').insertAdjacentHTML("beforeend", tabs(
            {reports:{className:"reports-tabs__word",active_stateOne:"active-state-for-elements-white",textOne:"Day",className_line:"reports-tabs__separate-line",textTwo:"Week",textThree:"Month"},threeItems:true}));
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"reports-graph reports-general-flex-wrapper__reports-graph"}}));
        document.querySelector(".reports-graph").insertAdjacentHTML("beforeend", reports_graph({arrowRightHidden:"reports-graph__arrow-right_hidden"}));
        generalWrapper.insertAdjacentHTML("beforeend",container({
            block:{className:"reports-tabs reports-general-flex-wrapper__reports-tabs-pomodoros-tasks",tag:"div"}
        }));
        document.querySelector('.reports-general-flex-wrapper__reports-tabs-pomodoros-tasks').insertAdjacentHTML("beforeend", tabs(
            {tabs:{className_left:"reports-tabs__word reports-tabs__word_pomodoros",active_stateOne:"active-state-for-elements-white",text_left:"Pomodoros",className_line:"reports-tabs__separate-line",className_right:"reports-tabs__word reports-tabs__word_pomodoros",text_right:"Tasks"},twoItems:true}));
    }
    renderPomodorosDay() {
    }
    renderPomodorosWeek(){
    }
    renderPomodorosMonth(){
    }
    renderTasksDay(){
    }
    renderTasksWeek(){
    }
    renderTasksMonth(){
    }
}
