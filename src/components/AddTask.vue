<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
        <label>Task</label>
        <input 
            ref="inputTaskText"
            type="text" 
            v-model="text" 
            name="text" 
            placeholder="Add Task"
        />
        </div>
        
        <div class="form-control">
        <label>Day & Time</label>
        <input
            ref="inputTaskDay"
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
        />
        </div>
        
        <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input 
            ref="inputTaskReminder"
            type="checkbox" 
            v-model="reminder" 
            name="reminder" 
        />
        </div>

        <input type="submit" :value="submitBtnValue" class="btn btn-block" />
    </form>
</template>

<script>
    export default {
        name: 'AddTask',
        props: {
            submitBtnValue: String,
            taskToUpdate: Object,
        },
        data() {
            return {
                text: '',
                day: '',
                reminder: false,
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()

                if (this.text === '' || this.day === '') {
                    alert('Please fill in all fields')
                    return
                }

                const newTask = {
                    // id: Math. floor(Math.random() * 100000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder,
                }

                console.log('Reseting text fields')
                this.text = ''
                this.day = ''
                this.reminder = ''
                this.$emit('add-task', newTask)
            },
            populateFields() {
                this.$refs.inputTaskText.value = this.taskToUpdate.text
                this.$refs.inputTaskDay.value = this.taskToUpdate.day
                this.$refs.inputTaskReminder.value = this.taskToUpdate.reminder
            }
        },
        mounted() {
            console.log(this.$route.path)
            if (this.$route.path === '/edit/') {
                console.log('Add task on the Edit view route')
                this.populateFields()
            } else {
                console.log('Add task on the Home view route')
            }
        },
    }
</script>

<style scoped>
    .add-form {
        margin-bottom: 40px;
    }
    .form-control {
        margin: 20px 0;
    }
    .form-control label {
        display: block;
    }
    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }
    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-control-check label {
        flex: 1;
    }
    .form-control-check input {
        flex: 2;
        height: 20px;
    }
</style>