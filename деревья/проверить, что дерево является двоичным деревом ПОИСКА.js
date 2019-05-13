/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
     return step(root, Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER);
}

function step(node, l, h) {
     if(!node)
         return true;
     return node.val > l
         && node.val < h
         && step(node.left, l, node.val)
         && step(node.right, node.val, h);
}
