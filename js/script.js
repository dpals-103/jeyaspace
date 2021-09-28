$(document).ready(function () {

    //--메뉴 클릭 시 해당 섹션으로 스크롤--//

    const s1 = $('#home').offset();
    const s2 = $('#about').offset();
    const s3 = $('#works').offset();
    const s4 = $('#qna').offset();
    const s5 = $('#contact').offset();

    //01-메인으로
    $('#goHome').on('click', function () {
        $('html').animate({
            scrollTop: s1.top
        }, 700);
    });

    //02-소개페이지로
    $('#goAbout').on('click', function () {
        $('html').animate({
            scrollTop: s2.top
        }, 700);
    });

    //03-포트폴리오로
    $('#goWorks').on('click', function () {
        $('html').animate({
            scrollTop: s3.top
        }, 700);
    });

    //04 - 큐엔에이로
    $('#goQna').on('click', function () {
        $('html').animate({
            scrollTop: s4.top
        }, 700);
    });




    //05 - 연락처로
    $('#goContact').on('click', function () {
        $('html').animate({
            scrollTop: s5.top
        }, 700);
    });



    // --qna 스크롤 설정//

    $('.chat_list').slimScroll({
        height: '660px',
        color: '#749349',
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

        }, 1050);
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
