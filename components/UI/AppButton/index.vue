<template>
    <button
        @click="$emit('click')"
        :class="classList"
        class="app-button">
        <app-icon v-if="icon" :name="icon"/>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: [ String, Boolean ],
            default: false,
            validator(icon) {
                if(typeof icon === 'boolean') return !icon;
                return true;
            }
        },
        type: {
            type: [ String, Boolean ],
            default: false,
            validator(type) {
                if(typeof type === 'boolean') return !type;
                return [ 'primary', 'cancel', 'accept' ].includes(type);
            }
        }
    },
    computed: {
        classList() {
            return [
                { "app-button__icon": this.icon },
                this.type ? `app-button__${this.type}` : ''
            ];
        }
    }
};
</script>

<style lang="scss">
.app-button {
    //vars
    --button-font-family: var(--main-font);
    //styles
    font-family: var(--button-font-family);

    &:not(:disabled) {
        cursor: pointer;
    }

    &__icon {
        display: inline-flex;
        padding: 0;
        line-height: normal;
        background: transparent;
        border: none;
    }
}
</style>
