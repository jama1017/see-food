let cfInstance = null;
let dispatcher = new cf.EventDispatcher();
dispatcher.addEventListener(cf.FlowEvents.FLOW_UPDATE, function (event) {
    let eventID = event.detail.tag.id
    console.log("THISS  " + event.detail.tag.id);
    // console.log(window.ConversationalForm.flowManager.activeConditions);
    // console.log(event.detail)
    if (eventID) {
        let eventType = eventID.split("-").slice(-1)
        if (eventType == "restartClicked") {
            setTimeout(()=> {
                cfInstance.remove(); 
                initForm()
            }, 3000)

            setTimeout(() => {$("#cf-context").fadeOut(1000)}, 2000);
        }
    }
}, false);

window.onload = function () {
    const myForm = document.getElementById("myform");
    const cfContext = document.getElementById("cf-context");
    cfContext.style.display = "none";

    myForm.addEventListener("submit", (event) => {console.log("SUBMITTED");}, true);

    const bodyEle = document.getElementsByTagName("body")[0];
    bodyEle.style.backgroundColor = "#0183FF";

    const openingImgs = document.getElementsByClassName("opening-img");
    [...openingImgs].forEach((img) => { img.style.display = "none"; });
    // let animationTime = 500;
    let animationTime = 0;

    const openForm = () => {
        console.log("Animation ended");
        bodyEle.style.backgroundColor = "#B1C8E3";
        cfContext.style.display = "block";
        initForm();
    };

    let currIndex = 0;

    let animateOpening = () => {
        [...openingImgs].forEach((img) => { img.style.display = "none"; });
        openingImgs[currIndex].style.display = "block";
        currIndex++;

        if (currIndex == openingImgs.length - 1) {
            animationTime = animationTime * 2;
        }

        if (currIndex == openingImgs.length) {
            setTimeout(() => {
                openingImgs[currIndex - 1].style.display = "none";
                openForm();
            }, animationTime);
        }
        else {
            setTimeout(animateOpening, animationTime);
        }
    }

    animateOpening();

}

const initForm = () => {
    $("#cf-context").fadeIn();
    cfInstance = cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("myform"),
        context: document.getElementById("cf-context"),
        userImage: "assets/img/user_image.png",
        robotImage: "assets/img/robot_image.png",
        // theme: "dark",
        // loadExternalStyleSheet: false,
        preventAutoFocus: true,
        eventDispatcher: dispatcher
    });
}

const handleScrollButtonClickLeft = () => {
    // document.getElementsByClassName("horizontal-scroll")[0].scrollLeft -= 150;
    $(".horizontal-scroll").animate({ scrollLeft: '-=150' }, 300);
};

const handleScrollButtonClickRight = (dir) => {
    // document.getElementsByClassName("horizontal-scroll")[0].scrollLeft += 150;
    $(".horizontal-scroll").animate({ scrollLeft: '+=150' }, 300);
};