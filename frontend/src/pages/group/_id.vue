<template>
    <div>
        <div v-if="$route.params.id">
            <p>
                Create new user
            </p>
            <user-edit-form
                @success="onUserEdit"
                :user-data="{
                    user_group_id: +$route.params.id,
                }"
            />
        </div>
        <ul>
            <li
                    v-for="user in list"
                    :key="user.id"
            >
                <div v-if="user.id !== userIdEdit">
                    {{user.name}}
                    <a @click="userEditTurnOn(user)">
                        <small>(edit)</small>
                    </a>
                </div>
                <div v-else>
                    <user-edit-form
                            :user-data="user"
                            :create-mode="false"
                            @success="onUserEdit"
                    />
                    <a @click="userEditTurnOff">
                        <small>(cancel)</small>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import UserEditForm from '~/components/user-edit-form.vue';
import {
    getList
} from '~/api/user.js';

export default {
    head () {
        return {
            title: `Group ${this.$route.params.id} user list`,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'User groups description' },
            ],
        }
    },

    components: {
        UserEditForm,
    },

    data: () => ({
        list: [],
        userIdEdit: null,
    }),

    asyncData({params, error}) {
        return getList(+params.id)
            .then(({data}) => {
                return {
                    list: data,
                };
            })
            .catch(error);
    },

    methods: {
        onUserEdit() {
            getList(+this.$route.params.id)
                .then(({data}) => {
                    this.list = data;
                    this.userEditTurnOff();
                });
        },

        userEditTurnOn(user) {
            this.userIdEdit = user.id;
        },
        userEditTurnOff() {
            this.userIdEdit = null;
        },
    },
};
</script>
