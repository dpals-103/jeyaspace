$(document).ready(function () {

    const s1 = $('#home').offset().top;
    const s2 = $('#about').offset().top;
    const s3 = $('#works').offset().top;
    const s4 = $('#qna').offset().top;
    const s5 = $('#contact').offset().top;

    //스크롤 감지 애니메이션//
    $(window).on('scroll',function(){

        const location = $(this).scrollTop();
        const scrolling = $(this).scrollTop() + 400;
    

        if( scrolling > s2 ){
            $('.about_1>div').addClass('on_1');
            $('.about_1>ul').addClass('on_2');
        }else{
            $('.about_1>div').removeClass('on_1');
            $('.about_1>ul').removeClass('on_2');
        }

        if( scrolling > s4 ){
            $('li.greeting').addClass('action_2');
        }else{
            $('.chat_list li').removeClass('action_1');
            $('.chat_list li').removeClass('action_2');
        }

    });



    //--메뉴 클릭 시 해당 섹션으로 스크롤--//
    

    //01-메인으로
    $('#goHome').on('click', function () {
        $('html').animate({
            scrollTop: s1
        }, 700);
    });

    //02-소개페이지로
    $('#goAbout').on('click', function () {
        $('html').animate({
            scrollTop: s2
        }, 700);
    });

    //03-포트폴리오로
    $('#goWorks').on('click', function () {
        $('html').animate({
            scrollTop: s3
        }, 700);
    });

    //04 - 큐엔에이로
    $('#goQna').on('click', function () {
        $('html').animate({
            scrollTop: s4
        }, 700);
    });

    //05 - 연락처로
    $('#goContact').on('click', function () {
        $('html').animate({
            scrollTop: s5
        }, 700);
    });




    //슬라이드

    var slideList = document.querySelector('.slide-list'),
    slide = document.querySelectorAll('.slide-list li'),
    slideCount = slide.length,
    slideWidth = 320,
    slideMargin = 40,
    currenIndex = 0,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    listClone();

    var currentSlide = document.querySelectorAll('.slide-list li');
        var firstIdx = currenIndex ;
        var firstSlide =  slide[firstIdx];
        var prevSlide =  slide[firstIdx - 1];

        firstSlide.classList.add('active');

    function listClone(){
        for (var i = 0; i < slideCount; i++ ){
            
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');

            slideList.appendChild(cloneSlide);
        }
        for (var i = slideCount - 1; i >=0; i-- ){

            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');

            slideList.prepend(cloneSlide);
        }
        updateWidth();
        setInitial(); 
        setTimeout(function(){
            slideList.classList.add('active');
        },100)
        
    }

    function updateWidth(){
        var currentSlide = document.querySelectorAll('.slide-list li');
        var newSlideCount = currentSlide.length;

        var listWidth = (slideWidth + slideMargin) * newSlideCount + 'px';
        slideList.style.width = listWidth;
    }

    function setInitial(){

        var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;

        slideList.style.transform = 'translateX('+initialTranslateValue + 'px)';
    }


    nextBtn.addEventListener('click',function(){
        slider(currenIndex + 1);
    });
    
    prevBtn.addEventListener('click',function(){
        slider(currenIndex - 1);
    });


    function slider(num){
        slideList.style.left = -num * (slideWidth + slideMargin) + 'px';
        currenIndex = num;        

        var currentSlide = document.querySelectorAll('.slide-list li');
        var firstIdx = currenIndex ;
        var firstSlide =  slide[firstIdx];
        var prevSlide =  slide[firstIdx - 1];

        if (firstIdx < 0){
            firstSlide = slide[-firstIdx]
        } else if (firstIdx == slideCount){
            firstSlide = slide[0];
        }

        // setTimeout(function(){
        //     prevSlide.classList.remove('active');
        // },50);

        prevSlide.classList.remove('active');
        
        if (currenIndex == slideCount || currenIndex == -slideCount){
            setTimeout(function(){
                slideList.classList.remove('active');
                slideList.style.left = '0px';
                currenIndex = 0;
            },500);
            setTimeout(function(){
                slideList.classList.add('active');
            },600);
        }

        setTimeout(function(){
            firstSlide.classList.add('active');
        },0);
        
    }

    // function slideScale(num){

    //     var currentSlide = document.querySelectorAll('.slide-list li');
    //     var firstIdx = currenIndex ;
    //     var firstSlide =  slide[firstIdx];
    //     var prevSlide =  slide[firstIdx - 1];

    //     if (firstIdx < 0){
    //         firstSlide = slide[-firstIdx]
    //     } else if (firstIdx == slideCount){
    //         firstSlide = slide[0];
    //     }

       

    //     setTimeout(function(){
    //         firstSlide.classList.add('active');
    //     },0)
    //     setTimeout(function(){
    //         prevSlide.classList.remove('active');
    //     },100)
    // }


    // --qna 채팅창 슬림스크롤 적용//
    $('.chat_list').slimScroll({
<<<<<<< HEAD
        height: '540px',
=======
        height: '710px',
>>>>>>> 4001e5e8d6281a65cf47c9515e3b0f6a5962f4e4
        color: '#f6f6f6',
        wheelStep: 10
    });



    
    //--qna : 질문 클릭했을 때 이벤트 발생--//

    function act_1() {
        setTimeout(function () {
            $('.chat_list').find('li:last-child').addClass('action_1');


            var bottomCord = $('.chat_list')[0].scrollHeight;

            $('.chat_list').slimScroll({
                scrollTo: bottomCord + 'px'
            });

        }, 10);
    }

    function act_2() {
        setTimeout(function () {
            $('.chat_list').find('li:last-child').addClass('action_2');


            var bottomCord = $('.chat_list')[0].scrollHeight;

            $('.chat_list').slimScroll({
                scrollTo: bottomCord + 'px'
            });

        }, 1010);
    }




    //1
    $('#question1').on('click', function () {
        //질문글 추가
        $('.chat_list').append('<li class="question q1"><div class="msg_box"></div></li>');

        //질문글에 css 효과 클래스 추가
        act_1();

        //답변글 추가
        setTimeout(function () {
            $('.chat_list').append('<li class="answer a1"><div class="selfie"></div><div class="msg_box"></div></li>');
        }, 1000);

        //답변글에 css 효과 클래스명 추가
        act_2();
    });

    //2
    $('#question2').on('click', function () {
        //질문글 추가
        $('.chat_list').append(' <li class="question q2"><div class="msg_box"></div></li>');

        //질문글에 css 효과 클래스 추가
        act_1();

        //답변글 추가
        setTimeout(function () {
            $('.chat_list').append('<li class="answer a2"><div class="selfie"></div><div class="msg_box"></div></li>');
        }, 1000);

        //답변글에 css 효과 클래스명 추가
        act_2();

    });

    //3
    $('#question3').on('click', function () {
        //질문글 추가
        $('.chat_list').append(' <li class="question q3"><div class="msg_box"></div></li>');

        //질문글에 css 효과 클래스 추가
        act_1();

        //답변글 추가
        setTimeout(function () {
            $('.chat_list').append('<li class="answer a3"><div class="selfie"></div><div class="msg_box"></div></li>');
        }, 1000);

        //답변글에 css 효과 클래스명 추가
        act_2();
    });
});
