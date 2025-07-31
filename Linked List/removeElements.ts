function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next; // Skip node
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}
