<template>
    <div>
        <p>
            Create new group
        </p>
        <user-group-edit-form
                @success="onGroupEdit"
        />
        <ul>
            <li
                    v-for="group in list"
                    :key="group.id"
            >
                <div v-if="group.id !== groupIdEdit">
                    <nuxt-link :to="`/group/${group.id}`">
                        {{group.name}}
                    </nuxt-link>
                    <a @click="groupEditTurnOn(group)">
                        <small>(edit)</small>
                    </a>
                </div>
                <div v-else>
                    <user-group-edit-form
                            :group-data="group"
                            :create-mode="false"
                            @success="onGroupEdit"
                    />
                    <a @click="groupEditTurnOff">
                        <small>(cancel)</small>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import UserGroupEditForm from '~/components/user-group-edit-form.vue';
import {
    getList
} from '~/api/user-group.js';

export default {
    head () {
        return {
            title: 'User groups',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'User groups description' },
            ],
        }
    },

    components: {
        UserGroupEditForm,
    },

    data: () => ({
        list: [],
        groupIdEdit: null,
    }),

    asyncData({error}) {
        return getList()
            .then(({data}) => {
                return {
                    list: data,
                };
            })
            .catch(error);
    },

    methods: {
        onGroupEdit() {
            getList()
                .then(({data}) => {
                    this.list = data;
                    this.groupEditTurnOff();
                });
        },

        groupEditTurnOn(group) {
            this.groupIdEdit = group.id;
        },
        groupEditTurnOff() {
            this.groupIdEdit = null;
        },
    },
};
</script>
