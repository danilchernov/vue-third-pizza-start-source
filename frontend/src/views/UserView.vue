<template>
  <sidebar-layout>
    <template #sidebar>
      <RouterLink
        class="layout__link"
        :class="{ 'layout__link--active': routeName === 'orders' }"
        :to="{ name: 'orders' }"
      >
        История заказов
      </RouterLink>
      <RouterLink
        class="layout__link"
        :class="{ 'layout__link--active': routeName === 'profile' }"
        :to="{ name: 'profile' }"
      >
        Мои данные
      </RouterLink>
    </template>

    <router-view />
  </sidebar-layout>
</template>

<script setup>
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const routeName = computed(() => route.name);
</script>
