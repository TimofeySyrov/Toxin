import 'air-datepicker';

class AirCalendar {
  
  constructor(container, isOpen, firstInput, secondInput){

    if(!$(container).hasClass('js-date-picker-calendar')){

      this.calendarContainer = $(container).find(".js-date-picker-calendar");
      this.isOpen = isOpen;
      this.arrivalInput = firstInput;
      this.depatureInput = secondInput;
      this.singleInput = firstInput;

      if(secondInput == undefined & secondInput == null){
        this.isDI = false;
      }else {
        this.isDI = true;
      }
    } else {
      this.calendarContainer = $(container);
    }

    this.transformToAirDatepicker();
    this.checkIsOpen();
    this.addCalendarButtons();

    this.eventListener_calendarInputs();
    this.eventListener_clearCalendarButton();
    this.eventListener_confirmCalendarButton();
  }

  transformToAirDatepicker(){
    const calendar1 = {
      isDouble: this.isDI,
      containerArrival: $(this.arrivalInput),
      containerDepature: $(this.depatureInput),
      containerSingle: $(this.singleInput),
      options: {
        inline: false,
        toggleSelected: true,
        range: true,
        multipleDates: 2,
        multipleDatesSeparator : '-',
        navTitles: {
            days: '<span>MM yyyy</span>'
        },
        dateFormat: "dd.mm.yyyy",
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onSelect: function onSelect(selectedDates) {
                if(selectedDates !== undefined && selectedDates != '' && selectedDates.indexOf('-') > -1){
                    var mdy = selectedDates.split('-');
                    var CalDates = [mdy[0], mdy[1]];

                    //Если значение true, задействованы два инпута. Если false, то задействован один.
                    if(calendar1.isDouble == true){
                      calendar1.containerArrival.html(mdy[0]);
                      calendar1.containerDepature.html(mdy[1]);
                      localStorage.setItem('CalendarDates', JSON.stringify(CalDates));
                    } else if(calendar1.isDouble == false){
                      calendar1.containerSingle.html(mdy[0]+" - "+mdy[1]);
                      localStorage.setItem('CalendarDates', JSON.stringify(CalDates));
                    }
                }
                
        }
      },
    };

    //Если doubleInputs == false, то меняется формат даты на "День Месяц"
    if(!(this.isDI)){
      calendar1.options.dateFormat = "d M";
    }

    $(this.calendarContainer).datepicker(calendar1.options).data('datepicker');
  }

  addCalendarButtons(){
    $(this.calendarContainer).find('.datepicker').append('<div class="date-picker-calendar__buttons"></div>');

    var buttonsContainer = $(this.calendarContainer).find('.date-picker-calendar__buttons');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-clear js-calendar-clear">Очистить</div>');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-confirm js-calendar-confirm">Применить</div>');
  }

  checkIsOpen(){
    if(this.isOpen == 'true'){
      this.showCalendar();
    }
    if(this.isOpen == 'false'){
      this.hideCalendar();
    }
  }

  eventListener_calendarInputs(){
    $(this.arrivalInput).on("click", this.calendarInputs.bind(this));
    $(this.depatureInput).on("click", this.calendarInputs.bind(this));
  }

  calendarInputs(){
    var myD = $(this.calendarContainer);
    
    if(this.isOpen == 'true'){
      this.isOpen = 'false';
      $(myD).hide();
    }else {
      this.isOpen = 'true';
      $(myD).show();
    }
  }

  showCalendar(){
    var myD = $(this.calendarContainer);

    $(myD).show();
  }

  clearAllCalendar(){
    var myD = $(this.calendarContainer).data('datepicker');
    
    myD.clear();

    const inputsPlaceholder = {
      isDouble: this.isDI,
      arr: $(this.arrivalInput),
      dep: $(this.depatureInput),
      containerSingle: $(this.singleInput),
    };

    if(inputsPlaceholder.isDouble){
      inputsPlaceholder.arr.html('ДД.ММ.ГГГГ');
      inputsPlaceholder.dep.html('ДД.ММ.ГГГГ');
    }
    if(!(inputsPlaceholder.isDouble)){
      inputsPlaceholder.containerSingle.html('Выберите даты');
    }
  }

  eventListener_clearCalendarButton(){
    var clearb = $(this.calendarContainer).find('.js-calendar-clear');
    
    clearb.on("click", this.clearAllCalendar.bind(this));
  }

  hideCalendar(){
    var myD = $(this.calendarContainer);

    $(myD).hide();
  }

  eventListener_confirmCalendarButton(){
    var clearb = $(this.calendarContainer).find('.js-calendar-confirm');
    
    clearb.on("click", this.calendarInputs.bind(this));
  }
}

export default AirCalendar;