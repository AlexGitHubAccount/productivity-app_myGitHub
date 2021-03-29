
    class Router {
    constructor() {
        console.log('constructor Router');
        this.routes = [];
        this.root = window.location.origin;
        this.pathname = window.location.pathname;
        this.allRoutes = {
            entryPoint:'/',
            settingsPomodoros:'/settings',
            taskListWithTasks:'/task_list',
            reportsPomodorosDay:'/reports',
            timerStart:'/timer',
        };
    }

    getFragment() {
        const fragment = this.pathname || location.pathname;
        return this.clearSlashes(fragment);
    }

    clearSlashes(path) {
        return path
            .toString()
            .replace(/\/$/, "")
            .replace(/^\\/, "");
    }

    add(re, handler) {//Добавляет к определенному роуту коллбэк функции
        if (typeof re == "function") {
            handler = re;
            re = "";
        }

        this.routes.push({ re: re, handler: handler });
        return this;
    }

    remove(param) {
        for (let i = 0, r; i < this.routes.length, (r = this.routes[i]); i++) {
            if (r.handler === param || r.re.toString() === param.toString()) {
                this.routes.splice(i, 1);
                return this;
            }
        }
        return this;
    }

    check(f) {
        let fragment = f || this.pathname || this.getFragment();
        for (let i = 0; i < this.routes.length; i++) {
            let match = fragment.match(this.routes[i].re);
            if (match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }
        }
        return this;
    }//   check - вызывает функцию-обработчик(рендер) для указанного урла
    listen() {
        let self = this;
        let current = this.pathname || self.getFragment();
        window.addEventListener("popstate", () => {
            if (current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
            return this;
        });
        this.pathname = null;
    } //прослушка изменения пути

    navigate(path) {
        path = path ? path : "";
        history.pushState(null, null, this.root + this.clearSlashes(path));
        return this;
    } //navigate - записывает изменение урла в историю браузера

    loadCurrentRoute(){
            const allRoutes = this.allRoutes;
            console.log('method loadCurrentRoute');
            if(window.location.pathname === allRoutes['entryPoint']){
                    this.navigate('/').check('/').listen();
            }
            else {
                if(window.location.pathname === allRoutes['settingsPomodoros']){
                    this.navigate('/settings').check('/settings').listen();
                }
                if(window.location.pathname === allRoutes['taskListWithTasks']){
                    this.navigate('/task_list').check('/task_list').listen();
                }
                if(window.location.pathname === allRoutes['reportsPomodorosDay']){
                    this.navigate('/reports').check('/reports').listen();
                }
                if(window.location.pathname === allRoutes['timerStart']){
                    this.navigate('/timer').check('/timer').listen();
                }
            }
    }
}

let router = new Router();
export default router;

