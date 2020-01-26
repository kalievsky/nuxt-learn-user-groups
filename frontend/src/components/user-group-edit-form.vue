<template>
<div>
    <form @submit.prevent="submit">
        <input type="text" v-model="name">
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
import {
    create,
    update,
} from '~/api/user-group.js';

export default {
    props: {
        groupData: {
            type: Object,
            default: () => ({}),
        },

        createMode: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return Object.assign({
            name: '',
        }, this.groupData);
    },

    methods: {
        submit() {
            if (!this.name || this.name === '') {
                return;
            }

            const apiFunction = this.createMode ? create : update;

            let payload = {
                name: this.name,
            };

            if (!this.createMode) {
                payload.id = this.id;
            }

            apiFunction(payload)
                .then(() => {
                    this.name = '';
                    this.$emit('success');
                })
                .catch(err => {
                    console.error(err);
                });
        },
    },
};
</script>
