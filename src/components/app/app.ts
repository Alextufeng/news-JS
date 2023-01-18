import { ResponseNews, ResponseSource } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (<HTMLTemplateElement>document.querySelector('.sources')).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ResponseNews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ResponseSource) => this.view.drawSources(data));
    }
}

export default App;
