// a function that gets called when the page is loaded
window.onload = function() {
    var cfInstance = cf.ConversationalForm.startTheConversation({
        // theme: "dark",
        formEl: document.getElementById("myform"),
        context: document.getElementById("cf-context"),
        preventAutoFocus: true,
        // loadExternalStyleSheet: false,
    });
}