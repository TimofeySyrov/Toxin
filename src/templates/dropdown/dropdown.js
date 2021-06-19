class Dropdown {
    constructor(container) {
        this.container = container;
        
        this.findDomElement();
        this.init();
    }

    findDomElement(){
        this.dropType = this.container.getAttribute('dropType');
        this.dropIsOpen = this.container.getAttribute('isopen');

        this.dropName = this.container.querySelector('.js-dropdown-name');
        this.dropTittle = this.container.querySelector('.js-dropdown-name-text');
        this.dropIcon = this.container.querySelector('.js-dropdown-icon');
        

        this.dropList = this.container.querySelector('.js-dropdown-list');
        this.dropCounts = this.container.querySelectorAll('.js-dropdown-number');
        this.dropItems = this.dropList.querySelectorAll('.js-dropdown-item');

        
        if(this.dropType == 'guests'){
            this.dropConfirm = this.dropList.querySelector('.js-dropdown-confirm');
            this.dropClear = this.dropList.querySelector('.js-dropdown-clear');
        }
        
    }
    init() {
        this.check_dropIsOpen();
        this.check_minus_plus_buttons();

        this.eventListener_dropList();
        this.eventListenerList();

        this.check_counts();

        if(this.dropType == 'guests'){
            this.eventListener_confirm_button();
            this.eventListener_clear_button();
        }
        
    }

    check_dropIsOpen(){
        if(this.dropIsOpen == 'true'){
            this.open_dropList();
        }
    }

    open_dropList(){
        if(!(this.dropList.classList.contains('dropdown__list-active'))){
            this.dropList.classList.add('dropdown__list-active');
            this.dropName.classList.add('dropdown__name-active');
            this.dropIcon.classList.add('dropdown__icon-active');
        } else {
            this.dropList.classList.remove('dropdown__list-active');
            this.dropName.classList.remove('dropdown__name-active');
            this.dropIcon.classList.remove('dropdown__icon-active');
        }
    }

    eventListener_dropList(){
        this.dropName.addEventListener('click', this.open_dropList.bind(this));
    }

    check_counts(){
        var num = [];
        for(const item of this.dropCounts){
            num.push(Number(item.innerHTML));
        }
        this.display_count(num);
    }

    display_count(x){
        if(this.dropType == 'room-about'){
            let [room, bedroom, bathroom] = x,
            room_txt, bed_txt, bath_txt = '';

        if(room > 0) {
            if(room == 1) {
                room_txt = `${room} спальня`;
            } else if(room > 1 && room < 5) {
                room_txt = `${room} спальни`;
            } else if(room > 4) {
                room_txt = `${room} спален`;
            }
            this.dropTittle.innerHTML = `${room_txt}...`;        
        } else {
            room_txt = '';
        }
        
        if(bedroom > 0) {
            if(bedroom == 1) {
                bed_txt = `${bedroom} кровать`;
            } else if(bedroom > 1 && bedroom < 5) {
                bed_txt = `${bedroom} кровати`;
            } else if(bedroom > 4) {
                bed_txt = `${bedroom} кроватей`;
            }
            this.dropTittle.innerHTML = `${bed_txt}...`;
        } else {
            bed_txt = '';
        }
        
        
        if(bathroom > 0) {
            if(bathroom == 1) {
                bath_txt = `${bathroom} ванная комн`;
            } else if(bathroom > 1 && bathroom < 5) {
                bath_txt = `${bathroom} ванные комн`;
            } else if(bathroom > 4) {
                bath_txt = `${bathroom} ванных комн`;
            }
            this.dropTittle.innerHTML = `${bath_txt}...`;
        } else {
            bath_txt = '';
        }

        if(room > 0 && bedroom > 0){
            this.dropTittle.innerHTML = `${room_txt}, ${bed_txt}...`;
        } else if(room > 0 && bathroom > 0) {
            this.dropTittle.innerHTML = `${room_txt}, ${bath_txt}...`;
        } else if(bedroom > 0 && bathroom > 0){
            this.dropTittle.innerHTML = `${bed_txt}, ${bath_txt}...`;
        }

        if(room > 0 && bedroom > 0 && bathroom > 0){
            this.dropTittle.innerHTML = `${room_txt}, ${bed_txt}, ${bath_txt}...`;
        }

        if(room == 0 && bedroom == 0 && bathroom == 0) {
            this.dropTittle.innerHTML = `спальни, кровати, ванные комн...`;
        }

        localStorage.setItem('NumRoomAbout', JSON.stringify([room, bedroom, bathroom]));

    }
        if(this.dropType == 'guests'){
            var string_adults = '';
            var string_babies = '';

            var adults_count = x[0]+x[1];
            var babies_count = x[2];

            if(adults_count > 0) {
                if(adults_count == 1) {
                    string_adults = `${adults_count} гость`;
                } else if(adults_count > 1 && adults_count < 5) {
                    string_adults = `${adults_count} гостя`;
                } else if(adults_count > 4) {
                    string_adults = `${adults_count} гостей`;
                }

                this.dropTittle.innerHTML = string_adults;
                this.display_clear_button();
            } else {
                this.dropTittle.innerHTML = 'Сколько гостей';
                this.delete_clear_button();
            }

            if(babies_count > 0) {
                if(babies_count == 1) {
                    string_babies = `${babies_count} младенец`;
                } else if(babies_count > 1 && babies_count < 5) {
                    string_babies = `${babies_count} младенца`;
                } else if(babies_count > 4) {
                    string_babies = `${babies_count} младенцев`;
                } else {
                    string_babies = '';
                }
            }
            if(adults_count > 0 && babies_count > 0) {
                this.dropTittle.innerHTML = `${string_adults}, ${string_babies}`;
            }

            localStorage.setItem('NumGuests', JSON.stringify([adults_count, babies_count]));
        }
    }

    eventListenerList(){
        this.dropList.addEventListener('click', this.handlerList.bind(this));
    }

    handlerList(event){
        let target = event.target;

        if(target.classList.contains('js-dropdown-plus')) {
            this.plus_button(target);
        } else if(target.classList.contains('js-dropdown-minus')) {
            this.minus_button(target);
        }
    }

    plus_button(elem){
        var number = elem.previousElementSibling;
        number.innerHTML = Number(number.innerHTML)+1;
        this.check_minus_plus_buttons();
        if(this.dropType == 'room-about'){
            this.check_counts();
        }
        
    }

    minus_button(elem){
        if(Number(elem.nextElementSibling.innerHTML) > 0){
            elem.nextElementSibling.innerHTML = Number(elem.nextElementSibling.innerHTML)-1;
        }
        this.check_minus_plus_buttons();
        if(this.dropType == 'room-about'){
            this.check_counts();
        }
        
    }

    check_minus_plus_buttons(){
        for(const btn of this.dropItems){
            btn.number = btn.querySelector('.js-dropdown-number');
            btn.plus = btn.querySelector('.js-dropdown-plus');
            btn.minus = btn.querySelector('.js-dropdown-minus');

            if(!(btn.plus.classList.contains('dropdown__list-item-count-btn-active'))){
                btn.plus.classList.add('dropdown__list-item-count-btn-active');
            }

            if(Number(btn.number.innerHTML) <= 0) {
                btn.number.innerHTML = 0;
                if(btn.minus.classList.contains('dropdown__list-item-count-btn-active')){
                    btn.minus.classList.remove('dropdown__list-item-count-btn-active');
                }
            }

            if(Number(btn.number.innerHTML) > 0) {
                if(!(btn.minus.classList.contains('dropdown__list-item-count-btn-active'))){
                    btn.minus.classList.add('dropdown__list-item-count-btn-active');
                }
            }
        }
    }

    eventListener_confirm_button(){
        this.dropConfirm.addEventListener('click', this.confirm_button.bind(this));
    }

    confirm_button(){
        this.check_counts();
    }

    eventListener_clear_button(){
        this.dropClear.addEventListener('click', this.clear_button.bind(this));
    }

    clear_button(){
        for(const count of this.dropCounts){
            count.innerHTML = 0;
        }
        this.check_counts();
        this.check_minus_plus_buttons();
    }

    delete_clear_button(){
        if(this.dropClear.classList.contains('dropdown__btns-clear-active')){
            this.dropClear.classList.remove('dropdown__btns-clear-active')
        }
    }

    display_clear_button(){
        if(!(this.dropClear.classList.contains('dropdown__btns-clear-active'))){
            this.dropClear.classList.add('dropdown__btns-clear-active')
        }
    }

}

export default Dropdown