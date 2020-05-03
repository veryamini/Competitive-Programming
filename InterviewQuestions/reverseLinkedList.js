var reverseList = function(head) {
    let current = head;
    let prev = null;
    while (current !== null) {
        let nextTemp = current.next
        current.next = prev;
        prev = current;
        current = nextTemp; 
    }
    return prev;
};

var recurseReverseLL = function(head) {
	if (head === null || head.next === null) return head;
	p = recurseReverseLL(head.next);
	head.next.next = head;
	head.next = null;
	return p;
}