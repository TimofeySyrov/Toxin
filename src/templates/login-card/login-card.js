class LoginCard {
    constructor(elem){
        this.container = elem;

        this.email_input = $(this.container).find('.js-login-card-email');
        this.password_input = $(this.container).find('.js-login-card-password');
        this.loginBtn = $(this.container).find('.js-login-card-login-btn');

        this.listToSafe = [
            this.email_input,
            this.password_input
        ];

        this.login_btn_eventListener();
    }

    checkLoginInputs(){
        var uEmail, uPassword;

        for(const item of this.listToSafe){
            
            var itemBody = item.find('input.text-field__input');
            var itemValue = $(itemBody).val();

            if(itemValue){
                if(item.hasClass('js-login-card-email')){
                    uEmail = itemValue;
                } else if (item.hasClass('js-login-card-password')){
                    uPassword = itemValue;
                }
            }
        }

        if(uEmail && uPassword){
            var uInfo = JSON.parse(localStorage.getItem(uEmail));
            if(uInfo){
                if(uInfo[1] == uPassword){
                    window.location.href = 'index.html';
                } else {
                    alert('Пароль введен неверно! Пароль: '+uInfo[1]);
                }
            } else {
                alert('Аккаунт с такой почтой не существует!');
            }
        } else{
            alert('Вы пропустили одну из форм! Заполните её');
        }
    }

    login_btn_eventListener(){
        $(this.loginBtn).on('click', this.checkLoginInputs.bind(this));
    }
    
}

export default LoginCard;