<template>
  <div
    id="galleryContainer"
    ref="galleryContainer"
    :style="`position: relative; height: ${imageGeometry.containerHeight}px`"
    class="p-mb-lg"
  >
    <div
      class="item"
      v-for="(box, index) in imageGeometry.boxes"
      :key="index"
      :style="box.style"
      @click="$router.push({ name: 'pictures', params: { slug: box.image.slug } })"
    >
      <img
        :src="`/images/${box.image.name}_thumb.jpg`"
        :alt="box.image.description"
        :width="box.width"
        :height="box.height"
        @load="loadedImages++"
      />
    </div>
    <q-resize-observer @resize="onResize" />
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { useImageStore } from 'src/stores/imageStore'
const imageStore = useImageStore()
const gtag = getCurrentInstance().appContext.app.config.globalProperties.$gtag
import { useQuasar } from 'quasar'
const $q = useQuasar()
import justifiedLayout from 'justified-layout'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

defineOptions({
  name: 'PicturesPage',
})

const galleryContainer = ref(null)
const width = ref(0)
const loadedImages = ref(0)
const fancyboxOpen = ref(false)

const fancyboxImages = imageStore.images.map((i) => ({
  src: `/images/${i.name}.jpg`,
  thumb: `/images/${i.name}_thumb.jpg`,
  caption: i.description,
}))

watch(
  () => route.params.slug,
  (newSlug) => {
    if (!newSlug || newSlug.length < 1) return
    openImageBySlug(newSlug)
  }
)

watch(loadedImages, async (val) => {
  if (val < imageStore.images.length) return
  const slug = route.params.slug
  if (!slug || slug.length < 1) return
  setTimeout(() => {
    openImageBySlug(slug)
  }, 500)
})

function openImageBySlug(slug) {
  if (fancyboxOpen.value === true) return
  const index = imageStore.images.findIndex((image) => image.slug === slug)
  if (index < 0) return
  startFancybox(index)
}

function startFancybox(index) {
  fancyboxOpen.value = true
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
      close: () => {
        router.replace({ name: 'pictures' })
        fancyboxOpen.value = false
      },
      'Carousel.selectSlide': (fancybox) => {
        const slide = fancybox.getSlide()
        if (!slide || !slide.src) return

        // gtag
        const name = slide.src.split('fabianpoels_')[1].split('.jpg')[0]
        gtag.event(`view_image_${name}`, {})

        // update url
        const image = imageStore.images[fancybox.getSlide().index]
        if (image.slug && route.params.slug !== image.slug) {
          router.replace({ name: 'pictures', params: { slug: image.slug } })
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

function onResize(val) {
  if (val.width === 0 || val.height === 0 || val.width === width.value) return
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
  const geometry = justifiedLayout(imageStore.images, {
    containerWidth: width.value,
    containerPadding: spacing.value,
    boxSpacing: spacing.value,
    targetRowHeight: rowHeight.value,
  })
  const boxes = geometry.boxes.map((element, index) => {
    const image = imageStore.images[index]
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
