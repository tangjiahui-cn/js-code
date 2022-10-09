/**
 * 线性表
 * 
 * At 2022/10/08
 * By T.J.H
 */


class LineList {
    list = []
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

    removeIndex (index) {
        this.list = this.list.filter((_, ind) => ind !== index)
        this.length = this.list.length
    }

    update (data, updateData) {
        this.list = this.list.map(x => {
            return x === data
                ? updateData
                : x
        })
    }

    get (data) {
        const indexArr = []
        this.list.forEach((x, index) => {
            if (x === data) indexArr.push(index)
        })
        return indexArr
    }
}

const list = new LineList()

list.add('1')
list.add('2')
list.add('3')
list.add('4')

list.remove('2')
list.removeIndex(2)
list.update('3', '33')

list.show()  // '1,33'
console.log(list.get('33')) // [1]

