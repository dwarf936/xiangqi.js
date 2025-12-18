// 测试FEN字符串的有效性
const fs = require('fs');

// 读取并评估xiangqi.js文件
const xiangqiCode = fs.readFileSync('./xiangqi.js', 'utf8');
eval(xiangqiCode);

// 测试默认开局
console.log('=== Testing default position ===');
const defaultGame = new Xiangqi();
console.log('Default game created successfully');
console.log('Default game turn:', defaultGame.turn());
console.log('Default game moves:', defaultGame.moves().slice(0, 10), '...');

// 测试我们的残局FEN
console.log('\n=== Testing endgame FEN ===');
const endgameFEN = '4k4/4a4/9/9/9/9/9/9/4P4/4R1K1 r - - 0 1';
console.log('Testing FEN:', endgameFEN);

// 尝试加载FEN
const endgameGame = new Xiangqi(endgameFEN);
console.log('Endgame game created successfully');
console.log('Endgame game turn:', endgameGame.turn());
console.log('Endgame game moves:', endgameGame.moves());

// 测试get()方法
console.log('\n=== Testing get() method ===');
const squaresToTest = ['e1', 'e9', 'e3', 'd1'];
for (const square of squaresToTest) {
  const piece = endgameGame.get(square);
  console.log(`Piece at ${square}:`, piece);
}