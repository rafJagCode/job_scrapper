<script setup lang="ts">
import WorkMode from './WorkMode.vue';
import ExperienceLevel from './ExperienceLevel.vue';
import SkillChip from './SkillChip.vue';
import { Offer } from '@my_types/Offer';
import { MapIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  offer: Offer;
}>();

const cities = (): string => {
  if (!props.offer.cities.length) return '';
  if (props.offer.cities.length > 7) return props.offer.cities.slice(0, 7).join(', ') + '...';
  return props.offer.cities.join(', ');
};

const age = (): string => {
  const durationInDays = Math.round((Number(new Date()) - Number(new Date(props.offer.published))) / (1000 * 60 * 60 * 24));
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
  <a class="job_offer" :href="offer.link" target="_blank">
    <div class="job_offer__title_and_experience_levels">
      <div class="job_offer__title">{{ offer.title }}</div>
      <div class="job_offer__experience_levels">
        <ExperienceLevel v-for="(experienceLevel, index) in offer.experienceLevels" :key="index" :experienceLevel="experienceLevel" />
      </div>
    </div>
    <div class="job_offer__cities_and_work_modes">
      <div class="job_offer__cities" v-if="offer.cities.length"><MapIcon class="icon md" />{{ cities() }}</div>
      <div class="job_offer__work_modes">
        <WorkMode v-for="(workMode, index) in offer.workModes" :key="index" :workMode="workMode" />
      </div>
    </div>
    <div class="job_offer__published" :data-duration="age()">{{ published() }}</div>
    <div class="job_offer__salary"><CurrencyDollarIcon class="icon sm" />{{ salary() }}</div>
    <div class="job_offer__skills">
      <SkillChip v-for="(skill, index) in offer.skills.slice(0, 7)" :key="index" :skill="skill" />
      <div v-if="offer.skills.length > 7">...</div>
    </div>
  </a>
</template>

<style lang="scss">
.job_offer {
  position: relative;
  cursor: pointer;
  background-color: $secondary;
  margin: 0 1rem 1rem auto;
  padding: 0.5rem 2rem;
  height: 7.6rem;
  width: 100%;
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
  &:visited {
    color: $light;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    position: absolute;
  }
  &:hover {
    color: $light;
    &::before {
      border: 2px dashed white;
    }
  }
  &:focus {
    outline: none;
    color: $light;
    &::before {
      border: 2px dashed white;
    }
  }
}
.job_offer__title_and_experience_levels {
  grid-area: title_and_experience_levels;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.job_offer__experience_levels {
  display: flex;
  gap: 0.5rem;
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
.job_offer__work_modes {
  display: flex;
  gap: 0.5rem;
}
.job_offer__published {
  grid-area: published;
  align-self: start;
  margin-left: 0.5rem;
  white-space: pre;
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
  max-width: 10rem;
}
.job_offer__salary {
  grid-area: salary;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: $accent;
  justify-self: end;
  align-self: start;
  white-space: pre;
}
</style>
