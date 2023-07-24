function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOffset(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function performSwipe() {
  try {
    i++;

    var xOffset = getRandomOffset(-50, 50); // 在 x 轴上添加随机偏移，范围为 -50 到 50 像素
    var yOffset = getRandomOffset(-50, 50); // 在 y 轴上添加随机偏移，范围为 -50 到 50 像素

    // 获取屏幕尺寸
    var screenWidth = device.width;
    var screenHeight = device.height;

    // 确认滑动的起始位置和目标位置在屏幕范围内
    var startX = 500 + xOffset;
    var startY = i % 2 ? 2000 + yOffset : 2050 + yOffset;
    var endX = 500 + xOffset;
    var endY = i % 2 ? 500 + yOffset : 400 + yOffset;

    startX = Math.max(0, Math.min(screenWidth - 1, startX));
    startY = Math.max(0, Math.min(screenHeight - 1, startY));
    endX = Math.max(0, Math.min(screenWidth - 1, endX));
    endY = Math.max(0, Math.min(screenHeight - 1, endY));

    swipe(startX, startY, endX, endY, 600);
  } catch (error) {
    console.error("滑动出错:", error.message);
    // 如果需要，可以进行其他的错误处理，比如重新执行滑动操作
    // 例如：performSwipe();
  }
}

var i = 0;
var baseInterval = 15000; // 基准时间间隔，单位：毫秒

setInterval(function() {
  performSwipe();

  // 随机化时间间隔
  var randomInterval = getRandomInterval(baseInterval - 5000, baseInterval + 5000);
  setTimeout(function() {
    performSwipe();
  }, randomInterval);
}, baseInterval);
