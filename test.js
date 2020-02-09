// alert(111);
console.log("はじめてのジャヴァスクリプト");
// syntaxエラーの時は打ち間違い
console.log(23+5);
console.log(2000-1800);
console.log("18+5");

// 変数のおさらい
// 変数とは収納できる箱のイメージ
// 変数名（箱の名前）はpointになっている
var point = 70;

// ブラウザでは90と表示される
console.log(point);

// 箱の名前はmoji
// 箱の中身は「文字列が入っている」
// console.log()で表示

var moji = "文字列が入っている"

console.log(moji)



var point = 90;


if(point >= 100){

    console.log("素晴らしい！おめでとう！");
}else if(point >=90){
    console.log("もっとがんばりましょう");
}else if(point >= 80){
    console.log("完璧です！");
}else if(point >= 70){
    console.log("おしい");
}

// else if で条件増やせる
// 最後はelseかくとそれ以外になる


// ランダムな数が作られる（生成される）
// 0,1,2,3,4の5パターン（プログラムをカウントする際は0から）
var random = Math.floor( Math.random() *5);
console.log(random);

// 1から始めたいときはMath.floor( Math.random() *5 +1);



// おみくじ
var omikuji = Math.floor( Math.random() *5);

if (omikuji == 0){
    console.log("大吉")
}else if(omikuji == 1){
    console.log("中吉")
}else if(omikuji == 2){
    console.log("小吉")
}else if(omikuji == 3){
    console.log("吉")
}else if(omikuji == 4){
    console.log("凶")
}


// 


