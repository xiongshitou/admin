<template>
  <el-container>
    <Sidebar />
    <el-container direction="vertical">
      <Navbar />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, Sidebar, Navbar} from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
  }
}
</script>

<style>

</style>
