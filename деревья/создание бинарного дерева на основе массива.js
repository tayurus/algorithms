function createBinaryTree(arr) {
  let root = {};

  if (arr.length > 0) {
    root = {
      val: arr[0],
      left: null,
      right: null
    }

    let lastNodes = [root];
    let lastIndex = 1;

    while (lastIndex < arr.length) {
      let leftNode = null, rightNode = null;
      if (arr[lastIndex] !== null) {
        leftNode = {val: arr[lastIndex], left: null, right: null};
        lastNodes[0].left = leftNode;
        lastNodes.push(leftNode);
      }

      lastIndex++;

      if (lastIndex < arr.length && arr[lastIndex] !== null) {
        rightNode = {val: arr[lastIndex], left: null, right: null};
        lastNodes[0].right = rightNode;
        lastNodes.push(rightNode);
      }

      lastIndex++;
      lastNodes.shift();

    }

  }

  return root;

}
