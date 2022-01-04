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

    //Tree Traverse
    //Planning- 
    //For this challenge, write a function that takes a node and console.logs the data value each node and then the data for each of its children, but indented two spaces. The function should be general and not specific to this instance.
    //do without indention first

    const D = {
        value: 'D',
        children: []
      };
      
      const B = {
        value: 'B',
        children: [D]
      };
      
      const C = {
        value: 'C',
        children: []
      };
      
      const F = {
        value: 'F',
        children: []
      };
      
      const E = {
        value: 'E',
        children: [F]
      };
      
      const A = {
        value: 'A',
        children: [B, C, E]
      };

      //does the node we are revaluating has a child? yes? print. no? traverse back up to root
      function traverse(node) {
        const root = 'A'

        if(root === node.children){
            console.log(this.left)

        } else {

        }
    }