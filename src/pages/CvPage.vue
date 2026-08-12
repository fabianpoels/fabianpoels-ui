<template>
  <div>
    <q-timeline dark :layout="layout" side="right" class="q-pa-md timeline">
      <q-timeline-entry title="Summary" icon="summarize">
        <div>
          <p>
            I'm an experienced fullstack engineer. Having developed, scaled and maintained multiple
            SaaS projects, I'm always curious about emerging frameworks, languages and stacks. I'm
            motivated by continuously learning, seeking out challenges and finding creative
            solutions. When I'm not behind a computer screen, I like to venture out into the
            mountains and go climbing, hiking or take pictures.
          </p>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Programming languages & frameworks" icon="fa-solid fa-code">
        <div class="q-mb-lg">
          <q-chip size="lg" outline dark>Python</q-chip>
          <q-chip size="lg" outline dark>Ruby</q-chip>
          <q-chip size="lg" outline dark>Go</q-chip>
          <q-chip size="lg" outline dark>C++</q-chip>
          <br />
          <q-chip size="lg" outline dark>JavaScript</q-chip>
          <q-chip size="lg" outline dark>TypeScript</q-chip>
          <q-chip size="lg" outline dark>HTML | CSS</q-chip>
        </div>
        <div class="q-mb-lg">
          <q-chip size="lg" outline dark>Vue.js</q-chip>
          <q-chip size="lg" outline dark>Angular</q-chip>
          <q-chip size="lg" outline dark>Ruby on Rails</q-chip>
          <q-chip size="lg" outline dark>Flask</q-chip>
        </div>
        <div class="q-mb-lg">
          <q-chip size="lg" outline dark>MySQL</q-chip>
          <q-chip size="lg" outline dark>Postgres</q-chip>
          <q-chip size="lg" outline dark>MongoDB</q-chip>
          <br />
          <q-chip size="lg" outline dark>Redis</q-chip>
          <q-chip size="lg" outline dark>RabbitMQ</q-chip>
        </div>
        <div class="q-mb-lg">
          <q-chip size="lg" outline dark>Docker</q-chip>
          <q-chip size="lg" outline dark>Linux</q-chip>
          <q-chip size="lg" outline dark>Git</q-chip>
          <br />
          <q-chip size="lg" outline dark>CI | CD</q-chip>
          <q-chip size="lg" outline dark>Ansible</q-chip>
          <q-chip size="lg" outline dark>AWS</q-chip>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Languages" icon="translate">
        <q-list dense>
          <q-item>
            <q-item-section avatar><div class="flag fi fis fi-nl" /></q-item-section>
            <q-item-section>Dutch: native proficiency</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><div class="flag fi fis fi-fr" /></q-item-section>
            <q-item-section>French: full professional proficiency</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><div class="flag fi fis fi-gb" /></q-item-section>
            <q-item-section>English: full professional proficiency</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><div class="flag fi fis fi-de" /></q-item-section>
            <q-item-section>German: limited working proficiency</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><div class="flag fi fis fi-it" /></q-item-section>
            <q-item-section>Italian: limited working proficiency</q-item-section>
          </q-item>
        </q-list>
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
      <q-timeline-entry heading>
        <q-btn flat rounded dark size="xl"> Work experience </q-btn>
      </q-timeline-entry>
      <q-timeline-entry subtitle="February 2025 - Present" icon="fa-solid fa-laptop-code">
        <template #title>
          <div>
            <a href="https://allsides.tech" target="_blank">ALLSIDES</a> (formerly Covision Media) -
            Full-Stack Software Engineer
          </div>
          <div class="text-subtitle1">
            Market-leading 3D scanning technology company serving Nike, Adidas, Amazon, Meta,
            Zalando, and Inditex
          </div>
        </template>
        <div>
          <div class="q-mb-md">
            <span class="text-weight-bold">
              Python, C++, TypeScript/Angular, Docker, AWS (S3, Lambda, API Gateway) </span
            >, with focus on high-volume data processing and real-time system orchestration
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Core Product Development</div>
            Built and maintained critical software infrastructure for enterprise 3D scanning
            operations, including capturing software (Python), main controller orchestrating 150GB+
            data processing pipelines, and centralized scanner management hub
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Client Partnership & Technical Leadership</div>
            Serve as primary technical contact for major client Zalando, conducting weekly
            performance evaluations and translating complex technical requirements into product
            roadmap priorities
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">System Architecture & Integration</div>
            Designed and implemented reference image processing system across full data pipeline;
            introduced event-driven architecture with message queue system and webhook integration
            enabling client post-processing workflows
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Infrastructure Innovation</div>
            Built automated deployment system using MAAS and Ansible, significantly reducing
            on-premise hardware setup times and ensuring consistent configuration across client
            installations
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">End-to-End Problem Solving</div>
            Performed independent on-site technical interventions combining hardware and software
            expertise; led incident response including data recovery and client communication
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry subtitle="July 2021 - August 2024" icon="fa-solid fa-laptop-code">
        <template #title>
          <div>
            <a href="https://www.no-q.info/" target="_blank">No-Q</a> - Full-Stack Software Engineer
          </div>
          <div class="text-subtitle1">
            Capacity-oriented booking platform for pharmacy industry, scaling to 3000+ locations
            during COVID-19 testing surge
          </div>
        </template>
        <div>
          <div class="q-mb-md">
            <span class="text-weight-bold"
              >Ruby on Rails, Vue.js, MySQL, Sidekiq background processing</span
            >, with focus on high-volume transaction processing and regulatory compliance
            integrations
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Rapid Scale Engineering</div>
            Architected performance optimizations enabling platform to scale from 3 to 3000+ clients
            within weeks, handling up to ~100K daily bookings at peak through API optimization,
            custom SQL queries, and UI refactoring for large datasets
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Critical Integration Leadership</div>
            Managed incident response including payment debugging, fraud investigation support for
            German/Italian law enforcement, and performance troubleshooting across distributed
            systems
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">High-Stakes Problem Solving</div>
            Led end-to-end development of Stripe payment integration including data architecture,
            webhook systems, and redundancy mechanisms; architected RKI institute integration for
            official COVID test result certification with batch processing and QR code generation
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Foundation Team Member</div>
            Contributed as core technical team member during company spinoff, helping establish
            platform architecture that supported explosive growth from startup to enterprise scale
          </div>
        </div>
      </q-timeline-entry>
      <q-timeline-entry subtitle="May 2018 - June 2021" icon="fa-solid fa-laptop-code">
        <template #title>
          <div>
            <a href="https://gym.vertical-life.info/" target="_blank">Vertical-Life</a> - Full-Stack
            Software Engineer
          </div>
          <div class="text-subtitle1">
            Digital service provider for climbing industry, leading development of profitable SaaS
            platform
          </div>
        </template>
        <div>
          <div class="q-mb-md">
            <span class="text-weight-bold"
              >Ruby on Rails, Vue.js, MySQL, Sidekiq background processing</span
            >, with emphasis on interactive web applications and payment processing integration
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Product Leadership</div>
            Led Smart Climbing Gym platform serving 300+ climbing gyms (8x growth during tenure),
            driving core revenue-generating product through feature development, performance
            optimization, and reliability improvements
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Major Platform Modernization</div>
            Architected and executed complete frontend migration from Rails templates to Vue.js,
            including comprehensive UI redesign and API refactoring - significantly improving user
            experience and development velocity
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Complex Feature Development</div>
            Built sophisticated interactive tools from scratch including SVG-based gym layout
            drawing tool and route-setting management system; developed comprehensive user/role
            authorization system and integrated booking platform with payment processing
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Technical Mentorship</div>
            Guided two engineering interns through calendar feature development, gaining first
            formal mentoring experience while expanding platform capabilities
          </div>
          <div class="q-mb-md">
            <div class="text-weight-bold">Cross-Functional Collaboration</div>
            Integrated CRM platform (Braze) working directly with marketing team; contributed to
            additional product initiatives including climbing results service and centralized URL
            service POCs
          </div>
        </div>
      </q-timeline-entry>
      <!-- <q-timeline-entry
        v-show="expand_work_experience"
        title="Sportoase Philipssite - Climbing gym operational manager"
        subtitle="SEPTEMBER 2011 - APRIL 2018"
      >
        <div>
          Responsibility for the commercial, financial and practical operation of a climbing gym
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        v-show="expand_work_experience"
        title="Kivif / Bosk - High rope course instructor"
        subtitle="2011 - 2016"
      />
      <q-timeline-entry
        v-show="expand_work_experience"
        title="D’Store - Process analyst"
        subtitle="2010 - 2012"
      >
        <div>
          Analyzing business processes to prepare the implementation of a fully automated stock
          management system
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        v-show="expand_work_experience"
        title="D’Store - Sales employee"
        subtitle="2010 - 2011"
      /> -->
      <q-timeline-entry
        title="Bonos - Freelance web developer"
        subtitle="2014 - 2017"
        icon="fa-solid fa-laptop-code"
      >
        <div>Worked on several small-scale websites, web applications and PoC’s</div>
      </q-timeline-entry>
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
      <!-- <q-timeline-entry
        v-show="expand_work_experience"
        title="Several bars and venues - Waiter & bartender"
        subtitle="2005 - 2009"
      >
        <div>Student jobs in different bars</div>
      </q-timeline-entry> -->
      <q-timeline-entry heading>
        <q-btn
          flat
          rounded
          dark
          size="xl"
          :icon-right="expand_projects ? 'expand_less' : 'expand_more'"
          @click="expand_projects = !expand_projects"
        >
          Projects
        </q-btn>
      </q-timeline-entry>
      <template v-if="expand_projects">
        <q-timeline-entry title="Almanac" icon="fa-solid fa-laptop-code">
          <div class="q-mb-md">
            Intelligence-led platform for real-time updates on Lebanon’s political and security
            landscape.
          </div>
          <div class="q-mb-md">
            I designed, implemented and deployed the full stack of the proof of concept.
          </div>
          <div class="q-mb-md">
            External API integrations:
            <ul>
              <li>Mapbox for map rendering</li>
              <li>Google Maps Geocoding</li>
              <li>Claude AI</li>
            </ul>
          </div>
          <div class="q-mb-md">
            Frontend:
            <ul>
              <li>VueJS</li>
              <li>Quasar UI framework</li>
              <li>Mapbox JS</li>
            </ul>
          </div>
          <div class="q-mb-md">
            Backend:
            <ul>
              <li>Go</li>
              <li>Gin Web Framework</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <a href="https://github.com/fabianpoels/almanac-api-go" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
            <a href="https://github.com/fabianpoels/almanac-frontend" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
            <a href="https://github.com/fabianpoels/almanac-news-service-go" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
            <a href="https://github.com/fabianpoels/almanac-models" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
          </div>
        </q-timeline-entry>
        <q-timeline-entry title="fabianpoels.com" icon="fa-solid fa-laptop-code">
          <div class="q-mb-md">
            My humble homepage with mainly static content (CV and pictures), with the exception of a
            small NodeJS API for managing my climbing palmares.
          </div>
          <div class="q-mb-md">
            Stack:
            <ul>
              <li>VueJS + Quasar UI framework</li>
              <li>Go</li>
              <li>Redis</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <a href="https://github.com/fabianpoels/fabianpoels-ui" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
            <a href="https://github.com/fabianpoels/fabianpoels-api-go" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
          </div>
        </q-timeline-entry>
        <q-timeline-entry title="Prelude POS" icon="fa-solid fa-laptop-code">
          <div class="q-mb-md">
            A proof-of-concept for a fully offline Point-Of-Sale, supporting hardware integration
            with NFC and Id-card readers.
          </div>
          <div class="q-mb-md">
            Stack:
            <ul>
              <li>VueJS</li>
              <li>Electron</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <a href="https://github.com/fabianpoels/prelude-pos" target="_blank">
              <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
            </a>
          </div>
        </q-timeline-entry>
      </template>
      <q-timeline-entry heading>
        <q-btn
          flat
          rounded
          dark
          size="xl"
          :icon-right="expand_education ? 'expand_less' : 'expand_more'"
          @click="expand_education = !expand_education"
        >
          Education
        </q-btn>
      </q-timeline-entry>
      <q-timeline-entry
        title="KH Leuven / UCLL - Bachelor in applied informatics"
        subtitle="2007 - 2010 / 2017 - 2018"
        icon="fa-solid fa-graduation-cap"
      ></q-timeline-entry>
      <q-timeline-entry
        v-show="expand_education"
        title="Sport Vlaanderen / VTS - Climbing instructor"
        subtitle="2016"
      />
      <q-timeline-entry
        v-show="expand_education"
        title="Sport Vlaanderen / VTS - Snowboard instructor"
        subtitle="2011"
      />
      <q-timeline-entry
        v-show="expand_education"
        title="Exponent - European rope course rescuer"
        subtitle="2011"
      />
      <q-timeline-entry
        v-show="expand_education"
        title="KULeuven - Bachelor in physics"
        subtitle="2005 - 2007"
      >
        <div>No degree</div>
      </q-timeline-entry>
      <q-timeline-entry
        v-show="expand_education"
        title="Sint-Pieterscollege - High School Degree"
        subtitle="1999-2005"
      >
        <div>General high school degree with focus on math and sciences</div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
defineOptions({
  name: 'CvPage',
})

const expand_work_experience = ref(false)
const expand_education = ref(false)
const expand_projects = ref(false)

const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : 'comfortable'
})
</script>
<style scoped lang="scss">
a {
  color: $primary;
  text-decoration: none;
}

.timeline {
  font-size: 16px;
}
.flag {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
