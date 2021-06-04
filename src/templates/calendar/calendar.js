import 'air-datepicker';

var doubleInputs = false;
var firstInput = '.js-arr';
var secondInput = '.js-dep';

    (function( $ ) {
      $.fn.calendar = function() {
        return this.each(function() {
          const calendar = {
            containerArrival: $( this.parentElement ).find(firstInput),
            containerDepature: $( this.parentElement ).find(secondInput),
            calendar: $( this ),
            options: {
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

                          if(doubleInputs){
                            calendar.containerArrival.attr('placeholder', mdy[0]);
                            calendar.containerDepature.attr('placeholder', mdy[1]);
                          } else {
                            calendar.containerArrival.attr('placeholder', mdy);
                          }
                          
                      }
              }
            },
            init: () => {
              const picker = calendar.calendar.datepicker(calendar.options).data('datepicker');
              picker.apply = () => {console.log('Applied.')};
            }
          };
          calendar.init();
        });
      };
    })( jQuery );
    
    function setCalendar(jQuery) {
      $('.js-date-picker-calendar').calendar();
    }
    $( document ).ready(setCalendar);