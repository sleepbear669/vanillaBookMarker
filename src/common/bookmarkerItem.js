export default class BookMarkerItem{
    constructor(id, phrase){
        this.id = id;
        this.createAt = new Date().getTime();
        this.phrase = phrase;
    }
}
