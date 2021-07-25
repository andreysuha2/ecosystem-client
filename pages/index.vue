<template>
    <div>
      <app-row class="justify-FullHD-center"></app-row>
    </div>
</template>

<script>
import { localApi } from "@localHttp";

export default {
    mounted() {
        dl.log(localApi);
        localApi.query.post('auth/registration', {})
            .then((res) => dl.log(res))
            .catch(e => dl.log(e));
    }
};
</script>
