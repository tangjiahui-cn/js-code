/**
 * 栈
 * 
 * At 2022/10/09
 * By T.J.H
 */


 class StackList {
    length = 0

    constructor () {
        this.list = []
        this.length = 0
    }

    show () {
        console.log(this.list.join(','))
    }

    add (data) {
        this.list.push(data)
        this.length ++
    }

    remove (data) {
        this.list = this.list.filter(x => x !== data)
        this.length = this.list.length
    }

    pop () {
        const lastIndex = this.list.length - 1
        const data = this.list[lastIndex]
        this.list = this.list.slice(0, lastIndex)
        return data
    }

    update (data, updateData) {
        this.list = this.list.map(x => {
            return x === data
                ? updateData
                : x
        })
    }
}

const list = new StackList()

list.add('1')
list.add('2')
list.add('3')
list.add('4')

list.pop()  // 1, 2, 3
list.update('3', '33')

list.show()  // '1, 2, 33'

