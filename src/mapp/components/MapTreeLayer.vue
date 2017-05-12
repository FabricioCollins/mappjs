<template>
	<div>{{layer-label}}<div>
</template>

<script>
	exports default {
		name: 'treelayer',
		props: {
			layer-name:String,
			layer-label:String
		}
	}

	 export default {
        props: ['layer-name','layer-label'],
        	data() {
          		return {
          		}
          	}
    }
</script>

<style scoped>
	
</style>