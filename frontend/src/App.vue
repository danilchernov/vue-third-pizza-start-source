<template>
  <AppLayout>
    <RouterView v-if="isLoaded" />
  </AppLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore, useDataStore } from "@/stores";
import JwtService from "@/services/jwt/jwt.service";
import { router } from "@/router";
import { AppLayout } from "@/layouts";

const dataStore = useDataStore();
const route = useRoute();
const isLoaded = ref(false);

const checkLoggedIn = async () => {
  const authStore = useAuthStore();
  const token = JwtService.getToken();
  if (!token) {
    isLoaded.value = true;
    return;
  }

  try {
    await authStore.whoami();
    const { redirect } = route.query;
    await router.push(redirect ? redirect : { name: "home" });
  } catch (e) {
    JwtService.destroyToken();
    console.error(e);
  } finally {
    isLoaded.value = true;
  }
};

onMounted(() => {
  checkLoggedIn();
  dataStore.loadData();
});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
