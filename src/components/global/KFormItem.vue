<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="err">{{err}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      err: ''
    }
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.err = errors[0].message
        } else {
          this.err = ''
        }
      })
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>
<style lang="sass" scoped>

</style>