<script setup lang="ts">

import { defineProps } from 'vue';

type Timetable = {
  time: number,
  content: string
}[];

const props = defineProps({
  clock: {
    type: Date,
    required: true
  },
  timetable: {
    type: Array as () => Timetable,
    required: true
  }
});

const clock = new Date(props.clock);

const events = props.timetable.map(event => {
  const start = clock.toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
  });
  clock.setMinutes(clock.getMinutes() + event.time);
  const end = clock.toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
  });
  const content = event.content;
  return {
    time: `${start} - ${end}`,
    content
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>時間</th>
        <th>内容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="event in events" :key="event.time">
        <td>{{ event.time }}</td>
        <td>{{ event.content }}</td>
      </tr>
    </tbody>
  </table>
</template>
