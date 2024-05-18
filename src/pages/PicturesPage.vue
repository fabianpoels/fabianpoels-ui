<template>
  <div id="galleryContainer" ref="galleryContainer" style="position: relative">
    <q-resize-observer @resize="onResize" />
    <div
      class="item"
      v-for="(box, index) in imageGeometry"
      :key="index"
      :style="box.style"
      @click="startCarousel(index)"
    >
      <img
        :src="`images/${box.image.name}_thumb.jpg`"
        :alt="box.image.description"
        :width="box.width"
        :height="box.height"
      />
    </div>
    <q-carousel
      fullscreen
      animated
      arrows
      infinite
      swipeable
      padding
      id="carousel"
      v-model="slide"
      v-if="showCarousel"
    >
      <q-carousel-slide v-for="(image, index) in images" :key="index" :name="index">
        <q-img
          no-native-menu
          fit="scale-down"
          :src="`images/${image.name}.jpg`"
          style="max-width: 100%; max-height: 100%"
        />
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn round text-color="dark-grey" icon="close" @click="showCarousel = false" />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import justifiedLayout from 'justified-layout'

defineOptions({
  name: 'PicturesPage',
})

const galleryContainer = ref(null)
const width = ref(0)

const slide = ref(1)
const showCarousel = ref(false)

function startCarousel(index) {
  slide.value = index
  showCarousel.value = true
}

function onResize(val) {
  width.value = val.width
}

const imageGeometry = computed(() => {
  if (!galleryContainer.value) return
  const geometry = justifiedLayout(images, {
    containerWidth: width.value,
    containerPadding: 20,
    boxSpacing: 20,
    targetRowHeight: 270,
  })
  return geometry.boxes.map((element, index) => {
    const image = images[index]
    return {
      image: image,
      height: element.height,
      width: element.width,
      style: {
        height: `${element.height}px`,
        width: `${element.width}px`,
        top: `${element.top}px`,
        left: `${element.left}px`,
        position: 'absolute',
      },
    }
  })
})

const images = [
  {
    name: 'fabianpoels_climbing_finale_lubna',
    description: "Lubna, Grotta dell'Edera, Finale (ITALY)",
    width: 360,
    height: 540,
  },
  {
    name: 'fabianpoels_landscape_langkofel',
    description: 'Langkofel, Dolomites (ITALY)',
    width: 809,
    height: 540,
  },
  { name: 'fabianpoels_landscape_airplane', description: 'Airplane', width: 360, height: 540 },
  {
    name: 'fabianpoels_landscape_val_badia',
    description: 'Val Badia, Dolomites (ITALY)',
    width: 809,
    height: 540,
  },
  {
    name: 'fabianpoels_climbing_cikola',
    description: "Nina Landekar on 'Grenguar', Čikola (CROATIA)",
    width: 809,
    height: 540,
  },
  {
    name: 'fabianpoels_landscape_krka',
    description: 'Krka national park (CROATIA)',
    width: 809,
    height: 540,
  },
  { name: 'fabianpoels_landscape_frost', description: 'Frost', width: 361, height: 540 },
  {
    name: 'fabianpoels_landscape_lagodigarda',
    description: 'Sunset on Lago di Garda (ITALY)',
    width: 361,
    height: 540,
  },
  {
    name: 'fabianpoels_landscape_autumntrees',
    description: 'Autumn trees',
    width: 809,
    height: 540,
  },
  { name: 'fabianpoels_portrait_italianguy', description: 'Italian guy', width: 809, height: 540 },
  {
    name: 'fabianpoels_climbing_finale_roccadicorno',
    description: 'Rombo di Vento, Rocca di Corno, Finale (ITALY)',
    width: 361,
    height: 540,
  },
  { name: 'fabianpoels_landscape_lightning', description: 'Lightning', width: 808, height: 540 },
  {
    name: 'fabianpoels_climbing_lumignano_boomerang',
    description: 'Cody Roth on Boomerang, Lumignano (ITALY)',
    width: 361,
    height: 540,
  },
  {
    name: 'fabianpoels_portrait_lithuanian_girl',
    description: 'Lithuanian girl',
    width: 361,
    height: 540,
  },
  { name: 'fabianpoels_landscape_rain', description: 'Rain', width: 808, height: 540 },
  {
    name: 'fabianpoels_climbing_menhir',
    description: 'Thomas Prenn on Menhir, Passo Gardena, Dolomites (ITALY)',
    width: 361,
    height: 540,
  },
  {
    name: 'fabianpoels_portrait_italianbride',
    description: 'Italian bride',
    width: 361,
    height: 540,
  },
  {
    name: 'fabianpoels_landscape_dolomites_storm',
    description: 'Storm in the dolomites',
    width: 809,
    height: 540,
  },
]
</script>
<style>
.item {
  cursor: pointer;
}

#carousel {
  background-color: #000;
}
</style>
