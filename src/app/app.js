
/* root component starts here */
// require('assets/less/main.less'); // include general styles

/* including settings component */
// import './pages/settings/settings.js';

/* including  router and settingsInit*/
import router from './router.js';

import settingsInit from './pages/settings';
import taskListInit from './pages/task_list';
import reportsInit from './pages/reports';
import timerInit from './pages/timer';

let settingsPage = settingsInit();
let taskListPage = taskListInit();
let reportsPage = reportsInit();
let timerPage = timerInit();

    router.add(/\/$/, () => {
    taskListPage.view.initFirstEntrance();
    // taskListPage.view.pressBtnSkip();
    // taskListPage.view.pressBtnGoToSettings();
});
    router.add(/settings/, () => {
    settingsPage.view.renderFrameAndHeader();
    // settingsPage.view.pressBtnGoToTasks();
});
    router.add(/task_list/, () => {
    taskListPage.view.renderTaskListPage();
    // taskListPage.view.pressBtnGoTimer();
    // taskListPage.view.renderAddModal();
    // taskListPage.view.renderEditModal();
    // taskListPage.view.renderRemoveModal();
});
    router.add(/reports/, () => {
    reportsPage.view.renderFrameAndHeader();
});
    router.add(/timer/, () => {
    timerPage.view.renderFrameAndHeader();
    // timerPage.view.renderTimerCompleted();
});

sessionStorage.setItem('isNewUser', 'true');

window.addEventListener("load", ()=>{
    router.loadCurrentRoute();
});



