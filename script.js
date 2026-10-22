/* ============================================================== */
/* SCRIPT*/
/* ============================================================== */



/* #region   CONST  */
const LIGHT_BOX_REF = document.getElementById("idLightBoxWrapper");


/* #endregion */
/* ------------------------------------------------------------- */


/* #region   VARIABLES  */
let imageNameList = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];
let imageAltText = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];

let currentImageAltText = "";

/* #endregion */
/* ------------------------------------------------------------- */

function getAltText(index) {
    currentImageAltText = imageAltText[index];
    return currentImageAltText;
}

function renderModal() {
    LIGHT_BOX_REF.innerHTML = "";
    for (let index = 0; index < imageNameList.length; index++) {
        let currentPosition = `${index + 1}/${imageNameList.length}`
        let currentImageTitle = imageNameList[index]; /* `${currentImageTitle}` */
        currentImageAltText = getAltText(index);

        LIGHT_BOX_REF.innerHTML = getModalTemplate(currentImageTitle, currentImageAltText, currentPosition);

    }

}

/* #region   FUNCTIONS  */
function openDialog() {
    renderModal();
    LIGHT_BOX_REF.showModal();
}

function closeDialog() {
    LIGHT_BOX_REF.close();
}


/* #endregion */
/* ------------------------------------------------------------- */


/* #region   TEMPLATE FUNCTIONS  */

function getModalTemplate(title, altText, position) {
    return `<dialog id="idLightBox" class="LightBox">
                <header class="DialogHeader">
                    <h2 class="TitleOfImage">${title}</h2>
                    <button id="idCloseButton" class="CloseButton" type="button" onclick="closeDialog()">
                        <img id="idDisplayCloseButtonIcon" class="CloseButtonIcon" src="./assets/icons/close.svg">
                    </button>
                </header>

                <figure id="idFullSizeImageArea" class="FullSizeImageArea">
                    <img id="idFullsizeImage" class="ImageFullSize" src="./assets/${title}.jpg/" alt="${altText}">
                </figure>

                <section id="idDisplayNavigationWrapper" class="DisplayNavigationWrapper">
                    <button id="idButtonToPreviousImage" class="NavigationButton">
                        <img id="idArrowPointingLeft" class="arrow left" src="./assets/icons/arrow-pointing-left.svg" alt="arrow-pointing-left">
                    </button>
                    <p id="idIndexOfDisplayedImage" class="NavigationDisplay">${position}</p> 
                    <button id="idButtonToNextImage" class="NavigationButton">
                        <img id="idArrowPointingRight" class="arrow right" src="./assets/icons/arrow-pointing-right.svg" alt="arrow-pointing-right">

                    </button>
                </section>
            </dialog>`
}



/* #endregion */
/* ------------------------------------------------------------- */






/* ============================================================== */

/* #region     */



/* #endregion */
/* ------------------------------------------------------------- */