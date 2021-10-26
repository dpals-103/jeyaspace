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




    // --qna 채팅창 슬림스크롤 적용//
    $('.chat_list').slimScroll({
        height: '630px',
        color: '#80AEB1',
        railOpacity: 0.5,
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
            $('.chat_list').append('<li class="answer a1"><div class="msg_box"></div></li>');
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
            $('.chat_list').append('<li class="answer a2"><div class="msg_box"></div></li>');
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
            $('.chat_list').append('<li class="answer a3"><div class="msg_box"></div></li>');
        }, 1000);

        //답변글에 css 효과 클래스명 추가
        act_2();
    });
});
