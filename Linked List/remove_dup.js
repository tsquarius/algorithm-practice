const { Node, LinkedList } = require("./linked_list_class");

const myLinkList = new LinkedList();
myLinkList.addToTail("a");
myLinkList.addToTail("b");
myLinkList.addToTail("c");
myLinkList.addToTail("d");
myLinkList.addToTail("a");
myLinkList.addToTail("e");

// EXPECT myLinkList to have 1 'a' after remove duplicate

// Phase1: Write code to remove duplicates from an unsorted linked list
// Phase2: How would you solve this problem if a temporary buffer is not allowed?

function removeDupPhase1(list) {
  if (list.size() <= 1) return list;

  let visited = new Set();
  visited.add(list.head.value);

  recursiveSearch(list.head, list.head.next, visited);

  return returnArray(list);
}

function recursiveSearch(prevNode, curNode, visited = new Set()) {
  if (visited.has(curNode.value)) {
    prevNode.next = curNode.next;
  }
  visited.add(curNode.value);

  if (!prevNode.next.next) return;
  recursiveSearch(prevNode.next, prevNode.next.next, visited);
}

console.log(removeDupPhase1(myLinkList));

//helper function
function returnArray(list) {
  let queue = [list.head];
  let arr = [];

  while (queue.length) {
    let node = queue.shift();
    arr.push(node.value);

    if (node.next) queue.push(node.next);
  }

  return arr;
}
