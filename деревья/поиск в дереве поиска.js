/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

  let res = [];

  function step(node) {
    if (root) {
      if (root.val > val) {
        searchBST(root.left, val);
      } else if (root.val < val) {
        searchBST(root.right, val);
      } else if (root.val === val) {
        res = root;
      }
    } else {
      res = [];
    }

  }

  return res;

};
