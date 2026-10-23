/* ============================================================== */
/* SCRIPT*/
/* ============================================================== */



/* #region   CONST  */
const LIGHT_BOX_WRAPPER_REF = document.getElementById("idLightBoxWrapper");
const LIGHT_BOX_REF = document.getElementById("idLightBox");
const THUMBNAIL_WRAPPER_REF = document.getElementById("idThumbnailWrapper");

/* #endregion */
/* ------------------------------------------------------------- */


/* #region   VARIABLES  */
let imageNameList = ["pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg",];
let imageAltText = ["pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg",];

let currentPosition = ""; /* `${currentPosition}` */
let currentImageTitle = ""; /* `${currentImageTitle}` */
let currentImageAltText = ""; /* `${currentImageAltText}` */

/* #endregion */
/* ------------------------------------------------------------- */

/* #region   FUNCTIONS  */

/* #region   GENERAL FUNCTIONS  */
function init() {
    renderGallery();
}

function getAltText(index) {
    currentImageAltText = imageAltText[index];
    return currentImageAltText;
}

function transformNumberToWord(index) {
    let numberWords = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
    return numberWords[index];
}

// function checkImageList(array) {
//     return array.length;
// }

/* #endregion */
/* ------------------------------------------------------------- */


/* #region__________   THUMBNAIL GALLERY    __________ */

function renderGallery() {
    for (let index = 0; index < imageNameList.length; index++) {
        currentPosition = `${index + 1}/${imageNameList.length}`
        currentImageTitle = imageNameList[index]; /* `${currentImageTitle}` */
        currentImageAltText = getAltText(index);
        renderThumbnail(index);
    }
}

function renderThumbnail(index) {
    THUMBNAIL_WRAPPER_REF.innerHTML += getThumbnailTemplate(index, transformNumberToWord(index));
}

/* #endregion */
/* ------------------------------------------------------------- */


/* #region_________     LIGHTBOX   __________  */

function openDialog(index) {
    renderModal(index);
    LIGHT_BOX_REF.showModal();
}

function closeDialog() {
    LIGHT_BOX_REF.close();
}

function renderModal(indexOfThumbnail) {
    /* `${fullSizePainting}` */
    let fullSizePainting = imageNameList[indexOfThumbnail];
    /* `${thumbnailPosition}` */
    let thumbnailPosition = `${indexOfThumbnail + 1}/${imageNameList.length}`;
    /* `${fullSizeImageAltText}` */
    let fullSizeImageAltText = getAltText(indexOfThumbnail);
    LIGHT_BOX_REF.innerHTML = "";
    LIGHT_BOX_REF.innerHTML = getModalTemplate(fullSizePainting, fullSizeImageAltText, thumbnailPosition, transformNumberToWord(indexOfThumbnail), indexOfThumbnail);
}

function showNextModal(modalNumber) {
    if (modalNumber > imageNameList.length - 1) {
        closeDialog();
        openDialog(0);
    } else if (modalNumber < 0) {
        closeDialog();
        openDialog(imageNameList.length - 1);
    } else {
        closeDialog();
        openDialog(modalNumber);
    }
}

/* #endregion */
/* ------------------------------------------------------------- */





// /* #region  */



/* #endregion */
/* ------------------------------------------------------------- */

/* ============================================================== */

