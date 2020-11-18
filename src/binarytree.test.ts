import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree' ;

test('Binary tree' , () => {
    let myTree = new BinaryTree<number>((a, b) => a - b);

myTree.add(7);
myTree.add(4);
myTree.add(90);
myTree.add(8);

expect(myTree.contains(6)).toBeTruthy();
expect(myTree.contains(8)).toBeFalsy();








})