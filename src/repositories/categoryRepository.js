
import Instance from '../axios/axios'


const categoryRepository = {
    fetchCategories: () => {
        return Instance.get("/categories")
    },
    fetchOrderedCategories: () => {
        return Instance.get("/categories/ordered")
    },
    addCategory: (name) => {
        return Instance.post("/categories/add",{
            "name": name
        })
    }
}

export default categoryRepository