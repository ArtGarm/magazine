/*валидация формы*/
function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form_row').is('.error')){
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }

        $('[type="password"]',$form).each(function(){
            if($(this).is("#re_password") == true){
                $(this).rules("add", {
                    minlength:3,
                    equalTo:"#password",
                    messages:{
                        equalTo:"Неверный пароль.",
                        minlength:"Недостаточно символов."
                    }
                });
            }
        })
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form){

  var thisForm = $(form);
  var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim() == 'true') {
                thisForm.trigger("reset");
                popNext("#call_success");
            }
            else {
               thisForm.trigger('reset');
            }

        }
    });
}

function popNext(popupId){

    $.fancybox.open({
        src  : popupId,
        type : 'inline',
        opts : {
            afterClose: function(){
                $('form').trigger("reset");
            }
        }
    });

}

function cartValidation(form){
    var thisForm = $(form);
    var formSur = thisForm.serializeArray();


    $('.table-items tbody tr').each(function(){
        formSur.push({
            name : $(this).find('input[name=tovar-id]').val(),
            value: $(this).find('input[name=count]').val()
        });
    });

    /* success - delete after use */

        $('.buttons-row').slideUp(300);
        
        $('.list-steps .item').removeClass('active');
        $('.list-steps .item').eq(2).addClass('active');

        $('.step2').slideUp(300);
        $('.step3').slideDown(300);

    /* success */



    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            
            $('.buttons-row').slideUp(300);
            
            $('.list-steps .item').removeClass('active');
            $('.list-steps .item').eq(2).addClass('active');
    
            $('.step2').slideUp(300);
            $('.step3').slideDown(300);
        }
    });

}

/*маска на инпуте*/
function Maskedinput(){
    if($('.tel-mask')){
        $('.tel-mask').mask('+9 (999) 999-99-99');
    }
}

$(document).ready(function(){

    validate('.step2 form', {submitFunction: cartValidation });
    
    validate('.form-block .contein-form', {submitFunction:validationCall});
    validate('#call-popup .contact-form', {submitFunction:validationCall});
    Maskedinput();

});