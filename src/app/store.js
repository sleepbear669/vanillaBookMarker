export default class Store{
    constructor(){
        this.storage = [];
    }

    getItems = () => {
        return this.storage;
    };

    addItem = item => {
        this.storage.push(item);
    }
}