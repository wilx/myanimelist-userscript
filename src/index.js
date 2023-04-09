function hideNode (node) {
    node.dataset.sanifierDisplay = node.style.display;
    node.style.display = 'none';
}

function revealNode (node) {
    node.style.display = node.dataset.sanifierDisplay;
}

function onReviewsClick (reviewNode) {
    console.log('Clicked the Reviews');

    console.log(`sanifier before: ${reviewNode.dataset?.sanifier}`);
    reviewNode.dataset.sanifier ??= '{}';

    const sanifier = JSON.parse(reviewNode.dataset.sanifier);

    const nodes = gatherReviewNodes(reviewNode);
    if (sanifier.isHidden) {
        sanifier.isHidden = false;

        nodes.forEach(node => {
            console.log('Revealing node');
            revealNode(node);
        });
    } else {
        sanifier.isHidden = true;

        nodes.forEach(node => {
            console.log('Hiding node');
            hideNode(node);
        });
    }

    reviewNode.dataset.sanifier = JSON.stringify(sanifier);
    console.log(`sanifier after: ${reviewNode.dataset.sanifier}`);
}

function gatherReviewNodes (reviewNode) {
    const reviewNodes = document.evaluate('./../following-sibling::div[contains(concat(" ", normalize-space(@class), " "), " review-element ")]',
        reviewNode, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    const nodes = [];
    for (let node; (node = reviewNodes.iterateNext());) {
        nodes.push(node);
    }
    return nodes;
}

async function start () {
    console.log('MyAnimeList sanifier enabled.');
    const reviewNodes = document.evaluate('//div[@id="content"]//div/h2[text()="Reviews"]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
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

export {
    start
};
