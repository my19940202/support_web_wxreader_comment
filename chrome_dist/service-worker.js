// service woker环境无法访问dom
function main() {
    console.log("this is xsb_chrome_ext_learning service worker running");
}
main();

// background 接收到消息后处理
chrome.runtime.onMessage.addListener((request, render, sendResponse) => {
    console.log("onMessage", request, render);
    if (request.type === "cookie") {
        // 一些异步消息的处理
        // 假设在handler回调之后没有做 return ture; 处理？而且该代码块是一段时间较长异步操作，sendResponse()返回将会报错，不能正确返回到调用处
        sendResponse("reslut"); // 因为return true;这里可以异步处理消息后返回
        console.log("onMessage", request.data);
    }
    return true; // 重点是这一个 返回true：允许返回异步消息
});
