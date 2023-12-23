const testInput1 = [1,2,3,4,5,6];

class Node {
	val = null;
	left = null;
	right = null;
	constructor(val = null,left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

function arrayToLevelOrder(arr) {
	
	if (arr.length === 0) {
		return null;
	}
	const root = new Node(arr[0]);
	let q = [root];
	let i = 1;
	while (i < arr.length) {
		const node = q.shift();
		node.left = new Node(arr[i++]);
		q.push(node.left);
		if (i < arr.length) {
			node.right = new Node(arr[i++]);
			q.push(node.right);
		}
	}
	return root;
}



// Function to print tree nodes in InOrder fashion
function printLevelOrder(root)
{
		const q = [root];
		let i = 0, size = q.length;
		while (q.length > 0) {
			const node = q.shift();
			console.log(node.val);
			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
			i++;
			if (i == size) {
				i = 0;
				size = q.length;
			}
		}
}

const root = arrayToLevelOrder(testInput1);
printLevelOrder(root);