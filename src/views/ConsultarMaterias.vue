<template>
  <h2>Consultar Materias</h2>
  <listarMateria/>
</template>

<script>
import listarMateria from '@/components/listarMateria.vue';
export default {

    components:{
        listarMateria
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