<template>

<button v-on:click="consultar"> Consultar</button>
<div class="fromMine">


<div class="card" >
        <div class="card-body">
            <table >
            <thead >
                <th>Codigo</th>
            <th>Nombre</th>
             <th>Numero de Creditos</th>
               <th>accion</th>
        <th>accion</th>
              </thead>
            <tbody>
                <tr v-for="m in materias" :key="m.codigo">
            <td>{{ m.codigo }}</td>
            <td>{{ m.nombre}}</td>
            <td>{{ m.numeroCreditos }}</td>
            <td><a v-for="link in m.links" :key="link.rel" :href="link.href">{{ link.rel }}</a></td>
            <td><button v-on:click="eliminar(m.codigo)">Eliminar</button></td>
        </tr>
       
            </tbody>
        </table>
        </div>
	</div>
</div>
<div v-if="msj" class="alert alert-primary" role="alert">
            materia eliminada
        </div>
</template>

<script>
import {listarMateriasFachada,borrarMateriaFachada} from '@/js/api/Procesar'
export default {
data(){
    return{
        codigo:null,
        nombre:null,
        numCreditos:null,
        profesor:null,
        materias:null,
        msj:false,
    }
  
},
methods:{
    async consultar(){
        console.log("consultar")
        this.materias=await listarMateriasFachada()
        console.log(this.materias)
    },
    async eliminar(codigo){
       await  borrarMateriaFachada(codigo)
        this.msj=true
    }
    }
}
</script>

<style>

.fromMine{
    padding: 100px;
    margin-left: 100px;
    margin-right: 100px;
    text-align: left
}

.btnGo {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: 2px solid #555555;
  border-radius: 12px;
  padding: 10px 40px;
  margin-top: 10px;
}

.btnGo:hover {
  background-color: #e2a6a6;
  color: white;
}
</style>