<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ slugify(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Scooters are the future')
</script>
