//Sarani's Problems


//Binary Tree Add
//Planning- 
//compare the value of the nodes 
//we want to check to see if there is a left or right node
//then we want to assign the node to left or right if there is not
class BinaryTreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    add(node, newNode) {
      // Implement me!

      if(node.value === newNode.value){
          return false
      }
      if(newNode.value > node.value){
          if(!node.right){

          }
      }
    }
}
    //ran out of time but I think we were on to something
    //     if(!this.left){
    //         this.left = node;
    //     }
    //     else(!this.right)
    //     {
    //         this.right = node;
    //     }
    //  return this.data 