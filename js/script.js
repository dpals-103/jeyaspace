$(document).ready(function () {
    
    //--메뉴 클릭 시 해당 섹션으로 스크롤--//

    const s1 = $('#home').offset()
    const s2 = $('#about').offset()
    const s3 = $('#works').offset();
    const s4 = $('#qna').offset();
    const s5 = $('#contact').offset();

    //01-메인으로
    $('#goHome').on('click',function(){
        $('html').animate({scrollTop:s1.top},700);
    });

    //02-소개페이지로
    $('#goAbout').on('click',function(){
        $('html').animate({scrollTop:s2.top},700);
    });

    //03-포트폴리오로
    $('#goWorks').on('click',function(){
        $('html').animate({scrollTop:s3.top},700);
    });

    //04 - 큐엔에이로
    $('#goQna').on('click',function(){
        $('html').animate({scrollTop:s4.top},700);
    });

    //05 - 연락처로
    $('#goContact').on('click',function(){
        $('html').animate({scrollTop:s5.top},700);
    });




    //--qna : 질문 클릭했을 때 이벤트 발생--//
    $('#question1').on('click',function(){
        $('.chat_list').append(' <li class="question q1"><div class="msg_box"></div></li>');

        setTimeout(function(){
            $('.chat_list').find('li:last-child').addClass('action');
        },10);

        setTimeout(function(){
            $('.chat_list').append(' <li class="answer a1"><figure class="mark"></figure><div class="msg_box"></div></li>');
        },1000);

    });
});
