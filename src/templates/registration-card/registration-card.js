import '../text-field/text-field-init';

class RegCard {
    constructor(elem) {
        this.container = elem;

        this.init();
        this.register_btn_eventListener();
    }

    init(){
        this.firstNameСontainer = $(this.container).find('.js-registration-card-first-name');
        this.lastNameСontainer = $(this.container).find('.js-registration-card-last-name');

        this.emailСontainer = $(this.container).find('.js-registration-card-email');
        this.passwordСontainer = $(this.container).find('.js-registration-card-password');

        this.registerButton = $(this.container).find('.js-registration-card-registr');

        this.listToSafe = [
            this.firstNameСontainer,
            this.lastNameСontainer,
            this.emailСontainer,
            this.passwordСontainer
        ];
    }

    getElementsChanges(){
        var uFirstName, uLastName, uEmail, uPassword;

        for(const item of this.listToSafe){
            
            var itemBody = item.find('input.text-field__input');
            var itemValue = $(itemBody).val();
            
            if(itemValue){
                if(item.hasClass('js-registration-card-first-name')){
                    uFirstName = itemValue;
                } else if (item.hasClass('js-registration-card-last-name')){
                    uLastName = itemValue;
                } else if (item.hasClass('js-registration-card-email')){
                    uEmail = itemValue;
                } else if (item.hasClass('js-registration-card-password')){
                    uPassword = itemValue;
                }
            }
        }

        if(uFirstName && uLastName && uEmail && uPassword){
            var arr = [uEmail, uPassword, uFirstName, uLastName];
            localStorage.setItem(uEmail, JSON.stringify(arr));
        } else {
            alert('Вы пропустили одну из форм! Заполните её');
        }
    }

    register_btn_eventListener(){
        this.registerButton.on('click', this.getElementsChanges.bind(this));
    }
    
}

export default RegCard;