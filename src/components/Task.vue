<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h4>
      {{ task.text }}
      <i @click="onDeleteTask(task.id)" class="fas fa-times"></i>
      <!-- <router-link :to="{
                path: '/edit',
                query: { 
                    data: { task }
                }
            }">
                <i class="fas fa-times"></i>
            </router-link>-->
    </h4>
    <p>
      {{ task.day }}
      <i @click="editSelectedTask()" class="fas fa-pen-to-square"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDeleteTask(taskId) {
      this.$emit("delete-task", taskId);
    },
    editSelectedTask() {
      console.log(this.task.id);
      const taskId = this.task.id;
      this.$router.push({
        name: "Edit",
        query: {
          data: taskId,
        },
      });
    },
  },
};
</script>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
