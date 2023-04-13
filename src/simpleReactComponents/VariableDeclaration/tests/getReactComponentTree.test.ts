import { getReactComponentTree } from "../../../lib copy/getReactComponentTree"
import componentTree from "../componentTree.json"
import { filename } from "..//constants"
import { parseAst } from "../../../lib copy/utils"

describe("VariableDeclaration", ()=>{
    it('Component tree', ()=>{
       const ast = parseAst(filename)
        const tree = getReactComponentTree(ast)
        expect(componentTree).toEqual(tree)
    })
})