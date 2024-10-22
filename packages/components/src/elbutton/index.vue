<template>
  <el-button :type="type" :disabled="disabled" round
    ><slot>Danger</slot></el-button
  >
</template>
<script lang="ts" setup>
  defineOptions({ name: "test-el-button" });
  withDefaults(
    defineProps<{
      disabled: boolean;
      type: string;
    }>(),
    {
      disabled: false,
      type: "danger"
    }
  );
</script>
