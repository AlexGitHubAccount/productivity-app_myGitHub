// require('./settings.less');
//////////////////////////////////test code not important handlebars
// let button = require('../../components/button/button.hbs');
// document.body.insertAdjacentHTML("afterbegin", button({button:{className:'lalala', text:'test',}}));
// document.body.insertAdjacentHTML("afterbegin", button(
//     {
//         writers: ['10','20','30','40']
//     }
// ));

// import button from '../../components/button/button.hbs';
// console.log(button({className:'lalala', text:'test'}));
////////////////////////////////////////////////////////////////////////////////////////////////
// //For sticky header
// let stickyHeader = document.querySelector('.header-sticky');
// let breakPointMobile = 520;
// let breakPointTablet = 768;
// let clientWidth = document.documentElement.clientWidth;
//
// window.addEventListener('scroll', function () {
//     if (clientWidth >= breakPointMobile) {
//         if (pageYOffset >= 72) {
//             stickyHeader.classList.add('show-block');
//         } else {
//             stickyHeader.classList.remove('show-block');
//         }
//     } else if (clientWidth >= breakPointTablet) {
//         if (pageYOffset >= 66) {
//             stickyHeader.classList.add('show-block');
//         } else {
//             stickyHeader.classList.remove('show-block');
//         }
//     }
// });
// /////////////////////////////////////////////////////////////////////////

//Firebase block
// import firebase from 'firebase/app';
// import '../../firebaseGeneral.js';
// firebase.database().ref('settings/settingsIteration').set({
//     "defaultValueWorkTime":25,
//     "currentValueWorkTime":25,
//     "defaultValueWorkIteration":5,
//     "currentValueWorkIteration":5,
//     "defaultValueShortBreak":5,
//     "currentValueShortBreak":5,
//     "defaultValueLongBreak":30,
//     "currentValueLongBreak":30,
// });
//
// function readDataFromStorage (valueFromStorage){
//     let result;
//     firebase.database().ref('settings/settingsIteration').child(valueFromStorage).on('value', snap => {
//         result = snap.val();
//     });
//     return result;
// }
// function updateDataFromStorage (fields){
//     let valuesFromFields = [];
//     fields.forEach(item=>valuesFromFields.push(+item.textContent));
//     for (let i=0; i<4;i++){
//         firebase.database().ref('settings/settingsIteration').update({
//             "currentValueWorkTime":valuesFromFields[0],
//             "currentValueWorkIteration":valuesFromFields[1],
//             "currentValueShortBreak":valuesFromFields[2],
//             "currentValueLongBreak":valuesFromFields[3],
//         })
//     }
// }
/////////////////////////////////
// For your cycle
// your circle
// class SettingsBlock {
//     constructor(item) {
//         this.field = item.field;
//         this.inputValue = Number(this.field.textContent);
//         this.step = item.step;
//         this.minValue = item.minValue;
//         this.maxValue = item.maxValue;
//         this.minus = item.minus;
//         this.plus = item.plus;
//         this.defaultValue = item.defaultValue;
//
//         this.minus.addEventListener('click', () => {
//             if (this.inputValue <= this.minValue + this.step) {
//                 this.minus.classList.add("disabled-buttons");
//             }
//
//             if (this.inputValue >= this.maxValue) {
//                 this.plus.classList.remove("disabled-buttons");
//             }
//
//             if (this.inputValue <= this.minValue) {
//                 this.field.textContent = this.inputValue;
//             } else {
//                 this.inputValue = +this.inputValue - this.step;
//                 this.field.textContent = this.inputValue;
//             }
//         });
//
//         this.plus.addEventListener('click', () => {
//
//             if (this.inputValue >= this.minValue) {
//                 this.minus.classList.remove("disabled-buttons");
//             }
//             if (this.inputValue + this.step >= this.maxValue) {
//                 this.plus.classList.add("disabled-buttons");
//             }
//
//             if (this.inputValue >= this.maxValue) {
//                 this.inputValue = this.maxValue;
//                 this.field.textContent = this.inputValue;
//             } else {
//                 this.inputValue = +this.inputValue + this.step;
//                 this.field.textContent = this.inputValue;
//             }
//         });
//     }
//
//     refreshValue() {
//         this.inputValue = this.defaultValue;
//         this.field.textContent = this.defaultValue;
//     }
// }

