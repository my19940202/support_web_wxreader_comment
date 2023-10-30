function main() {
    console.log("this is content-script", document.body);
    const h1 = document.createElement("h1");
    h1.innerText = "this is content-script";
    document.body.append(h1);
}
main();

// content给后台发送消息
function sendMessageToBackground(msg, callback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (callback) {
            callback(response);
        }
    });
}

// content发送消息并等待消息返回
const cookie = document.cookie;
const msg = {
    type: "cookie",
    data: document.cookie,
};

sendMessageToBackground(msg, (response) => {
    console.log(response);
});
