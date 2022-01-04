//Alan's Problems

//Linked Tree Add and getList
//Planning we will need an if/else statement
//we need it to assign node A
//if nodeA has a next node value of null, then we can assign A to be B
// node.value !== newNode.value
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    add(node) {
        // do I have a next property?
        // no, node can be my next
        // yes, then ask next to add the node

        // const newNode = new Node(value);
         
        // if(node.value === newNode.value){

        //     return this.next
        // }
        // else return this.value


         // let nodeChild = node.hasChilNodes(this.value).appendChild(this.next).nextSibling() 
        // return nodeChild

        //What were were thinking here was- if the node already has a child then navigate to that and append it, then we ask if the child node has child. if not, go to the next sibling...and append?

        //right when time went up, we starting doing a !root and doing a if the root has no node, then....
    }
    getList() {
       

    }
}

//Binary Tree Find Method


class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
      // implemented as in previous challenge
        if(node.data < this.data){
            if(this.left){
                this.left.add(node);
            }
            else {
                this.left = node;
            }
        }
        else {
            if(this.right){
                this.right.add(node);
            }
            else {
                this.right = node;
            }
        }

    }
  
    findPerson(name) {
      // Implement me!

      //compare the name of node against root name
      //if === then return the person object
      // if not, compare node values
      // if node value is less than node value, go left, if greater then go right
      //repeat

      if(node.value === this.value){
          return this.person

      }
      else {
          //we need a way to traverse? maybe?
          if(this.left < this.value){
            if(node.value === this.value){
                return this.person
      
            } else {

            }

          }
      }
    }
  }
  