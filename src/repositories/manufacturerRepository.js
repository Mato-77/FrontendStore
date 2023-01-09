import Instance from '../axios/axios'

const manufacturerRepository = {
    fetchManufacturers: () =>{
        return Instance.get("/manufacturers")
    },
    fetchOrderedManufacturers: () => {
        return Instance.get("/manufacturers/ordered")
    }
}

export default manufacturerRepository