import '../../../assets/less/common/_general.less';
import "../../../assets/less/base/_normalize.less";

import taskListFrame from '../../components/wrapForPage/wrapForPage.hbs';
import './task_list.less';

import container from '../../components/container/container.hbs';

import header from "../../components/header/header.hbs";

import stickyHeader from "../task_list/task_list-sticky-header/task_list-sticky-header.hbs";

import title from "../../components/title/title.hbs";
import '../../components/title/title.less';

import tabs from '../../components/tabs/tabs.hbs';
import '../../components/tabs/tabs.less';

import task_block from './task_list_task_block/task_list_task_block.hbs';

import task_list from './task_list_daily_global/task_list_daily_global.hbs';
import './task_list_daily_global/task_list_daily_global.less';

import globalTabsLeftBtn from './task_list_global_list_title_left_btn/task_list_global_list_title_left_btn.hbs';

import entry_point from '../task_list/global_entry_point/global_entry_point.hbs';
import '../task_list/global_entry_point/global_entry_point.less';

import modal_add_edit from '../task_list/modal_add_edit/modal_add_edit.hbs';
import '../task_list/modal_add_edit/modal_add_edit.less';

import modal_remove from '../task_list/modal_remove/modal_remove.hbs';
import '../task_list/modal_remove/modal_remove.less';

import notification_message from '../task_list/notification_message/notification_message.hbs';
import '../task_list/notification_message/notification_message.less';

import excellent_done from '../task_list/task_list_excellent_done/task_list_excellent_done.hbs';
import '../task_list/task_list_excellent_done/task_list_excellent_done.less';

import no_tasks from '../task_list/task_list_no_tasks/no_tasks.hbs';
import '../task_list/task_list_no_tasks/no_tasks.less';

import add_first_task from '../task_list/task_list_add_first_task/task_list_add_first_task.hbs';
import '../task_list/task_list_add_first_task/task_list_add_first_task.less';

import move_to_daily_list from '../task_list/task_list_move_to_daily_list/task_list_move_to_daily_list.hbs';
import '../task_list/task_list_move_to_daily_list/task_list_move_to_daily_list.less';

// import router from "../../router.js";

import showStickyHeader from "./task_list-sticky-header";