// let fields = document.querySelectorAll('.settings-time-iteration__input');
// let minusButtons = document.querySelectorAll('.icon-minus-for-js');
// let plusButtons = document.querySelectorAll('.icon-plus-for-js');
//
// let arrayWithItems = [
//     new SettingsBlock({
//         field: fields[0],
//         step: 5,
//         minValue: 15,
//         maxValue: 25,
//         minus: minusButtons[0],
//         plus: plusButtons[0],
//         defaultValue: readDataFromStorage('defaultValueWorkTime'),
//     }),
//     new SettingsBlock({
//         field: fields[1],
//         step: 1,
//         minValue: 2,
//         maxValue: 5,
//         minus: minusButtons[1],
//         plus: plusButtons[1],
//         defaultValue: readDataFromStorage('defaultValueWorkIteration'),
//     }),
//     new SettingsBlock({
//         field: fields[2],
//         step: 1,
//         minValue: 3,
//         maxValue: 5,
//         minus: minusButtons[2],
//         plus: plusButtons[2],
//         defaultValue: readDataFromStorage('defaultValueShortBreak'),
//     }),
//     new SettingsBlock({
//         field: fields[3],
//         step: 5,
//         minValue: 15,
//         maxValue: 30,
//         minus: minusButtons[3],
//         plus: plusButtons[3],
//         defaultValue: readDataFromStorage('defaultValueLongBreak'),
//     }),
// ];
//
// let totalSumOfMinutes = 0;
// let totalSumFirstCycle = 0;
// let totalSumOfHoursMinutes = 0;
// let minutesPerHour = 60;
// let oneHundredPercent = 100;
// let oneHalf = 0.5;
// let oneHalfHour = 30;
//
// let wrapperYourCycleMain = document.querySelector('.your-cycle__graph');
// let wrapperYourCycleBottomMobile = document.querySelector('.your-cycle__graph-block-bottom-points-mobile');
// let wrapperYourCycleMainBottomTabletDesktop = document.querySelector('.your-cycle__graph-block-bottom-points-tablet-desktop');
//
// let workTimeBlock = arrayWithItems[0];
// let workIterationBlock = arrayWithItems[1];
// let shortBreakBlock = arrayWithItems[2];
// let longBreakBlock = arrayWithItems[3];
//
// const sumAllMinutes = () => {
//     totalSumOfMinutes = (workTimeBlock.inputValue * workIterationBlock.inputValue)
//         + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
//         + longBreakBlock.inputValue +
//         (workTimeBlock.inputValue * workIterationBlock.inputValue)
//         + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1)); //320
// };
//
// const sumFirstCycle = () => {
//     totalSumFirstCycle = (workTimeBlock.inputValue * workIterationBlock.inputValue)
//         + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
//         + longBreakBlock.inputValue;
//     let wholeHours = Math.trunc(totalSumFirstCycle / minutesPerHour);
//     let wholeMinutes = totalSumFirstCycle % minutesPerHour;
//     totalSumFirstCycle = `First cycle:${wholeHours}h ${wholeMinutes}m`;
// };
//
// const sumHoursMinutes = () => {
//     totalSumOfHoursMinutes = (workTimeBlock.inputValue * workIterationBlock.inputValue)
//         + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1))
//         + longBreakBlock.inputValue +
//         (workTimeBlock.inputValue * workIterationBlock.inputValue)
//         + (shortBreakBlock.inputValue * (workIterationBlock.inputValue - 1)); //320
//     let wholeHours = Math.trunc(totalSumOfHoursMinutes / minutesPerHour);
//     let wholeMinutes = totalSumOfHoursMinutes % minutesPerHour;
//     totalSumOfHoursMinutes = `${wholeHours}h ${wholeMinutes}m`;
// };
//
// const initialize = () => {
//     arrayWithItems.forEach((item, index, array) => {
//         item.refreshValue();
//     });
//     sumAllMinutes();
//     sumFirstCycle();
//     sumHoursMinutes();
//     drawCircle();
//     createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
// };
//
// initialize();
//
// minusButtons.forEach((item) => {
//     item.addEventListener('click', () => {
//         sumAllMinutes();
//         sumFirstCycle();
//         sumHoursMinutes();
//         drawCircle();
//         createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
//         updateDataFromStorage(fields);
//     });
// });
//
// plusButtons.forEach((item, index, array) => {
//     item.addEventListener('click', () => {
//         sumAllMinutes();
//         sumFirstCycle();
//         sumHoursMinutes();
//         drawCircle();
//         createCirclesAndText(totalSumOfHoursMinutes, totalSumOfMinutes, wrapperYourCycleMain);
//         updateDataFromStorage(fields);
//     });
// });
//
// // Draw line with breaks
// function drawCircle() {
//
//     function createShortBreaks() {
//         for (let i = 0; i < workIterationBlock.inputValue - 1; i++) {
//             let shortBreakElem = document.createElement('div');
//             shortBreakElem.classList.add('your-cycle__graph-short-break');
//             shortBreakElem.style.width = shortBreakBlock.inputValue / onePercentOfCycle + '%';
//             wrapperYourCycleMain.append(shortBreakElem);
//         }
//     }
//
//     wrapperYourCycleMain.innerHTML = '';
//     let longBreakElem = document.createElement('div');
//     let onePercentOfCycle = totalSumOfMinutes / oneHundredPercent; //3.2 default
//     longBreakElem.classList.add('your-cycle__graph-long-break');
//     longBreakElem.style.position = 'relative';
//     longBreakElem.style.width = longBreakBlock.inputValue / onePercentOfCycle + '%';
//
//     //Top middle Point First cycle
//     let middleTimePoint = document.createElement('div');
//     middleTimePoint.className = 'your-cycle-time your-cycle-time_first-cycle';
//     longBreakElem.append(middleTimePoint);
//     middleTimePoint.textContent = totalSumFirstCycle;
//
//     createShortBreaks();
//     wrapperYourCycleMain.append(longBreakElem);
//     createShortBreaks();
// }
//
// //Draw points and time text
// function createCirclesAndText(firstCycleMin, allCycleMin, wrapBlock) {
//
//     function createBottomTimeTextDesktop(wrapperYourCycleMain) {
//         let textForBottomPoints = oneHalfHour / allCycleMin * oneHundredPercent;
//         let timeGap = textForBottomPoints;
//         let numberOfMarks = Math.floor(allCycleMin / oneHalfHour);
//         let timeForMarks = oneHalf;
//         let space = oneHalf;
//
//         for (let i = 0; i < numberOfMarks; i++) {
//             let elem = document.createElement('div');
//             elem.className = 'your-cycle-time your-cycle-time_down';
//             if (i === 0) {
//                 elem.textContent = '30m';
//             } else if (i % 2 === 0) {
//                 elem.textContent = Math.trunc(timeForMarks) + 'h 30m';
//             } else {
//                 elem.textContent = timeForMarks + 'h';
//             }
//             timeForMarks = timeForMarks + space;
//             elem.style.left = timeGap - oneHalf + '%';
//             elem.style.position = 'absolute';
//             timeGap = textForBottomPoints + timeGap;
//             wrapperYourCycleMain.append(elem);
//         }
//     }
//
//     function createBottomTimeTextMobile(wrapperYourCycleMain) {
//         let textForBottomPoints = minutesPerHour / allCycleMin * oneHundredPercent;
//         let timeGap = textForBottomPoints;
//         let numberOfMarks = Math.floor(allCycleMin / minutesPerHour);
//         let timeForMarks = 1;
//         let space = 1;
//
//         for (let i = 0; i < numberOfMarks; i++) {
//             let elem = document.createElement('div');
//             elem.className = 'your-cycle-time your-cycle-time_down';
//             elem.textContent = Math.trunc(timeForMarks) + 'h';
//
//             timeForMarks = timeForMarks + space;
//             elem.style.left = timeGap - oneHalf + '%';
//             elem.style.position = 'absolute';
//             timeGap = textForBottomPoints + timeGap;
//             wrapperYourCycleMain.append(elem);
//         }
//     }
//
//     wrapperYourCycleBottomMobile.innerHTML = '';
//     wrapperYourCycleMainBottomTabletDesktop.innerHTML = '';
//     //Top left Upper Time
//     let startTimePoint = document.createElement('div');
//     startTimePoint.className = 'your-cycle-time your-cycle-time_up';
//     wrapBlock.append(startTimePoint);
//     startTimePoint.textContent = 0 + 'h';
//
//     //Top right Upper Time
//     let endTimePoint = document.createElement('div');
//     endTimePoint.className = 'your-cycle-time your-cycle-time_up-right';
//     wrapBlock.append(endTimePoint);
//     endTimePoint.textContent = firstCycleMin;
//
//     //Create two bottom blocks with text and points
//     createBottomTimeTextMobile(wrapperYourCycleBottomMobile);
//     createBottomTimeTextDesktop(wrapperYourCycleMainBottomTabletDesktop);
// }

