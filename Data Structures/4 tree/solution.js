console.log('tree data structure ');

/* Longest Word */

/*  
implement the tree data structure:
A tree is a data structure where a node can have zero or more children. Each node contains a value. 
, the connection between nodes is called edges. 
*/

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // add new cheldren to the tree
  addChildren(value) {
    const child = new Tree(value);
    this.children.push(child);
  }

  // check if the value is exist in the tree
  isContain(target) {
    let result = false;
    if (this.value === target) {
      result = true;
    }

    this.children.forEach((child) => {
      if (child.isContain(target)) {
        result = true;
      }
    });

    // for(var i=0 ; i<this.children.length;i++) {
    //   const child = this.children[i];
    //   if(child.isContain(target)){
    //     return true;
    //   }
    // }

    return result;
  }
}
