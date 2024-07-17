<template>
    <div>
        All blog post list
    </div>
    <main>
    <ContentDoc />
  </main>
</template>

<script setup>
    useSeoMeta({
  title: 'Main Page',
  description: 'This is the landing page',
  ogTitle: 'Main Page',
  ogDescription: 'This is the landing page',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: 'This is the landing page',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
    title: 'Main Page',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>