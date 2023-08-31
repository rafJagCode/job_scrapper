<script setup lang="ts">
import WorkMode from '@components/WorkMode.vue';
import ExperienceLevel from '@components/ExperienceLevel.vue';
import Skill from '@components/Skill.vue';
import { Offer } from '@my_types/Offer';
import { MapIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  offer: Offer;
}>();

const cities = (): string => {
  if (!props.offer.cities.length) return '';
  return props.offer.cities.join(', ');
};

const age = (): string => {
  const durationInDays = Math.round((new Date() - new Date(props.offer.published)) / (1000 * 60 * 60 * 24));
  if (durationInDays <= 7) return 'new';
  if (durationInDays >= 20) return 'old';
  return 'medium';
};

const published = (): string => {
  return new Date(props.offer.published).toLocaleDateString('pt-PT');
};

const salary = (): string => {
  if (!props.offer.salary) return 'Not Specified';
  return `${props.offer.salary.from} - ${props.offer.salary.to} zł`;
};
</script>

<template>
  <div class="job_offer">
    <div class="job_offer__title_and_experience_levels">
      <div class="job_offer__title">{{ offer.title }}</div>
      <div class="job_offer__experience_levels">
        <ExperienceLevel v-for="(experience_level, index) in offer.experience_levels" :key="index" :experience_level="experience_level" />
      </div>
    </div>
    <div class="job_offer__cities_and_work_modes">
      <div class="job_offer__cities"><MapIcon class="icon md" />{{ cities() }}</div>
      <div class="job_offer__work_modes">
        <WorkMode v-for="(work_mode, index) in offer.work_modes" :key="index" :work_mode="work_mode" />
      </div>
    </div>
    <div class="job_offer__published" :data-duration="age()">{{ published() }}</div>
    <div class="job_offer__salary"><CurrencyDollarIcon class="icon sm" />{{ salary() }}</div>
    <div class="job_offer__skills">
      <Skill v-for="(skill, index) in offer.skills" :key="index" :skill="skill" />
    </div>
  </div>
</template>

<style lang="scss">
.job_offer {
  background-color: $secondary;
  margin: 1rem 1rem 1rem auto;
  padding: 0.5rem 2rem;
  width: 70%;
  height: 7.6rem;
  box-shadow: none;
  border-radius: 1rem;
  font-size: 1rem;
  color: $light;
  display: grid;
  column-gap: 0.5rem;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(3, 2.2rem);
  grid-template-areas:
    'title_and_experience_levels  salary     published'
    'cities_and_work_modes          .            .    '
    'skills                         .            .    ';
}
.job_offer__title_and_experience_levels {
  grid-area: title_and_experience_levels;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.job_offer__title {
  grid-area: title;
  font-size: 1.5rem;
  color: $accent;
}
.job_offer__cities_and_work_modes {
  grid-area: cities_and_work_modes;
  display: flex;
  gap: 1rem;
}
.job_offer__cities {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.job_offer__published {
  grid-area: published;
  align-self: start;
  margin-left: 0.5rem;
  &[data-duration='new'] {
    color: $low;
  }
  &[data-duration='medium'] {
    color: $medium;
  }
  &[data-duration='old'] {
    color: $high;
  }
}
.job_offer__skills {
  grid-area: skills;
  display: flex;
  gap: 0.5rem;
}
.job_offer__salary {
  grid-area: salary;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: $accent;
  justify-self: end;
  align-self: start;
}
</style>
