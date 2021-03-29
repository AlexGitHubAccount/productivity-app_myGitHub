
import '../../../assets/less/common/_general.less';
import "../../../assets/less/base/_normalize.less";

import settingsFrame from '../../components/wrapForPage/wrapForPage.hbs';
import './settings.less';
//
import header from '../../components/header/header.hbs';
//
import title from '../../components/title/title.hbs';
import '../../components/title/title.less';
//
import tabs from '../../components/tabs/tabs.hbs';
import '../../components/tabs/tabs.less';

import subtitle from '../../components/subtitle/subtitle.hbs';
import '../../components/subtitle/subtitle.less';

import settings_iteration from './settings-iteration/settings-iteration.hbs';
import './settings-iteration/settings-iteration.less';

import settings_categories_list_item from './settings-categories-list/settings-categories-list.hbs';
import './settings-categories-list/settings-categories-list.less';

import settings_cycle from './settings-cycle/settings-cycle.hbs';
import './settings-cycle/settings-cycle.less';

import containerForButtons from '../../components/container/container.hbs';

import button from '../../components/button/button.hbs';
import '../../components/button/button.less';

import firebase from 'firebase/app';
import '../../firebaseGeneral.js';
// import router from "../../router.js";

export default class View {
    constructor(router, eventBus) {
        // this.router = router;
        this.eventBus = eventBus;
    }
    renderFrameAndHeader = () => {
        const body = document.querySelector('body');
        body.innerHTML = '';
        body.insertAdjacentHTML("afterbegin", settingsFrame({generalWrap:{className:"settings-general-flex-wrapper"}}));
        const generalWrapper = document.querySelector('.settings-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", header({header:{trashItem:false,activeStateFour:"active-state-for-elements-white"}}));
        generalWrapper.insertAdjacentHTML("beforeend", title(
            {h1:{className:"settings-heading-h1 settings-general-flex-wrapper__settings-heading-h1",text:'Settings'}}));
        generalWrapper.insertAdjacentHTML("beforeend",containerForButtons({
            block:{className:"settings-tabs settings-general-flex-wrapper__settings-tabs",tag:"div"}
        }));
        document.querySelector('.settings-tabs').insertAdjacentHTML("beforeend", tabs(
            {tabs:{className_left:"settings-tabs__pomodoros",text_left:"Pomodoros",className_line:"settings-tabs__separate-line",className_right:"settings-tabs__categories",text_right:"Categories",active_stateOne:"active-state-for-elements-white"},twoItems:true}));
        this.renderPomodoros();
        this.launchJsSettings();
    };
    renderPomodoros(){
        const generalWrapper = document.querySelector('.settings-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", subtitle(
            {pomodoros:true,h2:{className:"settings-heading-h2 settings-general-flex-wrapper__settings-heading-h2",text:"Pomodoros settings"}}));
        generalWrapper.insertAdjacentHTML("beforeend", settings_iteration(
            {items:["settings-time-iteration__item settings-time-iteration__item_orange",
                    "settings-time-iteration__item settings-time-iteration__item_aqua",
                    "settings-time-iteration__item settings-time-iteration__item_blue",
                    "settings-time-iteration__item settings-time-iteration__item_purple"],
                title_className:["settings-time-iteration__text",
                    "settings-time-iteration__text settings-time-iteration__text_size_l",
                    "settings-time-iteration__text settings-time-iteration__text_size_m",
                    "settings-time-iteration__text"],
                title_text:["WORK TIME","WORK ITERATION","SHORT BREAK","LONG BREAK"],
                range:["Please select a value between 15 and 25",
                    "Please select a value between 2 and 5",
                    "Please select a value between 3 and 5",
                    "Please select a value between 15 and 30"],
                range_text:["minutes","iterations","minutes","minutes"]
            }));
        generalWrapper.insertAdjacentHTML("beforeend", settings_cycle());
        generalWrapper.insertAdjacentHTML("beforeend", containerForButtons({
            block:{className:"pomodoros-buttons settings-general-flex-wrapper__pomodoros-buttons",tag:"div"}
        }));
        const wrapButtons = document.querySelector( '.settings-general-flex-wrapper__pomodoros-buttons');
        wrapButtons.insertAdjacentHTML("beforeend",button({button:{className:"pomodoros-buttons__go-to-tasks",text:"Go to tasks"}}));
        wrapButtons.insertAdjacentHTML("beforeend",button({button:{className:"pomodoros-buttons__save",text:"Save"}}));
        const saveButton = document.querySelector('.pomodoros-buttons__save');
        saveButton.addEventListener('click', event => {
            // this.eventBus.publish('save');
        });
        this.pressBtnGoToTasks();
    }
    renderCategories(){
        const generalWrapper = document.querySelector('.settings-general-flex-wrapper');
        generalWrapper.insertAdjacentHTML("beforeend", subtitle(
            {categories:true,h2:{className:"settings-heading-h2 settings-general-flex-wrapper__settings-heading-h2",text:"Categories"}}));
        generalWrapper.insertAdjacentHTML("beforeend", settings_categories_list_item(
            {"categories-list":["Work","Education","Hobby","Sport","Other"]}));
        generalWrapper.insertAdjacentHTML("beforeend", button(
            {button:{className:"settings-button-go-to-tasks settings-general-flex-wrapper__settings-button-go-to-tasks",text:"Go to tasks"}})
                );
        this.pressBtnGoToTasks();
    }
    pressBtnGoToTasks () {
        document.querySelector('.pomodoros-buttons__go-to-tasks').addEventListener('click', () => {
            document.location.href = "http://localhost:3000/task_list";
        });
    };
    pressBtnSave () {
    }
    launchJsSettings(){
        //Firebase block
firebase.database().ref('settings/settingsIteration').set({
    "defaultValueWorkTime":25,
    "currentValueWorkTime":25,
    "defaultValueWorkIteration":5,
    "currentValueWorkIteration":5,
    "defaultValueShortBreak":5,
    "currentValueShortBreak":5,
    "defaultValueLongBreak":30,
    "currentValueLongBreak":30,
});

function readDataFromStorage (valueFromStorage){
    let result;
    firebase.database().ref('settings/settingsIteration').child(valueFromStorage).on('value', snap => {
        result = snap.val();
    });
    return result;
}
function updateDataFromStorage (fields){
    let valuesFromFields = [];
    fields.forEach(item=>valuesFromFields.push(+item.textContent));
    for (let i=0; i<4;i++){
        firebase.database().ref('settings/settingsIteration').update({
            "currentValueWorkTime":valuesFromFields[0],
            "currentValueWorkIteration":valuesFromFields[1],
            "currentValueShortBreak":valuesFromFields[2],
            "currentValueLongBreak":valuesFromFields[3],
        })
    }
}
///////////////////////////////
// For your cycle
// your circle
class SettingsBlock {
    constructor(item) {
        this.field = item.field;
        this.inputValue = Number(this.field.textContent);
        this.step = item.step;
        this.minValue = item.minValue;
        this.maxValue = item.maxValue;
        this.minus = item.minus;
        this.plus = item.plus;
        this.defaultValue = item.defaultValue;

        this.minus.addEventListener('click', () => {
            if (this.inputValue <= this.minValue + this.step) {
                this.minus.classList.add("disabled-buttons");
            }

            if (this.inputValue >= this.maxValue) {
                this.plus.classList.remove("disabled-buttons");
            }

            if (this.inputValue <= this.minValue) {
                this.field.textContent = this.inputValue;
            } else {
                this.inputValue = +this.inputValue - this.step;
                this.field.textContent = this.inputValue;
            }
        });

        this.plus.addEventListener('click', () => {

            if (this.inputValue >= this.minValue) {
                this.minus.classList.remove("disabled-buttons");
            }
            if (this.inputValue + this.step >= this.maxValue) {
                this.plus.classList.add("disabled-buttons");
            }

            if (this.inputValue >= this.maxValue) {
                this.inputValue = this.maxValue;
                this.field.textContent = this.inputValue;
            } else {
                this.inputValue = +this.inputValue + this.step;
                this.field.textContent = this.inputValue;
            }
        });
    }

    refreshValue() {
        this.inputValue = this.defaultValue;
        this.field.textContent = this.defaultValue;
    }
}

let fields = document.querySelectorAll('.settings-time-iteration__input');
let minusButtons = document.querySelectorAll('.icon-minus-for-js');
let plusButtons = document.querySelectorAll('.icon-plus-for-js');

let arrayWithItems = [
    new SettingsBlock({
        field: fields[0],
        step: 5,
        minValue: 15,
        maxValue: 25,
        minus: minusButtons[0],
        plus: plusButtons[0],
        defaultValue: readDataFromStorage('defaultValueWorkTime'),
    }),
    new SettingsBlock({
        field: fields[1],
        step: 1,
        minValue: 2,
        maxValue: 5,
        minus: minusButtons[1],
        plus: plusButtons[1],
        defaultValue: readDataFromStorage('defaultValueWorkIteration'),
    }),
    new SettingsBlock({
        field: fields[2],
        step: 1,
        minValue: 3,
        maxValue: 5,
        minus: minusButtons[2],
        plus: plusButtons[2],
        defaultValue: readDataFromStorage('defaultValueShortBreak'),
    }),
    new SettingsBlock({
        field: fields[3],
        step: 5,
        minValue: 15,
        maxValue: 30,
        minus: minusButtons[3],
        plus: plusButtons[3],
        defaultValue: readDataFromStorage('defaultValueLongBreak'),
    }),
];

let totalSumOfMinutes = 0;
let totalSumFirstCycle = 0;
let totalSumOfHoursMinutes = 0;
let minutesPerHour = 60;
let oneHundredPercent = 100;
let oneHalf = 0.5;
let oneHalfHour = 30;

let wrapperYourCycleMain = document.querySelector('.your-cycle__graph');
let wrapperYourCycleBottomMobile = document.querySelector('.your-cycle__graph-block-bottom-points-mobile');
let wrapperYourCycleMainBottomTabletDesktop = document.querySelector('.your-cycle__graph-block-bottom-points-tablet-desktop');

let workTimeBlock = arrayWithItems[0];
let workIterationBlock = arrayWithItems[1];
let shortBreakBlock = arrayWithItems[2];
let longBreakBlock = arrayWithItems[3];

const sumAllMinutes = () => {
    totalSumOfMinutes = (workTimeBlock.inputValue * workIterationBlock.inputValue)
        + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
        + longBreakBlock.inputValue +
        (workTimeBlock.inputValue * workIterationBlock.inputValue)
        + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1)); //320
};

