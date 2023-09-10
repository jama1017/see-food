// a function that gets called when the page is loaded
window.onload = function () {
    var cfInstance = cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("myform"),
        context: document.getElementById("cf-context"),
        userImage: "assets/img/user_image.png",
        robotImage: "assets/img/robot_image.png",
        // theme: "dark",
        // loadExternalStyleSheet: false,
        preventAutoFocus: true,
    });
}