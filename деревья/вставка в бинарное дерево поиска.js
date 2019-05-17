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
var insertIntoBST = function(root, val) {
    
    let nodeForInsertion = root;
    
    function findNodeForInsertion(node) {
        
        if (node) {
            if (node.val > val && node.left) {
                findNodeForInsertion(node.left);
            } 
            else if (node.val < val && node.right) {
                findNodeForInsertion(node.right); 
            }
            else {
                nodeForInsertion = node;
            }
        }
        
    }
    
    findNodeForInsertion(root);
    
    
    if (nodeForInsertion.val > val) {
        nodeForInsertion.left = {val: val, right: null, left: null};
    } else {
        nodeForInsertion.right = {val: val, right: null, left: null};
    }
    
    return root;
    
};