const sumFirstCycle = () => {
    totalSumFirstCycle = (workTimeBlock.inputValue * workIterationBlock.inputValue)
        + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
        + longBreakBlock.inputValue;
    let wholeHours = Math.trunc(totalSumFirstCycle / minutesPerHour);
    let wholeMinutes = totalSumFirstCycle % minutesPerHour;
    totalSumFirstCycle = `First cycle:${wholeHours}h ${wholeMinutes}m`;
};

const sumHoursMinutes = () => {
    totalSumOfHoursMinutes = (workTimeBlock.inputValue * workIterationBlock.inputValue)
        + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
        + longBreakBlock.inputValue +
        (workTimeBlock.inputValue * workIterationBlock.inputValue)
        + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1)); //320
    let wholeHours = Math.trunc(totalSumOfHoursMinutes / minutesPerHour);
    let wholeMinutes = totalSumOfHoursMinutes % minutesPerHour;
    totalSumOfHoursMinutes = `${wholeHours}h ${wholeMinutes}m`;
};

const initialize = () => {
    arrayWithItems.forEach((item, index, array) => {
        item.refreshValue();
    });
    sumAllMinutes();
    sumFirstCycle();
    sumHoursMinutes();
    drawCircle();
    createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
};

initialize();

minusButtons.forEach((item) => {
    item.addEventListener('click', () => {
        sumAllMinutes();
        sumFirstCycle();
        sumHoursMinutes();
        drawCircle();
        createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
        updateDataFromStorage(fields);
    });
});

