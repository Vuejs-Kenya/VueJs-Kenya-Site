<script setup lang='ts'>
import CardTeamComponent from '~/components/card/TeamComponent.vue'
import BaseContainerComponent from '~/components/base/ContainerComponent.vue'

const teamMembers = [
  {
    id: 1,
    name: 'Josh Murigi',
    title: 'Founder of VueJs Kenya',
    description: 'Josh Murigi, founder of VueJs Kenya, leads vision, organizes events, fosters partnerships, mentors, advocates, and ensures community growth.',
    githubURL: 'https://github.com/Ryggs',
    twitterURL: 'https://twitter.com/josh_ryggs',
    imageURL: 'https://github.com/Ryggs.png',
  },

  {
    id: 2,
    name: 'Lenny Kamande',
    title: 'Co-founder of VueJs Kenya',
    description: 'Lenny Kamande, co-founder of VueJs Kenya, guides vision, organizes events, fosters partnerships, mentors, and drives community growth.',
    githubURL: 'https://github.com/lennykamande',
    twitterURL: 'https://twitter.com/lennymanyeki',
    imageURL: 'https://pbs.twimg.com/profile_images/1186670731452735489/upoV3xXv_400x400.jpg',
  },

  {
    id: 4,
    name: 'Brian Nduhiu',
    title: 'Lead Event Organizer',
    description: 'Brian Nduhiu, organizes both physical meetups and weekly Thursday standups for VueJs Kenya community, fostering community growth by sharing knowledge.',
    githubURL: 'https://github.com/brian-nduhiu',
    twitterURL: 'https://twitter.com/BrianNduhiu',
    imageURL: 'https://github.com/brian-nduhiu.png',
  },
  {
    id: 3,
    name: 'Cynthia Nafula',
    title: 'Social Media Manager',
    description: 'Cynthia Nafula takes on the role of social media manager for VueJs Kenya, leading the online presence and engagement strategies of the VueJs Kenya community.',
    githubURL: 'https://github.com/Vuejs-Kenya',
    twitterURL: 'https://twitter.com/_NafulaC',
    imageURL: 'https://ugc.production.linktr.ee/GC8s3CL4QASxvCHH3F9c_1YnlmMAz5cIaKUrO?io=true&size=avatar-v3_0',
  },
  {
    id: 5,
    name: 'Selemon Brahanu',
    title: 'Lead FrontEnd Engineer',
    description: 'Selemon Brahanu is the Lead FrontEnd Engineer at VueJs Kenya, where he guides frontend development efforts. He gives guidance, and fosters collaboration within the community.',
    githubURL: 'https://github.com/selemondev',
    twitterURL: 'https://twitter.com/selemondev',
    imageURL: 'https://github.com/selemondev.png',
  },

  {
    id: 6,
    name: 'Derrick Mbarani',
    title: 'Software Engineer',
    description: 'Derrick Mbarani, our software engineer, keeps us engaged and informed with newsletters brimming with the latest updates, job opportunities, and exciting events from the Vue ecosystem.',
    githubURL: 'https://github.com/sciederrick',
    twitterURL: 'https://twitter.com/der15171',
    imageURL: 'https://github.com/sciederrick.png',
  },
]
</script>

<template>
  <BaseContainerComponent>
    <div class="flex flex-col space-y-8">
      <div class="mb-4 text-center">
        <div class="flex flex-col space-y-3 items-center">
          <h1 class="text-3xl sm:text-4xl text-center font-semibold">
            Meet The <span class="text-green-500">Team</span>
          </h1>
          <p class="max-w-2xl font-Inter px-2 dark:text-gray-300 text-md md:px-0">
            Welcome to the team! We are a group of passionate individuals working together to achieve the
            community's goals.
          </p>
        </div>
      </div>
      <div class="grid place-items-center gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2">
        <main v-for="{ id, name, title, description, githubURL, twitterURL, imageURL } in teamMembers" :key="id">
          <CardTeamComponent
            :name="name" :description="description" :title="title" :github-u-r-l="githubURL"
            :twitter-u-r-l="twitterURL" :image-u-r-l="imageURL"
          />
        </main>
      </div>
    </div>
  </BaseContainerComponent>
</template>
