<template>
    <footer class="app-footer">
        <app-container class="app-footer--container flex justify-center">
            <span class="app-footer--copy">&copy; {{ year }}</span>
        </app-container>
    </footer>
</template>

<script>
export default {
    data() {
        return { year: new Date().getFullYear() };
    }
};
</script>
