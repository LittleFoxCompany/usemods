<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isInteger(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1)
</script>
