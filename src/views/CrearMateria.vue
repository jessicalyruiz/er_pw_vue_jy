<template>

    <h2>Crear Materia</h2>
  <div class="fromMine">
        <div class="form-group">
        
        <label class="form-label" for="nombre">Nombre</label>
        <input v-model="nombre" class="form-control" type="text" id="nombre">

        <label class="form-label" for="codigo">Codigo</label>
        <input v-model="codigo" class="form-control" type="text" id="codigo">

        <label class="form-label" for="numCreditos">Numero creditos</label>
        <input v-model="numCreditos" class="form-control" type="number" id="numCreditos">


        <label class="form-label" for="profesor">Profesor</label>
        <input v-model="profesor" class="form-control" type="text" id="profesor">


        <button v-on:click="crear" class="btnGo">Ingresar</button>

        <div v-if="msj" class="alert alert-primary" role="alert">
            materia creada
        </div>
    </div>
    </div>

</template>

<script>
import {ingresarMateriaFachada} from '@/js/api/Procesar'
export default {

    data(){
        return{
            nombre:null,
            codigo:null,
            numCreditos:null,
            profesor:null,
            msj:false,
        }
    },
    methods:{
       async crear(){
            console.log("crear")
            console.log("nombre: "+this.nombre)
            const myMateria={
                nombre:this.nombre,
            codigo:this.codigo,
            numeroCreditos:this.numCreditos,
            profesor:this.profesor
            }
            await ingresarMateriaFachada(myMateria)

            this.nombre=null
            this.codigo=null,
            this.numCreditos=null,
            this.profesor=null
            this.msj=true
            
        }
    }
}
</script>

<style>


.fromMine{
    padding: 100px;
    margin-left: 250px;
    margin-right: 250px;
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