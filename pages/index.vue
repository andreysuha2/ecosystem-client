<template>
    <div>
      <app-row class="justify-FullHD-center"></app-row>
    </div>
</template>

<script>
import Http from "@apiHttp";
const http = new Http();

export default {
    mounted() {
        dl.log(http);
        http.query.get('getJSON').then((res) => dl.log(res));
    }
};
</script>
