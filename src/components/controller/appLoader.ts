import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b599f2ab200e4f7bbf70428aa66aa461', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
