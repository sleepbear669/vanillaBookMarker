import FireBaseStore from './../common/FireBaseStore';
import Template from './template';
import BookMarkerItem from './../common/bookMarkerItem';

import {qs , $on} from './helpers';

const phraseInput = qs('.phrase-input');
const phraseItemBox = qs('.phrase-item-box');

const store = new FireBaseStore();
const template = new Template();

const phraseRender = (phraseList) => {
    phraseItemBox.innerHTML = template.makeItemList(phraseList);

};

$on(phraseInput, 'change', e => {
        let phrase = e.target.value.trim();
        e.target.value = '';
        addItem(phrase);
    }
);

const addItem = (phrase) => {
    if (phrase) {
        store.addItem(phrase);
    }
};

const updateStore = items => {
    let phraseList = [];
    for (let id in items) {
        phraseList.push(items[id]);
    }
    phraseRender(phraseList);
};

store.on('book-marker/', 'value', updateStore);
//store.on('phrase/', 'child_added', log('child_added'));
