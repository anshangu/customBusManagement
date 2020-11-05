<template>
  <el-container class="avue-contail">
    <el-container>
      <el-main class="avue-main">
        <!-- 主体视图层 -->
        <transition name="fade-transverse">

          <router-view class="avue-view"
                       v-if="$route.meta.keepAlive" />
        </transition>
        <transition name="fade-transverse">
          <router-view class="avue-view"
                       v-if="!$route.meta.keepAlive" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatenull } from '@/util/validate';
import { calcDate } from '@/util/date.js';
import { setStore, getStore } from '@/util/store.js';
export default {
  components: {
  },
  name: 'index',
  data () {
    return {

    }
  },
  created () {
    //实时检测刷新token
    //this.refreshToken();
  },
  mounted () { },
  computed: mapGetters(['isLock', 'isCollapse', 'website']),
  props: [],
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.avue-contail {
  height: 100%;
}
.avue-sidebar {
  height: 100%;
}
.avue-tabs {
  padding: 0;
}
.avue-main {
  position: relative;
  padding: 0;
}
.avue-view {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