plusButtons.forEach((item, index, array) => {
    item.addEventListener('click', () => {
        sumAllMinutes();
        sumFirstCycle();
        sumHoursMinutes();
        drawCircle();
        createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
        updateDataFromStorage(fields);
    });
});

// Draw line with breaks
function drawCircle() {

    function createShortBreaks() {
        for (let i = 0; i < workIterationBlock.inputValue - 1; i++) {
            let shortBreakElem = document.createElement('div');
            shortBreakElem.classList.add('your-cycle__graph-short-break');
            shortBreakElem.style.width = shortBreakBlock.inputValue / onePercentOfCycle + '%';
            wrapperYourCycleMain.append(shortBreakElem);
        }
    }

    wrapperYourCycleMain.innerHTML = '';
    let longBreakElem = document.createElement('div');
    let onePercentOfCycle = totalSumOfMinutes / oneHundredPercent; //3.2 default
    longBreakElem.classList.add('your-cycle__graph-long-break');
    longBreakElem.style.position = 'relative';
    longBreakElem.style.width = longBreakBlock.inputValue / onePercentOfCycle + '%';

    //Top middle Point First cycle
    let middleTimePoint = document.createElement('div');
    middleTimePoint.className = 'your-cycle-time your-cycle-time_first-cycle';
    longBreakElem.append(middleTimePoint);
    middleTimePoint.textContent = totalSumFirstCycle;

    createShortBreaks();
    wrapperYourCycleMain.append(longBreakElem);
    createShortBreaks();
}

