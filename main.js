let CANVAS_WIDTH = 600; //canvasの幅
let CANVAS_HEIGHT = 600; //canvasの高さ

let BLOCK_WIDTH = 4; //ブロックの領域幅
let BLOCK_HEIGHT = 4; //ブロックの領域高さ

let FIELD_WIDTH = 12; //フィールドの幅
let FIELD_HEIGHT = 22;　//フィールドの高さ

let FIELD_X = 40;　//フィールドのcanvas内のX座標
let FIELD_Y = 40;　//フィールドのcanvas内のY座標

let KEY_RIGHT		= 0; // 右キー
let KEY_LEFT		= 1; // 左キー
let KEY_UP			= 2; // 上キー
let KEY_DOWN		= 3; // 下キー
let KEY_SPACE		= 4; // スペースキー
var key = Array(5); // キー判定用変数
key[KEY_RIGHT]	= 0;
key[KEY_LEFT]	= 0;
key[KEY_UP]		= 0;
key[KEY_DOWN]	= 0;
key[KEY_SPACE]	= 0;

let block = [ // ブロックの定義
  [	//	block type 0
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
  
  [	//	block type 1
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 1,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 1,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
    ],
  ],
  
  [	//	block type 2
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 1,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 1,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
  
  [	//	block type 3
    [
      [0, 0, 0, 0,],
      [1, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 0, 0,],
      [1, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
  
  ],
  
  [	//	block type 4
    [
      [0, 0, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 1, 1,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [1, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
  
  [	//	block type 5
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 0,],
      [1, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 1,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
  ],
  
  [	//	block type 6
    [
      [0, 0, 0, 0,],
      [0, 1, 1, 1,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 0, 0, 0,],
      [0, 0, 1, 0,],
      [0, 1, 1, 1,],
      [0, 0, 0, 0,],
    ],
    [
      [0, 1, 0, 0,],
      [0, 1, 1, 0,],
      [0, 1, 0, 0,],
      [0, 0, 0, 0,],
    ],
  ],
];

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var field;

var btype, brot;
var bx, by;
var cnt;

function init() {
  cnt = 1; //カウンタ変数

  field = [ //fieldの内容
    //壁を9とする。何もないマスは0とする。
    [9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
  ];

  bx = 4; //ブロックのX座標（マス）
  by = 0; //ブロックのY座標（マス）
  btype = 3; //ブロックの種類
  brot = 0; //ブロックの回転種類
}

// キー操作関数
function keyCtrl() {
  if(key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1) {
    bx += key[KEY_RIGHT] - key[KEY_LEFT]; //横移動

    var breakflag = false;
    for(var i = 0; i < BLOCK_HEIGHT; i++) {
      for(var j = 0; j < BLOCK_WIDTH; j++) {
        // 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
					by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				// 当たり判定
				if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
					bx -= key[KEY_RIGHT] - key[KEY_LEFT]; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
      }
      if(breakflag) break;
    }
    //キーの状態を更新
    if(key[KEY_RIGHT] == 1) key[KEY_RIGHT]++;
    else if(key[KEY_LEFT] == 1) key[KEY_LEFT]++;
  }

  if(key[KEY_DOWN] <=1 && key[KEY_UP] <= 1) {
    brot += key[KEY_DOWN] - key[KEY_UP]; //回転
    if(brot < 0)brot = 3;
    else if(brot > 3)brot = 0;

    var breakflag = false;
    for(var i = 0; i < BLOCK_HEIGHT; i++) {
      for(var j = 0; j < BLOCK_WIDTH; j++) {
        //配列番号がおかしかったら処理しない
        if(bx + j < 0 || by + i >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT)continue;

        //当たり判定
        if((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) ||
        (block[btype][brot][i][j] == 1 && by + i < 0)) {
          brot -= key[KEY_DOWN] - key[KEY_UP]; //回転を戻す
          if(brot < 0)brot = 3;
          else if(brot > 3)brot = 0;
          breakflag = true; //ループを抜ける
          break;
        }
      }
      if(breakflag)break;
    }

    //キーの状態を更新
    if(key[KEY_DOWN] == 1) key[KEY_DOWN]++;
    else if(key[KEY_UP] == 1) key[KEY_UP]++;

  }
}

//更新関数
function update() {
  if(cnt % 30 == 0) {
    by++; //ブロックを１マス落下

    var breakflag = false;
    for(var i = 0; i < BLOCK_HEIGHT; i++) {
      for(var j = 0; j < BLOCK_WIDTH; j++) {
        //配列番号がおかしい場合は処理しない
        if(bx + j < 0 || bx + j >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT)continue;

        //同じ座標にブロックとブロック・壁が重なった場合
        if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
					by--; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
      }
      if(breakflag) break;
    }
  }
}

//落下ブロックの描画
function drawBlock() {
  context.fillStyle = "rgba(255, 100, 100, 1.0)"; //赤色に設定

  //ブロックを描画
  for(var i = 0; i < BLOCK_HEIGHT; i++) {
    for(var j = 0; j < BLOCK_WIDTH; j++) {
      if(block[btype][brot][i][j] == 1) {
        context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
      }
    }
  }
}

//	フィールド描画
function drawField() {
	for(var i = 0;i < FIELD_HEIGHT;i++) {
		for(var j = 0;j < FIELD_WIDTH;j++) {
			if(field[i][j] == 0) continue; // 「０」なら描画しない
			
			context.fillStyle = "rgba(150, 150, 150, 1.0)"; // グレーに設定
			context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25); // 25×25の矩形（マス）を描画
		}
	}
}
  
//フィールドの枠描画
function drawFrame() {
  context.fillStyle = "rgba(230; 230, 230, 1.0)";

  //縦線を描画
  for(var i = 0; i < FIELD_WIDTH + 1; i++) {
    context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_HEIGHT);
  }

  //	横線を描画
  for(var i = 0;i < FIELD_HEIGHT + 1;i++) {
    context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_WIDTH, 1);
  }
}

document.addEventListener("keydown", e => { //キー押下処理
  var keyCode = e.keyCode; //キーコードの取得

  switch(keyCode) {
    case 39: key[KEY_RIGHT]++; break;
    case 37: key[KEY_LEFT]++; break;
    case 38: key[KEY_UP]++; break;
    case 40: key[KEY_DOWN]++; break;
    case 32: key[KEY_SPACE]++; break;
  }
});

document.addEventListener("keyup", e => { //キー離上
  var keyCode = e.keyCode; // キーコードの取得

  switch(keyCode) {
    case 39: key[KEY_RIGHT]	= 0; break;
    case 37: key[KEY_LEFT]	= 0; break;
    case 38: key[KEY_UP]	= 0; break;
    case 40: key[KEY_DOWN]	= 0; break;
    case 32: key[KEY_SPACE]	= 0; break;
  }
})

init();//初期化

requestAnimationFrame(main);
function main() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  keyCtrl(); // キー操作
  update(); //更新

  drawBlock(); //ブロックを描画
  drawField(); //フィールドを描画
  drawFrame(); //フィールド枠を描画

  cnt++; //カウンタを更新

  requestAnimationFrame(main);
}