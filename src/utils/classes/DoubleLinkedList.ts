import { DoubleLinkedListNode } from "../interfaces/apiInterfaces"

class DoubleLinkedList<N extends DoubleLinkedListNode> extends Array<N> {
    constructor() {
        super()
    }

    static sortToArray<T extends DoubleLinkedListNode>(arr: T[]): DoubleLinkedList<T> {
        if (arr.length === 0) return [] as DoubleLinkedList<never>
        console.log(arr)
        let head = arr.find(node => node.prev === 0)
        if (!head) {
            arr[0].prev = 0
            arr[0].next = 0
            head = arr[0]
        }
        let res = [head] as DoubleLinkedList<T>
        let currNode: T | undefined = JSON.parse(JSON.stringify(head))
        while (currNode && currNode.next !== 0) {
            currNode = arr.find(node => currNode && (node.id === currNode.next))
            if (!currNode || currNode.next === null) break
            res.push(currNode)
        }
        console.log(res);
        for (let i = 0; i < arr.length; i++) {
            let elem = arr[i]
            if (elem.prev === null) {
                const prevTailIdx = res.findIndex(el => el.next === 0)
                elem.prev = res[prevTailIdx].id
                elem.next = 0
                res[prevTailIdx].next = elem.id
                res.push(elem)
            }
        }
        console.log(res);
        return res
    }
}

export default DoubleLinkedList