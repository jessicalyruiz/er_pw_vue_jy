<template>
  <h2>Mostar materia</h2>
{{ materia }}
  <div class="fromMine">
        <div class="form-group">
        

            <label class="form-label" for="codigo">Codigo</label>
        <input v-model="codigo" class="form-control" type="text" id="codigo">


        <label class="form-label" for="nombre">Nombre</label>
        <input v-model="nombre" class="form-control" type="text" id="nombre">

        
        <label class="form-label" for="numCreditos">Numero creditos</label>
        <input v-model="numCreditos" class="form-control" type="number" id="numCreditos">


        <label class="form-label" for="profesor">Profesor</label>
        <input v-model="profesor" class="form-control" type="text" id="profesor">



    </div>
    </div>
</template>

<script>
export default {

    props:{
            materia:null,
    },
    data(){
        return{
            codigo:null,
            nombre:null,
            numCreditos:null,
            profesor:null
        }
    },
    methods:{
        mostrar(){
            this.codigo=this.materia.codigo 
            this.nombre=this.materia.nombre
            this.numCreditos=this.materia.numeroCreditos
            this.profesor=this.materia.profesor
        }
    },
    mounted(){
        this.mostrar()
    }
}
</script>

<style>

</style>