
import '../../../assets/less/common/_general.less';
import "../../../assets/less/base/_normalize.less";

import timerFrame from '../../components/wrapForPage/wrapForPage.hbs';
import './timer.less';
//
import header from '../../components/header/header.hbs';
//
import title from '../../components/title/title.hbs';
import '../../components/title/title.less';

import subtitle from '../../components/subtitle/subtitle.hbs';
import '../../components/subtitle/subtitle.less';

import container from '../../components/container/container.hbs';

import button from '../../components/button/button.hbs';
import '../../components/button/button.less';

import tomato_iteration from '../timer/timer_tomato_iteraction/timer_tomato_iteraction.hbs';
import '../timer/timer_tomato_iteraction/timer_tomato_iteraction.less';

import timer_tracker from '../timer/timer_tracker/timer_tracker.hbs';
import '../timer/timer_tracker/timer_tracker.less';

// import router from "../../router.js";

export default class View {
    constructor(router, eventBus) {
        // this.router = router;
        this.eventBus = eventBus;
    }
    renderFrameAndHeader () {
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", timerFrame({generalWrap:{className:"timer-general-flex-wrapper"}}));
        const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", header({header:{trashItem:false}}));
        generalWrapper.insertAdjacentHTML("beforeend", title({h1:{className:"timer-heading-h1 timer-general-flex-wrapper__timer-heading-h1",text:"1. Creating a New Design"}}));
        generalWrapper.insertAdjacentHTML("beforeend", subtitle({timerPage:true,h2:{className:"timer-heading-h2 timer-general-flex-wrapper__timer-heading-h2",text:"Lorem ipsum dolor sit amet consectetur adipiscing"}}));
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"tomato-iteration timer-general-flex-wrapper__tomato-iteration"}}));
        document.querySelector(".tomato-iteration").insertAdjacentHTML("beforeend", tomato_iteration());
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"timer-tracker timer-general-flex-wrapper__timer-tracker"}}));
        document.querySelector(".timer-tracker").insertAdjacentHTML("beforeend", timer_tracker({arrowRightHidden:"timer-tracker__arrow-right_hidden"}));
        generalWrapper.insertAdjacentHTML("beforeend", button({button:{className:"timer-button-start_size_s timer-general-flex-wrapper__timer-button-start",text:"Start"}}));
    }
    renderTimerInProgressMainPart () {
    const body = document.querySelector('body');
    body.insertAdjacentHTML("afterbegin", timerFrame({generalWrap:{className:"timer-general-flex-wrapper"}}));
    const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
    generalWrapper.insertAdjacentHTML("beforeend", title({h1:{className:"timer-heading-h1 timer-general-flex-wrapper__timer-heading-h1 timer-general-flex-wrapper__timer-heading-h1_without_header",text:"1. Creating a New Design"}}));
    generalWrapper.insertAdjacentHTML("beforeend", subtitle({timerPage:true,h2:{className:"timer-heading-h2 timer-general-flex-wrapper__timer-heading-h2",text:"Lorem ipsum dolor sit amet consectetur adipiscing"}}));
    generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"tomato-iteration timer-general-flex-wrapper__tomato-iteration"}}));
    document.querySelector(".tomato-iteration").insertAdjacentHTML("beforeend", tomato_iteration());
    generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"timer-tracker timer-general-flex-wrapper__timer-tracker"}}));
    document.querySelector(".timer-tracker").insertAdjacentHTML("beforeend", timer_tracker({arrowLeftHidden:"timer-tracker__arrow-left_hidden", arrowRightHidden:"timer-tracker__arrow-right_hidden"}));
    this.renderTimerInProgressBtnFailFinish();
    }
    renderTimerInProgressBtnFailFinish(){
        const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"timer-buttons timer-general-flex-wrapper__timer-buttons"}}));
        document.querySelector(".timer-buttons").insertAdjacentHTML("beforeend", button({button:{className:"timer-buttons__fail-pomodora",text:"Fail Pomodora"}}));
        document.querySelector(".timer-buttons").insertAdjacentHTML("beforeend", button({button:{className:"timer-buttons__finish-pomodora",text:"Finish Pomodora"}}));
    }
    renderTimerInProgressBtnStartFinish(){
        const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"timer-buttons timer-general-flex-wrapper__timer-buttons"}}));
        document.querySelector(".timer-buttons").insertAdjacentHTML("beforeend", button({button:{className:"timer-buttons__start-pomodora",text:"Start Pomodora"}}));
        document.querySelector(".timer-buttons").insertAdjacentHTML("beforeend", button({button:{className:"timer-buttons__finish-task",text:"Finish Task"}}));
    }
    renderTimerInProgressBtnStart(){
        const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", button({button:{className:"timer-button-start_size_l timer-general-flex-wrapper__timer-button-start",text:"Start Pomodora"}}));
    }
    renderTimerCompleted(){
        const body = document.querySelector('body');
        body.insertAdjacentHTML("afterbegin", timerFrame({generalWrap:{className:"timer-general-flex-wrapper"}}));
        const generalWrapper = document.querySelector('.timer-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", header({header:{trashItem:false}}));
        generalWrapper.insertAdjacentHTML("beforeend", title({h1:{className:"timer-heading-h1 timer-general-flex-wrapper__timer-heading-h1",text:"1. Creating a New Design"}}));
        generalWrapper.insertAdjacentHTML("beforeend", subtitle({timerPage:true,h2:{className:"timer-heading-h2 timer-general-flex-wrapper__timer-heading-h2",text:"Lorem ipsum dolor sit amet consectetur adipiscing"}}));
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"tomato-iteration timer-general-flex-wrapper__tomato-iteration"}}));
        document.querySelector(".tomato-iteration").insertAdjacentHTML("beforeend", tomato_iteration());
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"timer-tracker timer-general-flex-wrapper__timer-tracker"}}));
        document.querySelector(".timer-tracker").insertAdjacentHTML("beforeend", timer_tracker());
    }

}
