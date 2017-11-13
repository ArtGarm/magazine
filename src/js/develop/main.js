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

});

$(window).on('load', function(){

});

$(window).resize(function(){

});