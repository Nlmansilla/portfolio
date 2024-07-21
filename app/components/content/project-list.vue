<template>
    <div class="not-prose">
        <p class="mb-10">Take a look at my GitHub projects</p>
        <section v-if="pending">Loading...</section>
        <section v-else-if="error">Something went wrong...pleae, try again!</section>
        <section v-else>
            <ul class="gtid grid-cols-1 gap-4">
                <li v-for="repository in repos" :key="repository.id"
                    class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
                    <a :href="repository.html_url" target="_blank">
                        <div class="flex items-center justify-between text-small">
                            <div class="font-semibold">{{ repository.name }}</div>
                            <div class="font-semibold">{{ repository.languaje }}</div>
                        </div>
                    </a>
                    <p class="text-sm">{{ repository.description }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const { error, pending, data } = await useFetch(
    'https://api.github.com/users/Nlmansilla/repos'
)

const repos = computed(
    () => data.value.filter(repo => repo.description)
)
</script>