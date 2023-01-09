
import Instance from '../axios/axios'


const categoryRepository = {
    fetchCategories: () => {
        return Instance.get("/categories")
    },
    fetchOrderedCategories: () => {
        return Instance.get("/categories/ordered")
    }
}

export default categoryRepository