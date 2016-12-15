export default class Template{

    makeItemList = itemList => {
        return itemList.reduce((a, item) => a + this.templateMaker(item), '');
    };
    templateMaker = item => {
        return `<li data-id='${item.id}' class="phrase-item">
                    <span>${item.phrase}</span>
                    <i class="mdi mdi-close phrase-remove"></i>
                </li>`;
    }
}
