import hotkeys from 'hotkeys-js';

const evaluator = new XPathEvaluator();

function hideNode (node) {
    node.dataset.sanifierDisplay = node.style.display;
    node.style.display = 'none';
}

function revealNode (node) {
    node.style.display = node.dataset.sanifierDisplay;
}

function onReviewsClick (reviewNode) {
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

const reviewElementsXpath = evaluator.createExpression(
    './following-sibling::div[contains(concat(" ", normalize-space(@class), " "), " review-element ")]');

function gatherReviewNodes (reviewNode) {
    const reviewNodes = reviewElementsXpath.evaluate(reviewNode,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const nodes = [];
    for (let node; (node = reviewNodes.iterateNext());) {
        nodes.push(node);
    }
    return nodes;
}

const reviewsH2Xpath = evaluator.createExpression('//div[@id="content"]//h2[text()="Reviews"]');
const topSearchXpath = evaluator.createExpression('//input[@id="topSearchText"]');

async function start () {
    console.log('MyAnimeList sanifier enabled.');

    const reviewNodes = reviewsH2Xpath.evaluate(document,
        XPathResult.FIRST_ORDERED_NODE_TYPE);
    const reviewNode = reviewNodes.singleNodeValue;
    if (reviewNode !== null) {
        // Add click event handler.
        reviewNode.addEventListener('click', () => onReviewsClick(reviewNode));
        // Manually trigger click event handler to hide the reviews by default.
        onReviewsClick(reviewNode);
    }

    hotkeys('ctrl+/', () => {
        console.log('Got search request');
        const searchInputs = topSearchXpath.evaluate(document,
            XPathResult.FIRST_ORDERED_NODE_TYPE);
        const searchInput = searchInputs.singleNodeValue;
        if (searchInput !== null) {
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            searchInput.focus({ focusVisible: true });
        }
    });
}

if (GM?.info !== undefined) {
    start();
}

export {
    start
};
