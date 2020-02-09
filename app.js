// alert("ああああ")
// domそうさ

// $("#a").html("変化した");
// $("#a").fadeOut(3000);
// $("#a").fadeIn(3000);

// fadein使う場合初めから消す


// イベントクリックされたら何かする
$("#a").on("click", function(){

    $("#a").html("変化した");
    $("#a").fadeOut(3000);
    $("#a").fadeIn(3000);
    $("#a").css("color", "pink")

    // この下消しちゃダメ
});

$(".b").on("click", function(){

    var omikuji = Math.floor( Math.random() *5);
    if (omikuji == 0){
        $(".b").html('<img src="img/daikichi.png" >');
        // $(".b").css("color", "red");
    }else if(omikuji == 1){
        $(".b").html("中吉");
        $(".b").css("color", "pink");
    }else if(omikuji == 2){
        $(".b").html("小吉");
        $(".b").css("color", "blue");
    }else if(omikuji == 3){
        $(".b").html("吉");
        $(".b").css("color", "green");
    }else if(omikuji == 4){
        $(".b").html("凶");
        $(".b").css("color", "yellow");
    }


});


// グーを選んだ場合

$(".guu").on("click", function(){

   $("#jankenpon").get(0).play()
    
    setTimeout(function(){

    var jibun = 1
    var janken = Math.floor( Math.random() *3);
   
    if(janken   == 0){
        $(".aite").html('<img src="img/グー.png">');
    }else if(janken  == 1){
        $(".aite").html('<img src="img/チョキ.png">');
        $(".aite img").css("height", "170px")
    }else if(janken  == 2){
        $(".aite").html('<img src="img/パー.png">');
        $(".aite img").css("height", "170px")
    }if(jibun + janken == 1){
        var judge = "アイコです"
    }if(jibun + janken == 2){
        var judge = "勝ちー！！"
    }if(jibun + janken == 3){
        var judge = "残念負けです・・・"
    }

    $(".kekka").html("結果は" + judge)

    },1000);
});



// チョキの場合
$(".choki").on("click", function(){

    $("#jankenpon").get(0).play()
    
    setTimeout(function(){

    var jibun = 2
    var janken = Math.floor( Math.random() *3);
   
    if(janken   == 0){
        $(".aite").html('<img src="img/グー.png">');
    }else if(janken  == 1){
        $(".aite").html('<img src="img/チョキ.png">');
        $(".aite img").css("height", "170px")
    }else if(janken  == 2){
        $(".aite").html('<img src="img/パー.png">');
        $(".aite img").css("height", "170px")
    }if(jibun + janken == 3){
        var judge = "アイコです"
    }if(jibun + janken == 4){
        var judge = "勝ちー！！"
    }if(jibun + janken == 2){
        var judge = "残念負けです・・・"
    }

    $(".kekka").html("結果は" + judge)
    },1000);
});


// パーの場合
$(".paa").on("click", function(){

    $("#jankenpon").get(0).play()
    
    setTimeout(function(){

    var jibun = 3
    var janken = Math.floor( Math.random() *3);
   
    if(janken   == 0){
        $(".aite").html('<img src="img/グー.png">');
    }else if(janken  == 1){
        $(".aite").html('<img src="img/チョキ.png">');
        $(".aite img").css("height", "170px")
    }else if(janken  == 2){
        $(".aite").html('<img src="img/パー.png">');
        $(".aite img").css("height", "170px")
    }if(jibun + janken == 5){
        var judge = "アイコです"
    }if(jibun + janken == 3){
        var judge = "勝ちー！！"
    }if(jibun + janken == 4){
        var judge = "残念負けです・・・"
    }

    $(".kekka").html("結果は" + judge)

    },1000);
});


$(".game-start").on("click", function(){

    // $("game-start").css("opacity" ,"0");
    // $("game-start").css("height","0px");

    $("#saisho").get(0).play()
    
    setTimeout(function(){

    $(".game-start").css("display","none");
    $(".janken-game").fadeIn("2000");
    
    },800);

});

$(".janken-game").css("display","none");

// $(function (){
//     $(".game-start").on("click", function(){

//         $("saisho").play();
    
//     });

// });


$(function(){

    $(".rogo img").hover(
        function() {

        $(".rogo img").attr('src','img/ロゴ2.jpg');
        $(".rogo img").css("width" ,"50%");

    },function(){
        $(".rogo img").attr('src','img/ゲームスタートロゴ.jpg');
        $(".rogo img").css("width" ,"50%");
    });
});