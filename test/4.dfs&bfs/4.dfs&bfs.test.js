import {
    dfsRecursion,
    dfsIteration,
    bfsIteration,
} from '../../4.dfs&bfs/basic/4.dfs&bfs.js'

const domTree = {
    val: 'root',
    children: [
        {
            val: 'div1',
            children: [
                {
                    val: 'span1',
                },
                {
                    val: 'span2',
                }
            ]
        },
        {
            val: 'div2',
            children: [
                {
                    val: 'p1',
                    children: [
                        {
                            val: 'span',
                        },
                        {
                            val: 'span',
                        }
                    ]
                },
                {
                    val: 'p2',
                }
            ]
        },
        {
            val: 'div3',
            children: [
                {
                    val: 'vedio1',
                },
                {
                    val: 'vedio2',
                }
            ]
        },
        {
            val: 'div4',
            children: [
                {
                    val: 'img1',
                },
                {
                    val: 'img2',
                }
            ]
        }
    ]
}

test('dfsIteration:domTree', () => {
    expect(dfsIteration(domTree)).toEqual(["root", "div1", "span1", "span2", "div2", "p1", "span", "span", "p2", "div3", "vedio1", "vedio2", "div4", "img1", "img2"])
})

test('bfsIteration:domTree', () => {
    expect(bfsIteration(domTree)).toEqual(["root", "div1", "div2", "div3", "div4", "span1", "span2", "p1", "p2", "vedio1", "vedio2", "img1", "img2", "span", "span"])
})

