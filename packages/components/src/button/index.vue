<template>
  <button :disabled="disabled"><slot>默认内容</slot></button>
</template>

<script lang="ts" setup>
  import "./style/index.scss";
  defineOptions({ name: "test-button" });
  withDefaults(
    defineProps<{
      disabled: boolean;
    }>(),
    {
      disabled: false
    }
  );
</script>
