<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.app-container {
    //vars
    --container-width: 1920px;
    --container-paddings: 10px;
    @include min-w($wWidthSmall) {
        --container-paddings: 15px;
    }
    //styles
    width: 100%;
    max-width: var(--container-width);
    padding: 0 var(--container-paddings);
    margin: 0 auto;
}
</style>
