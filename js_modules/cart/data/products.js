import {observable, computed} from 'mobx';

class Products {
    @observable list = [
        { id: 1, price: 1200, title: "iPhone X" },
        { id: 2, price: 200, title: "iPhone X2" },
        { id: 3, price: 600, title: "iPhone X3" },
    ];

    @computed get mapId(){
        let map = {};

        this.list.forEach((item, i) => {
            map[item.id] = i
        });

        return map;
    }

    @computed get item(){
        return (id) => this.list[this.mapId[id]];
    }
}

export default new Products();