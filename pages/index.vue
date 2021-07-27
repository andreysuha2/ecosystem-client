<template>
    <div>
      <app-row class="justify-FullHD-center"></app-row>
    </div>
</template>

<script>
import { useAuth } from "@composition/auth";
import { useFetch } from "@nuxtjs/composition-api";

export default {
    setup() {
        const { check, login, isAuth, errors } = useAuth(),
            { fetch } = useFetch(async () => {
                await check();
                await login();
            });

        fetch();

        return { isAuth, errors };
    }
};
</script>
