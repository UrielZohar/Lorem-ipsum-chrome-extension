const { faker } = require('@faker-js/faker');

faker.lorem.word({
  max: 200,
  min: 1
});

// faker.lorem.word(5);
let nodesQueue;

const changeContentOfNode = (node) => {
  if ((node.nodeType === 3) && (node.data.trim())) {
    const nodeDataTrimmed = node.data.trim();
    node.data = `${nodeDataTrimmed.split(' ').map(word => faker.lorem.word(word.length)).join(' ')}`;
  } else {
    node.childNodes.forEach(child => {
      nodesQueue.push(child);
    });
  }
};

const changeContentOfBody = () => {
  nodesQueue = [];
  nodesQueue.push(document.querySelector('body'));
  while (nodesQueue.length) {
    const node = nodesQueue.shift();
    changeContentOfNode(node);
  }
};

changeContentOfBodyGlobal = changeContentOfBody;


