// ==UserScript==
// @name        myanimelist-userscript
// @description MyAnimeList improver.
// @version     1.0.19
// @author      wilx
// @homepage    https://github.com/wilx/myanimelist-userscript
// @supportURL  https://github.com/wilx/myanimelist-userscript/issues
// @match       https://myanimelist.net/*
// @downloadURL https://github.com/wilx/myanimelist-userscript/raw/master/output/index.user.js
// @grant       GM.cookie
// @grant       GM.info
// @namespace   https://github.com/wilx/myanimelist-userscript
// @run-at      document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export start */
function hideNode(node) {
  node.dataset.sanifierDisplay = node.style.display;
  node.style.display = 'none';
}
function revealNode(node) {
  node.style.display = node.dataset.sanifierDisplay;
}
function onReviewsClick(reviewNode) {
  console.log('Clicked the Reviews');
  reviewNode.dataset.sanifier ??= '{}';
  const sanifier = JSON.parse(reviewNode.dataset.sanifier);
  const nodes = gatherReviewNodes(reviewNode);
  if (sanifier.isHidden) {
    sanifier.isHidden = false;
    nodes.forEach(node => {
      revealNode(node);
    });
  } else {
    sanifier.isHidden = true;
    nodes.forEach(node => {
      hideNode(node);
    });
  }
  reviewNode.dataset.sanifier = JSON.stringify(sanifier);
}
function gatherReviewNodes(reviewNode) {
  const reviewNodes = document.evaluate('./../following-sibling::div[contains(concat(" ", normalize-space(@class), " "), " review-element ")]', reviewNode, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  const nodes = [];
  for (let node; node = reviewNodes.iterateNext();) {
    nodes.push(node);
  }
  return nodes;
}
async function start() {
  console.log('MyAnimeList sanifier enabled.');
  const reviewNodes = document.evaluate('//div[@id="content"]//div/h2[text()="Reviews"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const reviewNode = reviewNodes.singleNodeValue;
  if (reviewNode === null) {
    return;
  }

  // Add click event handler.
  reviewNode.addEventListener('click', () => onReviewsClick(reviewNode));
  // Manually trigger click event handler to hide the reviews by default.
  onReviewsClick(reviewNode);
}
if (GM?.info !== undefined) {
  start();
}

/******/ })()
;
//# sourceMappingURL=index.js.map