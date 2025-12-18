// 测试FEN字符串验证的Node.js脚本
const { Xiangqi } = require('./xiangqi.js');

// 残局列表
const ENDGAMES = {
    '1': '3k5/9/3R5/9/9/9/9/9/9/4K4 r - - 0 1',
    '2': '3k5/9/3R1R3/9/9/9/9/9/9/4K4 r - - 0 1',
    '3': '3k5/9/3R5/9/9/3N5/9/9/9/4K4 r - - 0 1',
    '4': '3k5/9/3R5/9/9/3C5/9/9/9/4K4 r - - 0 1'
};

console.log('测试FEN字符串验证结果：\n');

// 测试每个残局的FEN字符串
for (let id in ENDGAMES) {
    const fen = ENDGAMES[id];
    console.log(`=== 残局 ${id} ===`);
    console.log(`FEN: ${fen}`);
    
    // 创建Xiangqi对象实例
    const game = new Xiangqi(fen);
    
    console.log(`游戏结束: ${game.game_over()}`);
    console.log(`将军: ${game.in_check()}`);
    console.log(`将死: ${game.in_checkmate()}`);
    console.log(`可用走法: ${game.moves().length}`);
    console.log('\n');
}
