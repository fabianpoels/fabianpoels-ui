<template>
  <div>
    <q-timeline dark layout="comfortable" side="right" class="q-pa-xl timeline">
      <q-timeline-entry title="Summary" icon="summarize">
        <div>
          Thorough knowledge and affinity with modern day full-stack software/web development.
          Interest in the latest emerging technologies and frameworks, always keen to learn
          something new. Experience in an agile product team as lead developer, working both
          remotely and on-site. Deciding about architectural directions, as well as low-level
          application profiling.
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Programming languages & frameworks" icon="fa-solid fa-code">
        <q-icon name="fa-brands fa-vuejs" size="lg" class="q-mr-lg" />
        <q-icon name="fa-brands fa-js" size="lg" class="q-mr-lg" />
        <q-icon name="fa-brands fa-node" size="lg" class="q-mr-lg" />
        <q-icon name="fa-brands fa-html5" size="lg" class="q-mr-lg" />
        <q-icon name="fa-brands fa-git" size="lg" class="q-mr-lg" />
        <q-icon name="fa-brands fa-docker" size="lg" class="q-mr-lg" />
      </q-timeline-entry>
      <q-timeline-entry title="Languages" icon="translate">
        <ul>
          <li>Dutch: native proficiency</li>
          <li>French: full professional proficiency</li>
          <li>English: full professional proficiency</li>
          <li>German: limited working proficiency</li>
          <li>Italian: limited working proficiency</li>
        </ul>
      </q-timeline-entry>
      <q-timeline-entry title="Links" icon="link">
        <a href="mailto://fabian@fabianpoels.com">
          <q-icon name="fa-solid fa-envelope" size="sm" class="link-icon" />
        </a>
        <a href="https://github.com/fabianpoels" target="_blank">
          <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
        </a>
        <a href="https://www.linkedin.com/in/fabian-poels-13b67a187/" target="_blank">
          <q-icon name="fa-brands fa-linkedin" size="sm" class="link-icon" />
        </a>
        <a href="https://www.instagram.com/fabianpoels/" target="_blank">
          <q-icon name="fa-brands fa-instagram" size="sm" class="link-icon" />
        </a>
      </q-timeline-entry>
      <q-timeline-entry heading>Work experience</q-timeline-entry>
      <q-timeline-entry
        title="No-Q - Senior Fullstack Developer"
        subtitle="July 2021 - Present"
        icon="fa-solid fa-laptop-code"
      >
        <div>Developer on the centralized payment/checkout service (Rails - Mysql)</div>
        <div>
          Developer on No-Q, time-saving appointment and staff management software for medical
          service providers (Rails - Vue - Sidekiq - MySQL)
          <ul>
            <li>Implementing API endpoints</li>
            <li>Setting up integrations with external partners</li>
            <li>Optimizing endpoints and queries for handling high-volume traffic</li>
            <li>Incident handling</li>
          </ul>
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Vertical-life - Fullstack Developer"
        subtitle="May 2018 - June 2021"
        icon="fa-solid fa-laptop-code"
      >
        <div>
          Lead developer on the Smart Climbing Gym-project, a SaaS climbing gym management suite
          (Rails - Vue - MySQL - docker)
          <ul>
            <li>Implementing new user interfaces and functionality</li>
            <li>Maintaining and expanding the ORM data model</li>
            <li>Creating and updating API endpoints</li>
            <li>Maintaining software stack and deployment pipelines</li>
          </ul>
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Sportoase Philipssite - Climbing gym operational manager"
        subtitle="SEPTEMBER 2011 - APRIL 2018"
      >
        <div>
          Responsibility for the commercial, financial and practical operation of a climbing gym
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Kivif / Bosk - High rope course instructor" subtitle="2011 - 2016" />
      <q-timeline-entry title="D’Store - Process analyst" subtitle="2010 - 2012">
        <div>
          Analyzing business processes to prepare the implementation of a fully automated stock
          management system
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="D’Store - Sales employee" subtitle="2010 - 2011" />
      <q-timeline-entry
        title="Smartlounge / Kunstmaan - Junior Developer"
        subtitle="2010"
        icon="fa-solid fa-laptop-code"
      >
        <div>
          Three month internship followed by a one month paid position in the web development
          department of a communication agency. I worked mostly on their own Java-based CMS, as well
          as on small PoC’s for future projects
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Several bars and venues - Waiter & bartender" subtitle="2005 - 2009">
        <div>Student jobs in different bars</div>
      </q-timeline-entry>
      <q-timeline-entry heading>Education</q-timeline-entry>
      <q-timeline-entry
        title="KH Leuven / UCLL - Bachelor in applied informatics"
        subtitle="2007 - 2010 / 2017 - 2018"
        icon="fa-solid fa-graduation-cap"
      ></q-timeline-entry>
      <q-timeline-entry title="KULeuven - Bachelor in physics" subtitle="2005 - 2007">
        <div>No degree</div>
      </q-timeline-entry>
      <q-timeline-entry title="Sint-Pieterscollege - High School Degree" subtitle="1999-2005">
        <div>General high school degree with focus on math and sciences</div>
      </q-timeline-entry>
      <q-timeline-entry heading>Other degrees</q-timeline-entry>
      <q-timeline-entry title="Sport Vlaanderen / VTS - Climbing instructor" subtitle="2016" />
      <q-timeline-entry title="Sport Vlaanderen / VTS - Snowboard instructor" subtitle="2011" />
      <q-timeline-entry title="Exponent - European rope course rescuer" subtitle="2011" />
    </q-timeline>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CvPage',
})
</script>
<style scoped>
.timeline {
  font-size: 16px;
}
</style>
