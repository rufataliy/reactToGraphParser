import { getAllComponentsFromFile } from "../../../lib/getAllComponents"
import { getReactComponentTree } from "../../../lib/getReactComponentTree"
import { getVarBindingToOriginalVarNames } from "../../../lib/reactToGraph"
import componentTree from "../componentTree.json"
import { filename } from "..//constants"

describe("getReactComponentTree", ()=>{
    it('VariableDeclaration', ()=>{
        const sourceComponentsMap = getAllComponentsFromFile(filename, new Set(), {})
        const varBindings = getVarBindingToOriginalVarNames(filename, new Set(), sourceComponentsMap)
        const tree = getReactComponentTree(filename, new Set(), varBindings)
        expect(componentTree).toEqual(tree)
    })
})