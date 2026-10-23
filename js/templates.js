  // ==============================================================
  // TEMPLATE FUNCTIONS
  // ==============================================================
/* #region   TEMPLATE FUNCTIONS  */

function getModalTemplate(title, altText, position, word, index) {
    return `<div id="idLightBox${word}Content" class="LightBoxContent" data-index="${index}>
                <header class="DialogHeader">
                    <h2 class="TitleOfImage">${title}</h2>
                    <button id="idCloseButton" class="CloseButton" type="button" onclick="closeDialog()">
                        <img id="idDisplayCloseButtonIcon" class="CloseButtonIcon" src="./assets/icons/close.svg">
                    </button>
                </header>

                <figure id="idFullSizeImageArea" class="FullSizeImageArea">
                    <img id="idFullsizeImage" class="ImageFullSize" src="./assets/img/${title}" alt="${altText}">
                </figure>

                <section id="idDisplayNavigationWrapper" class="DisplayNavigationWrapper">
                    <button id="idButtonToPreviousImage" class="NavigationButton" onclick="showNextModal(${index - 1})">
                        <img id="idArrowPointingLeft" class="arrow left" src="./assets/icons/arrow-pointing-left.svg" alt="arrow-pointing-left" >
                    </button>
                    <p id="idIndexOfDisplayedImage" class="NavigationDisplay">${position}</p> 
                    <button id="idButtonToNextImage" class="NavigationButton" onclick="showNextModal(${index + 1})">
                        <img id="idArrowPointingRight" class="arrow right" src="./assets/icons/arrow-pointing-right.svg" alt="arrow-pointing-right">

                    </button>
                </section>
                </div>`
}

function getThumbnailTemplate(index, word) {
    return `<button id="idThumbnail${word}" type="button" class="ThumbnailButton" data-index="${index}" onclick="openDialog(${index})">
    <img id="idImage${word}" class="Image${word} Thumbnail" src="./assets/img/${currentImageTitle}" alt="${currentImageAltText}" data-index="${index}">
    </button>`
}

/* #endregion */
/* ------------------------------------------------------------- */


  //#region 



  // #endregion
  // -------------------------------------------------------------
  //#region 



    // #endregion
  // -------------------------------------------------------------
  //#region 



    // #endregion
  // -------------------------------------------------------------
  //#region 



  // #endregion
  // -------------------------------------------------------------


  // ==============================================================
  //   ENDE

