<template>
  <div class="app-container pull-auto">
    <div class="map-box">
      <el-amap ref="map" vid="amap" :center="center" :map-manager="amapManager"
       :zoom="zoom" :plugin="plugin" class="amap">
       <el-amap-polyline v-for="(line, index) in polyline"  :key="index" :path="line.path" :strokeColor="line.strokeColor" :strokeStyle = "line.strokeStyle" :events="line.events" :mouseover="line.mouseover" ></el-amap-polyline>
       <el-amap-marker
       v-for="(marker, index) in markers" :position="marker.position" :icon="marker.icon"
       :title="marker.title" :offset="marker.offset"
       :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"
       :key="index"
       :vid="index">
       </el-amap-marker>
        <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          >
        </el-amap-info-window>
    </el-amap>
      <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
    </div>
    <basic-container>
      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 @current-change="currentChange"
                 @refresh-change="refreshChange"
                 @size-change="sizeChange"
                 @row-update="handleUpdate"
                 @row-save="handleSave"
                 @row-del="rowDel">
        <template slot="menuLeft">
          <el-button type="primary"
                     @click="handleAdd"
                     size="small"
                     v-if="permissions.tcapp_custbussample_add">新 增</el-button>
          <br /><br />
        </template>
        <template slot-scope="scope"
                  slot="menu">
          <el-button type="primary"
                     v-if="permissions.tcapp_custbussample_edit"
                     icon="el-icon-check"
                     size="small"
                     plain
                     @click="handleEdit(scope.row,scope.index)">编辑</el-button>
          <el-button type="danger"
                     v-if="permissions.tcapp_custbussample_del"
                     icon="el-icon-delete"
                     size="small"
                     plain
                     @click="handleDel(scope.row,scope.index)">删除</el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
  import { fetchList, getObj, addObj, putObj, delObj } from '@/api/custombus/sample'
  import { tableOption } from '@/const/crud/custombus/sample'
  import { mapGetters } from 'vuex'
  import { AMapManager, AMapMarker} from 'vue-amap'
  let amapManager = new AMapManager()
  export default {
    name: 'sample',
    data() {
      let self = this
      return {
        tableData: [],
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
        loaded: false,
        tableOption: tableOption,
        amapManager,
        zoom: 8,
        lng: 0,
        lat: 0,
        center: [120.197851, 30.230791], // [120.197851, 30.230791],
        plugin: [{
            pName: 'ToolBar',
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }, {
            pName: 'Geolocation',
            events: {
              init: (o) => {
                o.getCurrentPosition(result => {
                  if (result && result.position) {
                    console.log('城市数据：', result)
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
                    console.log('城市数据：', result)
                    self.lng = result.position.lng
                    self.lat = result.position.lat
                    self.loaded = true
                  }
                })
              }
            }
        }],
        lines: [],
        selectedLineIndex: -1,
        markers: [],
       currentWindow:{
          position: [120.197851, 30.230791],
          content: '',
          events: {},
          visible: false
        }
      }
    },
    async created() {
      await this.getList() // 加载完数据
      console.log('tableData', JSON.stringify(this.tableData))
      // this.amapManager.setMap([
      //     'AMap.ToolBar',
      //     'AMap.Scale',
      //     'AMap.OverView',
      //     'AMap.MapType',
      //     'AMap.Geolocation',
      // ], () => {
        // this.addControl(new AMap.ToolBar());

        // // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        // this.addControl(new AMap.Scale());

        // // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
        // this.addControl(new AMap.OverView({isOpen:true}));

        // // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        // this.addControl(new AMap.MapType());

        // // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
        // this.addControl(new AMap.Geolocation());
      // })
      // this.center = [this.tableData[0].start_lon, this.tableData[0].start_lat]
      let lines = []
      await this.tableData.map(item => {
        // console.log('item:', item)
        let line = []
        if( !(item.start_lon  && item.start_lat && item.end_lon  &&  item.end_lat )) {
          console.warn('lon or lat is none')
          return
        }
        line.push([item.start_lon, item.start_lat])
        this.markers.push({
            position: [item.start_lon, item.start_lat],
            title: item.start_name,
            label: {content:item.start_name, offset: [0,40]},
            offset:[-15-5,-30],
            events: {
              click: () => {
                // alert(item.start_name)
                this.currentWindow.position = [item.start_lon, item.start_lat]
                this.currentWindow.content = item.start_name
                this.currentWindow.visible = true
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            icon: 'img/assets/startingpoint.png',
            visible: true,
            draggable: false,
            content: `<span>${item.start_name}</span>`,
          })
        line.push([item.end_lon, item.end_lat])
        this.markers.push({
            position: [item.end_lon, item.end_lat],
            title: item.end_name,
            label: {content:item.end_name, offset: [0, 40]},
            offset:[-15+5,-30],
            events: {
              click: () => {
                // alert(item.end_name)
                this.currentWindow.position = [item.end_lon, item.end_lat]
                this.currentWindow.content = item.end_name
                this.currentWindow.visible = true
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            icon: 'img/assets/finishingpoint.png',
            visible: true,
            draggable: false,
            content: `<span>${item.end_name}</span>`,
          })
        lines.push(line)
      })
      this.lines=lines
    },
    mounted: function() {
      // console.log(this)
    },
    computed: {
      ...mapGetters(['permissions']),
      polyline () {
        console.log('computed  polyline')
        // [[120.197739, 30.230799], [120.197113, 30.231358],
        let self = this
        let lines = this.lines
        if (lines && lines.length > 0) {
          let polyline = []
          let index = 0;
          lines.forEach(function (t) {
            let i = index++
            polyline.push({
              index: i,
              strokeStyle: self.selectedLineIndex === i ? 'solid':'dashed', // solid dashed
              strokeColor: self.selectedLineIndex === i ? '#ff0000':'#a2a2a2',
              path: t,
              editable: false,
              events: {
                click: () => {
                  //alert(index)
                  self.selectedLineIndex = i
                  console.log('click at ' + self.selectedLineIndex)
                },
                mouseover: () => {
                  self.selectedLineIndex = i
                  console.log('mouseover at ' + i)
                }
              }
            })
          })
          console.log(polyline)
          console.log(self.selectedLineIndex)
          return polyline
        } else {
          return []
        }
      }
  },
  methods: {
    async getList() {
      this.tableLoading = true
      return await fetchList(this.listQuery).then(response => {
        // console.log(response.data)
        this.tableData = response.data.data
        this.page.total = response.data.data.length
        this.tableLoading = false
    })
    },
    currentChange(val) {
      this.page.currentPage = val
      this.listQuery.page = val
      this.getList()
    },
    sizeChange(val) {
      this.page.pageSize = val
      this.listQuery.size = val
      this.getList()
    },
    /**
     * @title 打开新增窗口
     * @detail 调用crud的handleadd方法即可
     *
     **/
    handleAdd: function() {
      this.$refs.crud.rowAdd()
    },
    handleEdit(row, index) {
      this.$refs.crud.rowEdit(row, index)
    },
    handleDel(row, index) {
      this.$refs.crud.rowDel(row, index)
    },
    rowDel: function(row, index) {
      var _this = this
      this.$confirm('是否确认删除ID为' + row.id, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(function() {
          return delObj(row.clientId)
        })
        .then(data => {
        _this.tableData.splice(index, 1)
      _this.$message({
        showClose: true,
        message: '删除成功',
        type: 'success'
      })
    })
    .catch(function(err) { })
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate: function(row, index, done) {
      putObj(row).then(data => {
        this.tableData.splice(index, 1, Object.assign({}, row))
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      })
      done()
    })
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave: function(row, done) {
      addObj(row).then(data => {
        this.tableData.push(Object.assign({}, row))
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      done()
    })
    },
    /**
     * 刷新回调
     */
    refreshChange() {
      this.getList()
    }
  }
  }
</script>

<style lang="scss" scoped>
.amap{
  height: 600px;
}
</style>

