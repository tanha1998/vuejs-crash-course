<template>
    <header>
      <h1>{{ title }}</h1>
      <Button v-if="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" ></Button>
    </header>
</template>
<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button
  },
  computed: {
    homePage () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
