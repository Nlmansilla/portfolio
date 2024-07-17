<template>
    <div>
        Blog Page
    </div>
    <div>
        Post id: {{ route.params.id }}
    </div>
</template>

<script setup>
    const route = useRoute()
    console.log(route.params.id)
</script>