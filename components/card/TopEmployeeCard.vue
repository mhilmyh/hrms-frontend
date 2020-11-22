<template>
  <v-card outlined height="100%" class="px-4">
    <v-card-title>
      <span class="text-center" style="width: 100%">Top Employee</span>
    </v-card-title>
    <v-container fluid class="d-flex justify-center align-center">
      <v-img
        src="/medal/podium.png"
        max-width="128"
        aspect-ratio="1"
        style="width: 100%"
      ></v-img>
    </v-container>
    <v-list v-if="!!items.length">
      <v-list-item three-line v-for="(item, index) in items" :key="item.id">
        <v-list-item-avatar>
          <v-img
            :src="`/medal/medal-${index + 1}.png`"
            max-width="32"
            aspect-ratio="1"
            style="width: 100%"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.full_name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.job_position }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-chip small color="accent" class="overline">
              {{ item.rating }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>