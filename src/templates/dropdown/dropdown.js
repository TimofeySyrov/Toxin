class Dropdown {
    constructor(container) {
        this.container = container;
        this.findDomElement();
        this.bindEventListener();
        this.eventListenerItem();
    }

    findDomElement() {
        this.dropName = this.container.querySelector('.js-dropdown-name');
        this.dropList = this.container.querySelector('.js-dropdown-list');
        this.dropItem = this.container.querySelectorAll('.js-dropdown-item');
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

    eventListenerItem() {
        for (const item of this.dropItem) {
            item.numb = item.querySelector('.js-dropdown-number');
            item.btnplus = item.querySelector('.js-dropdown-plus');
            item.btnminus = item.querySelector('.js-dropdown-minus');
            
            console.log('Айтем');

            // лучше добавить листенер слушащий изменения номера item и там ссылку на функцию вставить, а при клике ссылки убрать
            function prov() {
                if(item.numb.textContent <= 0) {
                    item.numb.textContent = 0;
                    if(!(item.btnplus.className.includes('dropdown__list-item-count-btn-active'))) {
                        item.btnplus.classList.toggle('dropdown__list-item-count-btn-active');
                    }
                    if(item.btnminus.className.includes('dropdown__list-item-count-btn-active')) {
                        item.btnminus.classList.remove('dropdown__list-item-count-btn-active');
                    }
                }
    
                if(item.numb.textContent > 0) {
                    if(!(item.btnplus.className.includes('dropdown__list-item-count-btn-active'))) {
                        item.btnplus.classList.toggle('dropdown__list-item-count-btn-active');
                    }
    
                    if(!(item.btnminus.className.includes('dropdown__list-item-count-btn-active'))) {
                        item.btnminus.classList.toggle('dropdown__list-item-count-btn-active');
                    }
                }
            }

            prov();

            item.btnplus.addEventListener('click', function() {
                item.numb.textContent = Number(item.numb.textContent) + 1;
                prov();
            })

            item.btnminus.addEventListener('click', function() {
                if (item.numb.textContent > 0) {
                    item.numb.textContent = Number(item.numb.textContent) - 1;
                }
                prov();
            })
        }
    }

}

export default Dropdown;