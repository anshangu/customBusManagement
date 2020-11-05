<template>
  <div class="app-container pull-auto">
    <div class="map-box">
      <el-amap ref="map"
               vid="amap"
               :center="center"
               :map-manager="amapManager"
               :zoom="zoom"
               :plugin="plugin"
               :events="events"
               class="amap">
        <el-amap-polyline v-for="(line, index) in polyline"
                          :key="index"
                          :path="line.path"
                          :strokeColor="line.strokeColor"
                          :strokeStyle="line.strokeStyle"
                          :events="line.events"
                          :mouseover="line.mouseover"></el-amap-polyline>
        <el-amap-marker v-for="(marker, index) in markers"
                        :position="marker.position"
                        :title="marker.title"
                        :offset="marker.offset"
                        :content="marker.content"
                        :events="marker.events"
                        :visible="marker.visible"
                        :draggable="marker.draggable"
                        :key="index"
                        :vid="index">
        </el-amap-marker>
        <!--         <el-amap-info-window :position="currentWindow.position"
                             :content="currentWindow.content"
                             :visible="currentWindow.visible">
        </el-amap-info-window> -->
      </el-amap>

    </div>
    <div class="option-box">
      <button type="button"
              class="el-button el-button--primary el-button--small"
              @click="mapPoint">
        <span>地图选点{{this.mapPointEdit?"(选点中,点击取消)":""}}</span></button>
      <button type="button"
              class="el-button el-button--primary el-button--small"
              @click="lineDirection">
        <span>绘制线路</span></button>
      <button type="button"
              class="el-button el-button--primary el-button--small"
              @click="clearAll">
        <span>清除</span></button>
      <button type="button"
              class="el-button el-button--primary el-button--small"
              @click="savePath">
        <span>保存线路</span></button>
    </div>
  </div>
</template>

