window.onload = function () {
    const myForm = document.getElementById("myform");
    const cfContext = document.getElementById("cf-context");
    cfContext.style.display = "none";

    const bodyEle = document.getElementsByTagName("body")[0];
    bodyEle.style.backgroundColor = "#0183FF";

    const openingImgs = document.getElementsByClassName("opening-img");
    [...openingImgs].forEach((img) => { img.style.display = "none"; });
    const animationTime = 500;

    const openForm = () => {
        console.log("Animation ended");
        bodyEle.style.backgroundColor = "#B1C8E3";
        cfContext.style.display = "block";
        var cfInstance = cf.ConversationalForm.startTheConversation({
            formEl: document.getElementById("myform"),
            context: document.getElementById("cf-context"),
            userImage: "assets/img/user_image.png",
            robotImage: "assets/img/robot_image.png",
            // theme: "dark",
            // loadExternalStyleSheet: false,
            preventAutoFocus: true,
        });
    };

    let currIndex = 0;
    let animateOpening = () => {
        [...openingImgs].forEach((img) => { img.style.display = "none"; });
        openingImgs[currIndex].style.display = "block";
        currIndex++;

        if (currIndex == openingImgs.length) {
            clearInterval(animateInterval);
            setTimeout(() => {
                openingImgs[currIndex - 1].style.display = "none";
                openForm();
            }, animationTime * 3);
        }
    }

    const animateInterval = setInterval(animateOpening, animationTime);
}