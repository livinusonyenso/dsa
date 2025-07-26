function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    console.log(`slow: ${slow.val}, fast: ${fast.val}`);
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log("Middle node is:", slow.val);
  return slow;
}
