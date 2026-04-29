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

function* xpathNodes (expression, contextNode, resultType) {
    const result = expression.evaluate(contextNode, resultType);
    for (let node; (node = result.iterateNext()) !== null;) {
        yield node;
    }
}

function gatherReviewNodes (reviewNode) {
    return Iterator.from(xpathNodes(
        reviewElementsXpath,
        reviewNode,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE
    )).toArray();
}

const reviewsH2Xpath = evaluator.createExpression('//div[@id="content"]//h2[text()="Reviews"]');
const topSearchXpath = evaluator.createExpression('//input[@id="topSearchText"]');
const animeListLinkXpath = evaluator.createExpression('//div[contains(concat(" ", normalize-space(@class), " "), " header-menu-dropdown ")]/ul/li/a[text()="Anime List"]');

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

    hotkeys('l', () => {
        const linkNode = animeListLinkXpath.evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
        if (linkNode != null) {
            // Get the link and navigate to it.
            const link = linkNode?.attributes?.href?.value;
            console.log(`link: ${link}`);
            if (link != null) {
                document.location.href = link;
            }
        }
    });
}

if (globalThis.GM?.info != null) {
    start();
}

export {
    start
};
