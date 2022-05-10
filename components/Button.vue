<template>
    <button class=" bg-button-color p-3 mt-4 w-44 rounded-3xl text-white">
        {{Entradas}}
    </button>
</template>
<script>
export default {
    props:{
        Entradas: {
            type: String,
            default: 'Entradas',
    
        }
    }
}
</script>

<style>

</style>