export default class View {
    constructor(router,eventBus) {
        // this.router = router;
        this.eventBus = eventBus;
    }
    renderFrameAndHeader () {
            const body = document.querySelector('body');
            body.innerHTML = '';
            body.insertAdjacentHTML("afterbegin", taskListFrame({generalWrap:{className:"task-list-general-flex-wrapper"}}));
            body.insertAdjacentHTML("afterbegin", stickyHeader());
            const generalWrapper = document.querySelector(".task-list-general-flex-wrapper");
            generalWrapper.insertAdjacentHTML("beforeend", header({header:{trashItem:true,activeStateTwo:"active-state-for-elements-white"}}));
            generalWrapper.insertAdjacentHTML("beforeend", title(
                {h1:{className:"task-list-heading-h1 task-list-general-flex-wrapper__task-list-heading-h1",text:"Daily task list", iconAdd:true}}));
    }
    renderMainContent() {
        const generalWrapper = document.querySelector(".task-list-general-flex-wrapper");
        generalWrapper.insertAdjacentHTML("beforeend", `<div class="daily-task-list-tabs task-list-general-flex-wrapper__daily-task-list-tabs">
<div class="daily-task-list-tabs__left"></div><div class="daily-task-list-tabs__right"></div>
</div>`);
        document.querySelector('.daily-task-list-tabs__left').insertAdjacentHTML("beforeend", tabs({tabs:{className_left:"daily-task-list-tabs__left-elem",text_left:"Select All",className_line:"daily-task-list-tabs__separate-line",className_right:"daily-task-list-tabs__right-elem",text_right:"Deselect All"},twoItems:true}));
        document.querySelector('.daily-task-list-tabs__right').insertAdjacentHTML("beforeend", tabs({tabs:{className_left:"daily-task-list-tabs__left-elem",text_left:"To Do",className_line:"daily-task-list-tabs__separate-line",className_right:"daily-task-list-tabs__right-elem",text_right:"Done",active_stateOne:"active-state-for-elements-white"},twoItems:true}));
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:'div',className:"daily-task-list-content task-list-general-flex-wrapper__daily-tasks-list"}}));
        document.querySelector(".daily-task-list-content").insertAdjacentHTML("beforeend", container({block:{tag:'ul',className:"tasks-list"}}));
        document.querySelector(".daily-task-list-content > .tasks-list").insertAdjacentHTML("beforeend", task_block({block:{title:"tasks-list__item_sport",pCenterColorClassName:"tasks-list__item-center-left-top_high",iconEditCenter:true,iconTrashCenter:true,titleRightClassName:"tasks-list__item-right_high"}}));
        document.querySelector(".daily-task-list-content > .tasks-list").insertAdjacentHTML("beforeend", task_block({block:{title:"tasks-list__item_hobby",titleDone:"tasks-list__item_done",pCenterColorClassName:"tasks-list__item-center-left-top_urgent", pCenterTextCrossOutClassName:"tasks-list__item-center-left-top_done",titleRightClassName:"tasks-list__item-right_urgent"}}));
        generalWrapper.insertAdjacentHTML("beforeend", `<div class="global-task-list-title-tabs task-list-general-flex-wrapper__global-task-list-title-tabs">
       <div class="global-task-list-title-tabs__left"></div>
       <div class="global-task-list-title-tabs__right task-list-general-flex-wrapper__global-task-list-tittle-tabs-right"></div></div>`);
        document.querySelector('.global-task-list-title-tabs__left').insertAdjacentHTML("beforeend", globalTabsLeftBtn({arrowRight:true}));
        document.querySelector('.global-task-list-title-tabs__right').insertAdjacentHTML("beforeend", tabs({global_list_tabs:{className:"global-task-list-title-tabs__elem",textOne:"All",textTwo:"Urgent",textThree:"High",textFour:"Middle",textFive:"Low",className_line:"global-task-list-title-tabs__separate-line",active_stateOne:"active-state-for-elements-white"},fiveItems:true}));
        generalWrapper.insertAdjacentHTML("beforeend", container({block:{tag:'div',className:"global-task-list-content task-list-general-flex-wrapper__global-task-list-content"}}));
        document.querySelector('.global-task-list-content').insertAdjacentHTML("beforeend", task_list({category:{wrapTitleClassname:"global-task-list-content-category_work",
                circleClassname:"global-task-list-content-category__title_circle_work",
                circleTextClassname:"global-task-list-content-category__title_text_work",
                circleText:"WORK",}}));
        document.querySelector(".global-task-list-content-category").insertAdjacentHTML("beforeend", task_block({block:{title:"tasks-list__item_work",pCenterColorClassName:"tasks-list__item-center-left-top_high",iconArrowUpCenter:true,iconEditCenter:true,iconTrashCenter:true,titleRightClassName:"tasks-list__item-right_high"}}));
        showStickyHeader();
    }
    renderTaskListPage(){
        this.renderFrameAndHeader();
        this.renderMainContent();
        this.showNotificationMessage();
        this.pressBtnGoTimer();
    }
    initFirstEntrance(){
        const body = document.querySelector('body');
        body.insertAdjacentHTML("afterbegin", taskListFrame({generalWrap:{className:"task-list-general-flex-wrapper"}}));
        body.insertAdjacentHTML("afterbegin", stickyHeader());
        const generalWrapper = document.querySelector(".task-list-general-flex-wrapper");
        generalWrapper.insertAdjacentHTML("beforeend", header({header:{activeStateTwo:"active-state-for-elements-white"}}));
        generalWrapper.insertAdjacentHTML("beforeend", title(
            {h1:{className:"task-list-heading-h1 task-list-general-flex-wrapper__task-list-heading-h1",text:"Daily task list", iconAdd:true}}));
        document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", entry_point());
        this.pressBtnSkip();
        this.pressBtnGoToSettings();
    }
    renderAddModal(){
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", container({block:{tag:"div",className:"page"}}));
        document.querySelector('.page').insertAdjacentHTML("beforeend", modal_add_edit({
            modal:{partOfClass:"add",title:"Add"}}));
    }
    renderEditModal(){
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", container({block:{tag:"div",className:"page"}}));
        document.querySelector('.page').insertAdjacentHTML("beforeend", modal_add_edit({
            modal:{partOfClass:"edit",title:"Edit"}}));
    }
    renderRemoveModal(){
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", container({block:{tag:"div",className:"page"}}));
        document.querySelector('.page').insertAdjacentHTML("beforeend", modal_remove());
    }
    showExcellentTasksDone(){
        document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", excellent_done());
    }
    showNoTasks(){
        this.renderFrameAndHeader();
    document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", no_tasks());
    }
    showAddFirstTask(){
        this.renderFrameAndHeader();
        document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", add_first_task());
    }
    showMoveToDailyTask(){
        document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", move_to_daily_list());
    }
    showNotificationMessage(){
        document.querySelector(".task-list-general-flex-wrapper").insertAdjacentHTML("beforeend", container({block:{tag:"div",className:"block-with-notification task-list-general-flex-wrapper__block-with-notification"}}));
        document.querySelector(".block-with-notification").insertAdjacentHTML("beforeend", notification_message({block:{noCategory:true}}));
    }
    pressBtnSkip () {
        document.querySelector('.first-time-visit-page__buttons-skip').addEventListener('click', () => {
            document.location.href = "http://localhost:3000/task_list";
        });
    };
    pressBtnGoToSettings () {
        document.querySelector('.first-time-visit-page__buttons-go-to-settings').addEventListener('click', () => {
            document.location.href = "http://localhost:3000/settings";
        });
    };
    pressBtnGoTimer () {
        document.querySelectorAll('.tasks-list__item-right').forEach((elem)=>{
            elem.addEventListener('click', () => {
                document.location.href = "http://localhost:3000/timer";
            });
        });
    };
}
