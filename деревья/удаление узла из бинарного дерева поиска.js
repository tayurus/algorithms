/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

  function minValueNode(node) {

    let res = node;

    while (res && res.left) {
      res = res.left;
    }

    return res;

  }

  function step(root, key) {
    if (root === null) {
      return root;
    }

    if (root.val > key) {
      root.left = step(root.left, key);
    }

    if (root.val < key) {
      root.right = step(root.right, key);
    }

    if (root.val === key) {

      if (root.left === null) {
        let temp = JSON.parse(JSON.stringify(root.right));
        root = null;
        return temp;
      } else if (root.right === null) {
        let temp = JSON.parse(JSON.stringify(root.left));
        root = null;
        return temp;
      } else {
        let minValue = minValueNode(root.right).val;
        root.val = minValue;

        root.right = step(root.right, minValue);
      }

    }
    return root;
  }


    return step(root, key);

};
