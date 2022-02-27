<template>
  <svg v-if="tagName === 'svg'"
       :style="computedStyle"
  >
    <use :href="`/icons/${iconName}.svg`"></use>
  </svg>
  <img v-else-if="tagName === 'img'"
       :style="computedStyle"
       :src="`/icons/${iconName}.svg`"
       :alt="iconName"
  >
</template>

<script>
export default {
  name: 'VIcon',

  props: {
    iconName: {
      type: String,
      default: '',
    },
    tagName: {
      type: String,
      default: 'svg',
    },
    width: {
      type: [String, Number],
      default: '30px',
    },
    height: {
      type: [String, Number],
      default: '30px',
    },
  },

  computed: {
    computedStyle() {
      return {
        minWidth: this._width,
        minHeight: this._height,
        width: this._width,
        height: this._height,
        maxWidth: this._width,
        maxHeight: this._height,
      };
    },

    _width() {
      if (!this.width) return '';
      const hasUnits = `${this.width}`.match(/(px)|(%)|(vw)|(em)|(rem)/g);
      return hasUnits ? this.width : `${this.width}px`;
    },
    _height() {
      if (!this.height) return '';
      const hasUnits = `${this.height}`.match(/(px)|(%)|(vh)|(em)|(rem)/g);
      return hasUnits ? this.height : `${this.height}px`;
    },
  },
};
</script>
