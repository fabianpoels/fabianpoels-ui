<template>
  <div
    id="galleryContainer"
    ref="galleryContainer"
    :style="`position: relative; height: ${imageGeometry.containerHeight}px`"
    class="p-mb-lg"
  >
    <q-resize-observer @resize="onResize" />
    <div
      class="item"
      v-for="(box, index) in imageGeometry.boxes"
      :key="index"
      :style="box.style"
      @click="startFancybox(index)"
    >
      <img
        :src="`images/${box.image.name}_thumb.jpg`"
        :alt="box.image.description"
        :width="box.width"
        :height="box.height"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
const gtag = getCurrentInstance().appContext.app.config.globalProperties.$gtag
import { useQuasar } from 'quasar'
const $q = useQuasar()
import justifiedLayout from 'justified-layout'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

defineOptions({
  name: 'PicturesPage',
})

const images = [
  {
    name: 'fabianpoels_landscape_dolomites_storm',
    description: 'Storm in the dolomites',
    width: 809,
    height: 540,
  },
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
]

const fancyboxImages = images.map((i) => ({
  src: `images/${i.name}.jpg`,
  thumb: `images/${i.name}_thumb.jpg`,
  caption: i.description,
}))

function startFancybox(index) {
  new Fancybox(fancyboxImages, {
    startIndex: index,
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['fullscreen', 'close'],
      },
    },
    on: {
      'Carousel.ready Carousel.settle': (fancybox) => {
        const slide = fancybox.getSlide()
        if (slide && slide.src) {
          const name = slide.src.split('fabianpoels_')[1].split('.jpg')[0]
          gtag.event(`view_image_${name}`, {})
        }
      },
      'Carousel.click': (fancybox) => {
        const slide = fancybox.getSlide()
        if (slide && slide.src) {
          const name = slide.src.split('fabianpoels_')[1].split('.jpg')[0]
          gtag.event(`click_image_${name}`, {})
        }
      },
    },
  })
}

const galleryContainer = ref(null)
const width = ref(0)

function onResize(val) {
  width.value = val.width
}

const rowHeight = computed(() => {
  return $q.screen.lt.sm ? 100 : 270
})

const spacing = computed(() => {
  return $q.screen.lt.sm ? 10 : 20
})

const imageGeometry = computed(() => {
  if (!galleryContainer.value) {
    return {
      containerHeight: 0,
      boxes: [],
    }
  }
  const geometry = justifiedLayout(images, {
    containerWidth: width.value,
    containerPadding: spacing.value,
    boxSpacing: spacing.value,
    targetRowHeight: rowHeight.value,
  })
  const boxes = geometry.boxes.map((element, index) => {
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

  return {
    containerHeight: geometry.containerHeight,
    boxes,
  }
})
</script>
<style>
.item {
  cursor: pointer;
}

#carousel {
  background-color: #000;
}

.description {
  color: #ebebeb;
  height: 40px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.fancybox__container {
  z-index: 3000;
}

.fancybox__backdrop,
.fancybox__footer {
  background: #000 !important;
}

.fancybox__caption {
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
}

.fancybox-image {
  pointer-events: none;
}
</style>
