// Floyd’s Algorithm: Detecting Cycle
function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected
            return true;
        }
    }

    return false;
}
