<template>
    <div class="container">
        <h1 v-if="statusCode === 404">Page not found</h1>
        <h1 v-else>Something went wrong</h1>
        <nuxt-link to="/">Back to home page</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        }
    },

    computed: {
        statusCode() {
            if (this.error.statusCode) {
                return this.error.statusCode;
            }

            if (this.error.response.status) {
                return this.error.response.status;
            }

            return null;
        },
    },
};
</script>