//Draw points and time text
function createCirclesAndText(firstCycleMin, allCycleMin, wrapBlock) {

    function createBottomTimeTextDesktop(wrapperYourCycleMain) {
        let textForBottomPoints = oneHalfHour / allCycleMin * oneHundredPercent;
        let timeGap = textForBottomPoints;
        let numberOfMarks = Math.floor(allCycleMin / oneHalfHour);
        let timeForMarks = oneHalf;
        let space = oneHalf;

        for (let i = 0; i < numberOfMarks; i++) {
            let elem = document.createElement('div');
            elem.className = 'your-cycle-time your-cycle-time_down';
            if (i === 0) {
                elem.textContent = '30m';
            } else if (i % 2 === 0) {
                elem.textContent = Math.trunc(timeForMarks) + 'h 30m';
            } else {
                elem.textContent = timeForMarks + 'h';
            }
            timeForMarks = timeForMarks + space;
            elem.style.left = timeGap - oneHalf + '%';
            elem.style.position = 'absolute';
            timeGap = textForBottomPoints + timeGap;
            wrapperYourCycleMain.append(elem);
        }
    }

    function createBottomTimeTextMobile(wrapperYourCycleMain) {
        let textForBottomPoints = minutesPerHour / allCycleMin * oneHundredPercent;
        let timeGap = textForBottomPoints;
        let numberOfMarks = Math.floor(allCycleMin / minutesPerHour);
        let timeForMarks = 1;
        let space = 1;

        for (let i = 0; i < numberOfMarks; i++) {
            let elem = document.createElement('div');
            elem.className = 'your-cycle-time your-cycle-time_down';
            elem.textContent = Math.trunc(timeForMarks) + 'h';

            timeForMarks = timeForMarks + space;
            elem.style.left = timeGap - oneHalf + '%';
            elem.style.position = 'absolute';
            timeGap = textForBottomPoints + timeGap;
            wrapperYourCycleMain.append(elem);
        }
    }

    wrapperYourCycleBottomMobile.innerHTML = '';
    wrapperYourCycleMainBottomTabletDesktop.innerHTML = '';
    //Top left Upper Time
    let startTimePoint = document.createElement('div');
    startTimePoint.className = 'your-cycle-time your-cycle-time_up';
    wrapBlock.append(startTimePoint);
    startTimePoint.textContent = 0 + 'h';

    //Top right Upper Time
    let endTimePoint = document.createElement('div');
    endTimePoint.className = 'your-cycle-time your-cycle-time_up-right';
    wrapBlock.append(endTimePoint);
    endTimePoint.textContent = firstCycleMin;

    //Create two bottom blocks with text and points
    createBottomTimeTextMobile(wrapperYourCycleBottomMobile);
    createBottomTimeTextDesktop(wrapperYourCycleMainBottomTabletDesktop);
}
    }
}
