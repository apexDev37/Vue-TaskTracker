<template>
    <AddTask submitBtnValue="Update Task" :taskToUpdate="task"/>
</template>

<script>
    import AddTask from '../components/AddTask.vue';

    export default {
        name: 'Edit',
        // props: {
        //     task: {
        //         type: String,
        //         required: true,
        //     }
        // },
        components: {
            AddTask,
        },
        data() {
            return {
                task: {},
            }
        },
        methods: {
            async fetchTask(taskId) {
                const response = await fetch(`http://localhost:5000/tasks/${taskId}`)
                const data = await response.json()

                return data
            },
        },
        async created() {
            console.log(this.$route.query.data)
            const taskId = this.$route.query.data
            this.task = await this.fetchTask(taskId)
            console.log(this.task)
        }
    }
</script>