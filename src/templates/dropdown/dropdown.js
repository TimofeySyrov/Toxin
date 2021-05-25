class Dropdown {
    constructor(container) {
        this.container = container;
        this.findDomElement();
        this.bindEventListener();
    }

    findDomElement() {
        this.dropName = this.container.querySelector('.js-dropdown-name');
        this.dropList = this.container.querySelector('.js-dropdown-list');
        this.dropNumber = this.container.querySelector('.js-dropdown-number');
        this.dropMinus = this.container.querySelector('.js-dropdown-minus');
        this.dropPlus = this.container.querySelector('.js-dropdown-plus');
    }

    handlerDropdown() {
        if(this.dropList.classList.contains('dropdown__list-active')) {
            this.dropList.classList.remove('dropdown__list-active');
        } else {
            this.dropList.classList.toggle('dropdown__list-active');
        }
    }

    bindEventListener() {
        this.dropName.addEventListener('click', this.handlerDropdown.bind(this));
    }
}

export default Dropdown;