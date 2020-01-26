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
} from '~/api/user.js';

export default {
    props: {
        userData: {
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
            user_group_id: null,
        }, this.userData);
    },

    methods: {
        submit() {
            if (!this.name || this.name === '') {
                return;
            }

            const apiFunction = this.createMode ? create : update;

            let payload = {
                name: this.name,
                user_group_id: this.user_group_id,
            };

            if (!this.createMode) {
                payload.id = this.id;
            }

            apiFunction(payload)
                .then(() => {
                    this.name = '';
                    this.user_group_id = null;
                    this.$emit('success');
                })
                .catch(err => {
                    console.error(err);
                });
        },
    },
};
</script>
