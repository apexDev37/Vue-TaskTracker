<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            v-show="onHomePage"
            @toggle-add-task="$emit('toggle-add-task')" 
            :text="addTaskBtnSelected ? 'Close' : 'Add Task'" 
            :color="addTaskBtnSelected ? 'black' : '#155e81'"
        /> 
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: String,
        addTaskBtnSelected: Boolean
    },
    components: {
      Button,  
    },
    computed: {
        onHomePage() {
            return this.$route.path === '/'
        }
    },
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;   
    }
</style>