<template>
    <div>
      <app-row class="justify-FullHD-center"></app-row>
    </div>
</template>

<script>
import authLocalApi from "@localHttp/auth";
import usersLocalApi from "@localHttp/users";
import financesLocalHttp from "@localHttp/finances";

export default {
    created() {
        authLocalApi.check()
            .then(({ data }) => dl.log('auth check', data))
            .then(() => usersLocalApi.user.load())
            .then(({ data }) => dl.log('user load:', data))
            .then(() => usersLocalApi.search.suggestion({ qs: 'a', verified: 1, resultsCount: 10 }))
            .then(({ data }) => dl.log('user suggestion search:', data))
            .then(() => financesLocalHttp.currencies.list())
            .then(({ data }) => dl.log('currencies list:', data))
            .then(() => financesLocalHttp.currencies.currency.read(2))
            .then(({ data }) => dl.log('currency load:', data))
            .then(() => financesLocalHttp.valets.list())
            .then(({ data }) => dl.log('valets list:', data))
            .then(() => financesLocalHttp.valets.valet.read(1))
            .then(({ data }) => dl.log('valet:', data))
            .then(() => financesLocalHttp.valets.valet.categories(1).list())
            .then(({ data }) => dl.log('categories:', data))
            .then(() => financesLocalHttp.valets.valet.balances(1).list())
            .then(({ data }) => dl.log('balances:', data))
            .then(() => financesLocalHttp.valets.valet.balances(1).balance.read(1))
            .then(({ data }) => dl.log('balance:', data))
            .then(() => financesLocalHttp.valets.valet.participants(1).list())
            .then(({ data }) => dl.log('participants:', data))
            .then(() => financesLocalHttp.valets.valet.participants(1).participant.read(1))
            .then(({ data }) => dl.log('participant:', data))
            .catch(e => dl.log(e));
    }
};
</script>
