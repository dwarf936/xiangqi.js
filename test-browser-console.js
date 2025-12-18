// 测试Xiangqi.js库
const Xiangqi = require('./xiangqi.js').Xiangqi;

console.log('=== Testing Xiangqi.js ===');

// 创建游戏实例
const game = new Xiangqi();
console.log('Game created successfully');

// 测试moves()方法
console.log('Available moves:', game.moves());

// 测试get()方法
console.log('Testing get() method:');
const testSquares = ['a9', 'b9', 'c9', 'd9', 'e9', 'i0', 'h0', 'e0'];
for (let square of testSquares) {
  const piece = game.get(square);
  console.log(`  ${square}:`, piece);
}

// 测试put()方法
console.log('Testing put() method:');
const putResult = game.put({ type: 'r', color: 'r' }, 'a1');
console.log(`  Put rook at a1:`, putResult);
console.log(`  Get rook at a1:`, game.get('a1'));

console.log('=== Test completed ===');