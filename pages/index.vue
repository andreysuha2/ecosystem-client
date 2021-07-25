<template>
    <div>
      <app-row class="justify-FullHD-center"></app-row>
    </div>
</template>

<script>
import authLocalApi from "@localHttp/auth";
import usersLocalApi from "@localHttp/users";

export default {
    mounted() {
        authLocalApi.check()
            .then(() => usersLocalApi.user.load())
            .then((res) => dl.log(res))
            .then(() => usersLocalApi.search.suggestion({ qs: 'a', verified: 1, resultsCount: 20 }))
            .then((res) => dl.log(res))
            .catch(e => dl.log(e));
    }
};
</script>
