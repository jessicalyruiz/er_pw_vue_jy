import axios from "axios";




//metodos fachada
export const ingresarMateriaFachada=async(body)=>{
    return await ingresarMateria(body);
}

export const listarMateriasFachada=async()=>{
    return await listarMaterias();
}

export const borrarMateriaFachada=async(body)=>{
    return await borrarMateria(body);
}

//metodos 
const ingresarMateria = async (body) => {
    console.log(body.nombre)
    axios.post('http://localhost:8081/API/Matricula/V1/materias', body).then(r => r.data)
    
}

const listarMaterias = async () => {
    console.log("listar")
    return axios.get(`http://localhost:8081/API/Matricula/V1/materias`).then(r => r.data)
    
}

const borrarMateria = async (codigo) => {
    console.log("elimibar")
    axios.delete(`http://localhost:8081/API/Matricula/V1/materias?codigo=${codigo}`).then(r => r.data)
    
}

