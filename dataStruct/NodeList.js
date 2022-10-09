/**
 * 链表
 * 
 * At 2022/10/09
 * By T.J.H
 */

class Node {
    data
    next
    prev

    constructor (data, next, prev) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

 class NodeList {
    length
    head
    tail

    constructor () {
        this.length = 0
        this.head = new Node(null, null, null)
        this.tail = new Node(null, null, null)
    }

    show () {
        const list = []
        let ptr = this.head
        while (ptr = ptr.next) {
            list.push(ptr.data)
        } 
        console.log('nodeList -> ', list.join(','))
    }

    // 尾插法
    add (data) {
        const node = new Node(data)
        if (this.head.next) {
            const tailNode = this.tail.next
            tailNode.next = node
            node.prev = tailNode
            this.tail.next = node
        } else {
            node.prev = this.head
            this.head.next = node
            this.tail.next = node
        }
        this.length ++
    }

    removeNode (node) {
        node.prev.next = node.next
        node.next && (node.next.prev = node.prev)
    }

    remove (data) {
        let ptr = this.head
        while (ptr = ptr.next) {
            if (ptr.data === data) {
                this.removeNode(ptr)
                this.length --
            }
        } 
    }

    removeIndex (index) {
        let count = 0
        let ptr = this.head
        while (ptr = ptr.next) {
            if (index === count) {
                this.removeNode(ptr)
                this.length --
            }
            count ++
        }
    }

    update (data, updateData) {
        let ptr = this.head
        while (ptr = ptr.next) {
            if (ptr.data === data) {
                ptr.data = updateData
            }
        }
    }

    get (data) {
        const indexArr = []
        let ind = 0
        let ptr = this.head

        while (ptr = ptr.next) {
            if (ptr.data === data) {
                indexArr.push(ind)
            }
            ind ++
        }

        return indexArr
    }
}

const list = new NodeList()

list.add('1')
list.add('2')
list.add('3')
list.add('4')

list.remove('2')        // 1, 3, 4
list.removeIndex(2)     // 1, 3
list.update('3', '33')

list.show()  // '1,33'

