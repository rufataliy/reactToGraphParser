import { getReactComponentTree } from "../../../lib_copy/getReactComponentTree"
import componentTree from "../componentTree.json"
import { filename } from "..//constants"
import { parseAst } from "../../../lib/utils"

describe("FunctionDeclaration", ()=>{
    it('Component tree', ()=>{
        const ast = parseAst(filename)
        const tree = getReactComponentTree(ast)
        expect(componentTree).toEqual(tree)
    })
})