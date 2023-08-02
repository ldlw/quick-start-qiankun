<template>
  <div class="a">
    web-loan-service
    <div>
      {{count}}
      <button @click="count++">
        count+1
      </button>
      <!-- <div>
        <iframe src="https://www.qiniu.com" width="100%" height="600" frameborder="0" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'web-loan-service',
  components: {
  },
  data () {
    return {
      count: 1
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
