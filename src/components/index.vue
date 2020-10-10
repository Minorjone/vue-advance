<template>
  <div>
    <KForm :model="info" :rules="rules" ref="kform">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="info.username" placeholder="Please input name"></KInput>
      </KFormItem>
      <button @click="submit">提交</button>
    </KForm>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: 'Please input an value', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.kform.validate(valid => {
        if (valid) {
          console.log('success')
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
