// a function that gets called when the page is loaded
window.onload = function() {
    var cfInstance = cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("myform"),
        context: document.getElementById("cf-context"),
    });
}