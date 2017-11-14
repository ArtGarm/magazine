var style = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      styles: style,
      center: place
    });

    var marker = new google.maps.Marker({
      position: place,
      map: map,
      icon: pointer
    });

}

function updatePriceCart(){

    var summ = 0;
    $('.table-items tbody tr').each(function(){

        var count = $(this).find('input[name=count]').val() * 1;
        var price = $(this).find('input[name=tovar-price]').val() * 1;

        $(this).find('.summ-row span').html( count * price ) ;

        summ+= count * price;

    });

    $('.summ-row-wrap .itog .summ span').html( summ );

}

$(document).ready(function(){

    if ( $('#map').length ){
        initMap();
    }

    if ( $('.partners-wrap').length ){

        $('.partners-wrap .slider-partner').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            nextArrow: '<button type="button" class="slick-next" > <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"> <g> <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264  c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168  c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413  c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864 c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/ </g></svg></button>',
            prevArrow:'<button type="button" class="slick-prev" > <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 444.531 444.531" style="enable-background:new 0 0 444.531 444.531;"  xml:space="preserve"> <g> <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835   l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425   c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978   L213.13,222.409z"/></g> </svg> </button>',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
              
    }

    if( $('.hot-wrap').length ){
        $('.hot-wrap .list-items').slick({
            infinite: true,
            slidesToShow: 4,
            centerMode: false,            
            slidesToScroll: 1,
            swipeToSlide: true,
            dots: false,
            arrows: true,
            nextArrow: '<div class="next-arr"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"> <g> <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264  c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168  c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413  c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864 c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/> </g></svg></div>',
            prevArrow:'<div class="prew-arr"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 444.531 444.531" style="enable-background:new 0 0 444.531 444.531;"  xml:space="preserve"> <g> <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835   l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425   c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978   L213.13,222.409z"/></g> </svg> </div>',
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1
                    }
                }
            ]
        });


        $('#towar-filter').on('change', function(){
            var filterValue = $(this).val();
            $('.hot-wrap .list-items').slick('slickUnfilter');
            $('.hot-wrap .list-items').slick('slickFilter', filterValue );
        });
    }

    $("select").select2();

    /* main menu */

        $('.hidden-search').on('click', function( e ){

            e.preventDefault();
            if ( $('.form-search').hasClass('open') ){
                $('.form-search').removeClass('open');
            } else {
                $('.form-search').addClass('open');
            }
            
        });

        $('.hidden-menu').on('click', function(){

            if ( $('.global-wrapper').hasClass('translated') ){

                $('.global-wrapper').removeClass('translated');
                $('#hidden-menu').removeClass('translated');
                $('.overflower').removeClass('lock');

            } else {
                $('.global-wrapper').addClass('translated');
                $('#hidden-menu').addClass('translated');
                $('.overflower').addClass('lock');
            }

        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<920-$.scrollbarWidth()){

                if (!$('.form-search').is(event.target) && $('.form-search').has(event.target).length === 0 && !$('.hidden-search').is(event.target) && $('.hidden-search').has(event.target).length === 0 && $('.form-search').hasClass('open') )
                {
                    $('.form-search').removeClass('open');
                }

            }

            if($(window).width()<920-$.scrollbarWidth()){
                
                if (!$('#hidden-menu').is(event.target) && $('#hidden-menu').has(event.target).length === 0 && !$('.hidden-menu').is(event.target) && $('.hidden-menu').has(event.target).length === 0 && $('.overflower').hasClass('lock') )
                {
                    $('.global-wrapper').removeClass('translated');
                    $('#hidden-menu').removeClass('translated');
                    $('.overflower').removeClass('lock');
                }

            }


        });

    /* main menu */

    /* paginator fix for D */

        if ( $('.paginator-wrap').length ){
            
            if( $('.paginator-wrap .prew').length ){
                $('.paginator-wrap .prew').html('<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 444.531 444.531" style="enable-background:new 0 0 444.531 444.531;"  xml:space="preserve"> <g> <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835   l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425   c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978   L213.13,222.409z"/></g> </svg>');
            }

            if( $('.paginator-wrap .next').length ){
                $('.paginator-wrap .next').html('<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"> <g> <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264  c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168  c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413  c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864 c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/> </g></svg>');
            }
        }

    /* paginator fix for D */

    /* filter */

        if ( $('.filter-wrap').length ){
            $('.filter-list .head-row').on('click', function(){
                if ( $(this).hasClass('hide') ){
                    $(this).closest('.row').find('.contet-row').slideDown(300);
                    $(this).removeClass('hide')
                } else {
                    $(this).closest('.row').find('.contet-row').slideUp(300);
                    $(this).addClass('hide')
                }
            });

            $('.more .flip').on('click', function(){
                $(this).closest('.has-more').find('.hide').slideDown(300);
                $(this).closest('.more').slideUp(300);
                $(this).closest('.has-more').find('.less').slideDown(300);
            });

            $('.less .flip').on('click', function(){
                $(this).closest('.has-more').find('.hide').slideUp(300);
                $(this).closest('.less').slideUp(300);
                $(this).closest('.has-more').find('.more').slideDown(300);
            });

            /* slider */
                var slider = document.getElementById('bottomer-slider');

                var min = $('#bottomer-slider').attr('data-min-price')*1;
                var max = $('#bottomer-slider').attr('data-max-price')*1;

                var startMin = $('.filter-list input[name=price-from]').val() * 1;
                var startMax = $('.filter-list input[name=price-to]').val() * 1 ;
                
                noUiSlider.create(slider, {
                    start: [ startMin, startMax ],
                    connect: true,
                    step: 1,
                    range: {
                        'min': min,
                        'max': max
                    }
                });

                slider.noUiSlider.on('update', function( values, handle ){

                    $('.filter-list input[name=price-from]').val( Math.round( values[0] ) ) ;
                    $('.filter-list input[name=price-to]').val( Math.round( values[1] ) ) ;

                });

                $('.filter-list input[name=price-to]').on('change', function(){
                    slider.noUiSlider.set([ $('.filter-list input[name=price-from]').val() , this.value  ]);
                });

                $('.filter-list input[name=price-from]').on('change', function(){
                    slider.noUiSlider.set([this.value, $('.filter-list input[name=price-to]').val() ]);
                });
            /* slider */

            $('.catalog-list-wrap .hidden-filter').on('click', function(){

                if( $('.content-page .siders').hasClass('translated') ){
                    $('.content-page .siders').removeClass('translated');
                } else {
                    $('.content-page .siders').addClass('translated');
                }

            });

        }

    /* filter */

    /* cart */
        if ( $('.content-cart').length ){

            $('.counter .plus').on('click', function(){

                var curr = $(this).closest('.counter').find('input[name=count]').val() * 1;

                if ( Number.isInteger(curr) ){
                    $(this).closest('.counter').find('input[name=count]').val( curr + 1 );
                } else {
                    $(this).closest('.counter').find('input[name=count]').val( 1 );
                }

                updatePriceCart();

            });
            $('.counter .minus').on('click', function(){
                
                var curr = $(this).closest('.counter').find('input[name=count]').val() * 1;

                if ( Number.isInteger(curr) ){

                    if ( curr < 2 ){
                        $(this).closest('.counter').find('input[name=count]').val( 1 );
                    } else {
                        $(this).closest('.counter').find('input[name=count]').val( curr - 1 );
                    }
                } else {
                    $(this).closest('.counter').find('input[name=count]').val( 1 );
                }

                updatePriceCart();

            });

            $('.deleter').on('click', function(){

                if ( $('.table-items tbody tr').length == 1 ){
                    $('.table-items table').fadeOut(300, function(){
                        $('.empty-cart').fadeIn(300);
                        $('.summ-row-wrap').fadeOut(300);
                        $('.next-step').addClass('disabled');
                    });
                }

                $(this).closest('tr').fadeOut(300, function(){
                    $(this).remove();
                    updatePriceCart();
                });

            });

            $('input[name=count]').on('change', function(){
                updatePriceCart();
            });

            $('.next-step').on('click', function(e){
                e.preventDefault();
                var curr = $('.list-steps').find('.item.active').index();
                
                if ( curr == 0 ){
                    $('.list-steps .item').removeClass('active');
                    $('.list-steps .item').eq(1).addClass('active');
                    $('.step1').slideUp(300);
                    $('.step2').slideDown(300);
                }

                if ( curr == 1 ){
                    $('.step2 form').submit();
                }

            });

        }
        

    /* cart */

});

$(window).on('load', function(){

});

$(window).resize(function(){

});