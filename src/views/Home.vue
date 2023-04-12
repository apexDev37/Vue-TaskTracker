<template>
    <AddTask v-show="addTaskVisible" @add-task="addTask" submitBtnValue="Add Task" />
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
    name: "Home",
    props: {
        addTaskVisible: Boolean,
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        async deleteTask(taskId) {
            console.log(taskId);
            if (confirm("Are you sure you want to delete?")) {
                const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
                    method: "DELETE",
                });

                response.status === 200
                    ? (this.tasks = this.tasks.filter((task) => task.id !== taskId))
                    : alert("Oops! Could not delete the task. Try again");
            }
        },
        async toggleReminder(taskId) {
            console.log(taskId);

            const taskToToggle = await this.fetchTask(taskId);
            const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
            const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(updatedTask),
            });

            const data = await response.json();
            this.tasks = this.tasks.map((task) =>
                task.id === taskId ? { ...task, reminder: data.reminder } : task
            );
        },
        toggleAddTask() {
            this.showAddTask = !this.showAddTask;
        },
        async fetchTasks() {
            const response = await fetch("http://localhost:5000/tasks");
            const data = await response.json();

            return data;
        },
        async fetchTask(taskId) {
            const response = await fetch(`http://localhost:5000/tasks/${taskId}`);
            const data = await response.json();

            return data;
        },
        async addTask(newTask) {
            const response = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newTask),
            });

            const data = await response.json();
            this.tasks = [...this.task, data];
        },
    },
    async created() {
        this.tasks = await this.fetchTasks();
    },
};
</script>
