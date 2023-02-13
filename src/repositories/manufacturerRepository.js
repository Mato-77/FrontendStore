import Instance from '../axios/axios'

const manufacturerRepository = {
    fetchManufacturers: () =>{
        return Instance.get("/manufacturers")
    },
    fetchOrderedManufacturers: () => {
        return Instance.get("/manufacturers/ordered")
    },
    addManufacturer: (name) => {
        return Instance.post("/manufacturers/add",{
            "name":name
        })
    }
}

export default manufacturerRepository