<script>
import { fetchList, putDrawLine, getDrawLine } from '@/api/custombus/custbusdetail'
import { direction, CITY_MAP_CENTER } from '@/api/custombus/map'
import { tableOption } from '@/const/crud/custombus/custbusdetail'
import { mapGetters } from 'vuex'
import { AMapManager, AMapMarker } from 'vue-amap'
//import base64 from 'Base64'
//const btoa = base64.btoa;
//const atob = base64.atob;
let amapManager = new AMapManager()
export default {
  name: 'map',
  data () {
    let center = CITY_MAP_CENTER //|| [120.197851, 30.230791]
    let self = this
    return {
      center: center,
      tableData: [],
      id: this.$route.query.id,
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 100 // 每页显示多少条
      },
      listQuery: {
        page: 1,
        size: 100
      },
      tableLoading: false,
      tableOption: tableOption,
      loaded: false,
      amapManager,
      zoom: 13,
      lng: 0,
      lat: 0,
      plugin: [{
        pName: 'ToolBar',
        events: {
          init (instance) {
            //console.log("ToolBar init", instance);
          }
        }
      }/* , {
        pName: 'Geolocation',
        events: {
          init: (o) => {
            o.getCurrentPosition(result => {
              if (result && result.position) {
                console.log('init getCurrentPosition 城市数据：', result)
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.loaded = true
              }
            })
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            o.getCurrentPosition(result => {
              if (result && result.position) {
                console.log('click getCurrentPosition 城市数据：', result)
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.loaded = true
              }
            })
          }
        }
      } */],
      events: {
        init: (o) => {
          //console.log("events init", o.getCenter())
          //console.log("events init", this.$refs.map.$$getInstance())
          /*   o.getCity(result => {
              console.log("events init getCity", result)
            }) */
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          console.log("click", e)
          //lnglat: c {P: 29.95052147375201, O: 120.27299429699775, lng: 120.272994, lat: 29.950521}
          if (this.mapPointEdit) this.addMarks({ lng: e.lnglat.lng, lat: e.lnglat.lat })
        }
      },
      lines: [],
      selectedLineIndex: -1,
      markers: [],
      currentWindow: {
        position: CITY_MAP_CENTER,
        content: '',
        events: {},
        visible: false
      },
      direction: [],
      mapPointEdit: false
    }
  },
  async created () {
    await this.getList()
    //let res = await direction({ origin: '120.111889,30.400229', destination: '120.209336,30.133265' })
    //this.direction = res[0]
    //console.log("direction: " + JSON.stringify(this.direction))

    let res = await getDrawLine({ id: this.id })
    if (res && res.data) {
      console.log(res.data)
      this.linePoints = res.data.data
      this.direction = JSON.parse(this.linePoints)
      //console.log("direction: " + JSON.stringify(this.direction))
    }
    // this.linePoints = JSON.stringify(this.direction)
    // console.log("direction: " + JSON.stringify(res))
  },
  mounted: function () {

  },
  computed: {
    ...mapGetters(['permissions']),
    polyline () {
      let self = this
      let lines = this.direction
      if (lines && lines.length > 0) {
        let polyline = []
        let index = 0;
        lines.forEach(function (t) {
          //console.log(JSON.stringify(t))
          let i = index++
          polyline.push({
            index: i,
            strokeStyle: 'solid',
            strokeColor: '#ff0000',
            path: t,
            editable: false,
            events: {
              click: () => {

                console.log('click at ' + i)
              },
              mouseover: () => {

                console.log('mouseover at ' + i)
              }
            }
          })
        })
        // var path1 = [
        //   [75.757904, 38.118117],
        //   [97.375719, 24.598057],
        //   [117.375719, 38.118117] 
        // ];
        //[120.159546,30.295702],[120.156204,30.298948],[120.155075,30.300056],[120.154839,30.300291],[120.154503,30.30061]
        /*  var path1 = [[120.197739, 30.230799], [120.197739, 30.230799], [120.197739, 30.230799], [120.197739, 30.230799], [117.375719, 38.118117]]
         console.log(JSON.stringify(path1))
         polyline.push({
           index: index + 1,
           strokeStyle: 'solid',
           strokeColor: '#a2a2a2',
           path: path1,
           editable: false,
           events: {
             click: () => {
 
               //console.log('click at ' + i)
             },
             mouseover: () => {
 
               //console.log('mouseover at ' + i)
             }
           }
         })
         console.log(polyline) */
        return polyline
      } else {
        return []
      }
    }

  },
  methods: {
    goCenter (items) {
      if (items && items.length > 0) {
        let l1 = items[0]
        let l2 = items[items.length - 1]
        if (l1 && l2) {
          this.center = [(parseFloat(l1.station_lon) + parseFloat(l2.station_lon)) / 2, (parseFloat(l1.station_lat) + parseFloat(l2.station_lat)) / 2]
          console.log("go " + this.center)
        }
      }
    },
    // 获取线路详情
    getList () {
      this.tableLoading = true
      fetchList(this.listQuery, this.id).then(response => {
        console.log(response.data)
        if (response.data) {
          //{"station_name":"test","station_lat":"33","arr_time":"12:00","id":9,"station_des":"钉钉","station_lon":"22"}
          this.tableData = response.data.data || response.data.records
          this.page.total = response.data.data.length || response.data.total
          this.goCenter(this.tableData)
        }
        this.tableLoading = false
      })
    },
    currentChange (val) {
      this.page.currentPage = val
      this.listQuery.page = val
      this.getList()
    },
    sizeChange (val) {
      this.page.pageSize = val
      this.listQuery.limit = val
      this.getList()
    },
    addMarks (item) {
      let len = this.markers.length
      this.markers.push({
        position: [item.lng, item.lat],
        title: item.name || [item.lng, item.lat],
        label: { content: item.name || [item.lng, item.lat], offset: [0, 40] },
        offset: [0, 0],
        events: {
          click: () => {
            // alert(item.start_name)
            this.currentWindow.position = [item.lng, item.lat]
            this.currentWindow.content = item.name || ''
            this.currentWindow.visible = true
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        //icon: 'img/assets/startingpoint.png',
        visible: true,
        draggable: false,
        content: `<span>${item.name || len + 1}</span>`,
      })
    },
    mapPoint () {
      this.mapPointEdit = !this.mapPointEdit
    },
    async lineDirection () {
      let paths = []
      console.log("lineDirection markers length " + this.markers.length)
      if (this.markers && this.markers.length >= 2) {
        let size = this.markers.length
        let i = 1;
        for (; i < size; i++) {
          let res = await direction({ origin: `${this.markers[i - 1].position[0]},${this.markers[i - 1].position[1]}`, destination: `${this.markers[i].position[0]},${this.markers[i].position[1]}` })
          console.log("res " + i + " " + res[0].length)
          paths.push(...res[0])
        }
      }
      //let res = await direction({ origin: '120.111889,30.400229', destination: '120.209336,30.133265' })
      console.log("res end " + paths.length)
      this.direction = paths
      this.linePoints = JSON.stringify(this.direction)
    },
    clearAll () {
      this.markers = []
      this.direction = []
      this.linePoints = JSON.stringify(this.direction)
    },
    savePath () {
      let line_points = (this.linePoints)
      putDrawLine({ id: this.id, line_points: line_points })
    },
    /**
     * 刷新回调
     */
    refreshChange () {
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
.amap {
  height: 600px;
}
.option-box {
  margin-left: 5%;
  margin-top: 1rem;
  width: 90%;
  display: float;
}
</style>

