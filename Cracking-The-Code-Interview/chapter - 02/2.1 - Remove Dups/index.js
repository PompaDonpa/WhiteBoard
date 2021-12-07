class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = null
  }
}

const removeDuplicates = head => {
  let dummy = new ListNode(0, head)
  let counter = {}

  let current = head

  while (current) {
    counter[current.val] = -~counter[current.val]
    current = current.next
  }
 console.log('dummy : ', dummy)
 console.log('current : ' , current)
  current = dummy

  while (current) {
    while (
      current.next in counter &&
      current.next.val in counter &&
      counter[current.next.val] > 1
    ) {
      current.next = current.next.next
    }
    current = current.next
  }

  return dummy.next
}

const myList = new LinkList([1, 5, 1, 6, 8, 6, 8, 8, 8, 8])
