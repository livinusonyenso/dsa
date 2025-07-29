class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true

  let slow = head, fast = head
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
  }

  let prev: ListNode | null = null
  while (slow) {
    const nxt = slow.next
    slow.next = prev
    prev = slow
    slow = nxt!
  }

  let p1: ListNode | null = head, p2 = prev
  while (p2) {
    if (p1!.val !== p2.val) return false
    p1 = p1!.next
    p2 = p2.next
  }
  return true
}
