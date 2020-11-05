<template>
  <div>
    <div class="dz-header">公交订单</div>

    <div class="app-container pull-auto">
      <basic-container>
        <div class="option-box">
          <el-tag type="info"
                  plain>时间区间</el-tag>
          <div class="div-left1 div-inline">
            <el-date-picker v-model="selectBeginDateValue"
                            type="date"
                            placeholder="选择起始时间">
            </el-date-picker>
          </div>
          <div class="div-left1 div-inline">
            <el-date-picker v-model="selectEndDateValue"
                            type="date"
                            placeholder="选择终止时间">
            </el-date-picker>
          </div>
          <div class="div-left1 div-inline">
            <el-input v-model="phone"
                      placeholder="请输入手机号"></el-input>
          </div>
          <div class="div-left1 div-inline">
            <el-tag type="info"
                    plain>线路</el-tag>
          </div>
          <div class="div-left2 div-inline">
            <el-select v-model="compoundParams.code1"
                       clearable
                       @change="updateSelectData1"
                       placeholder="(可选)请选择">
              <el-option v-for="item in code1List"
                         :key="item.code"
                         :label="item.name"
                         :value="item.code">
              </el-option>
            </el-select>
          </div>
          <div class="div-left1 div-inline ">
            <el-tag type="info"
                    plain>状态</el-tag>
          </div>
          <div class="div-left2 div-inline">
            <el-select v-model="compoundParams.code2"
                       clearable
                       @change="updateSelectData2"
                       placeholder="(可选)请选择">
              <el-option v-for="item in code2List"
                         :key="item.code"
                         :label="item.name"
                         :value="item.code">
              </el-option>
            </el-select>
          </div>
          <el-button type="primary"
                     class="div-left2 div-inline"
                     @click="
                     handleFetch"
                     icon="el-icon-search"
                     size="small">查询</el-button>
          <el-button type="primary"
                     class="div-left2 div-inline"
                     @click="
                     handleExport"
                     icon=" el-icon-download"
                     size="small">导出</el-button>
        </div>
        <avue-crud ref="crud"
                   :page="page"
                   :data="tableData"
                   :table-loading="tableLoading"
                   :option="tableOption"
                   @size-change="sizeChange"
                   @current-change="currentChange"
                   @refresh-change="refreshChange">

        </avue-crud>
      </basic-container>
    </div>

  </div>
</template>

<script>
import { fetchList, getObj, addObj, putObj, delObj, noticeOpen, tradeOrderExoprtList, tradeOrder } from '@/api/custombus/custbus'
import { tableOption, DIC } from '@/const/crud/custombus/report'
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'custbus',
  data () {
    return {
      selectBeginDateValue: null,
      selectEndDateValue: null,
      compoundParams: {
        code1: null,
        code2: null
      },
      phone: null,
      code1List: [],
      code2List: [{ code: 3, name: "已退票" }, { code: 1, name: "已支付" }, { code: 2, name: "已核销" }],//(1：已支付；2：已核销；3：已退票)
      tableData: [],
      direction: DIC.direction,
      searchData: {
        city_code: '610300',
        start_time: null,
        end_time: null,
        toward: null,
        phone: null,
        line_code: null,
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      listQuery: {
        page: 1,
        size: 20
      },
      tableLoading: false,
      tableOption: tableOption
    }
  },
  created () {
    this.getList()
  },
  mounted: function () { },
  computed: {
    ...mapGetters(['permissions']),
  },
  methods: {

    // 获取已开通列表
    getList () {
      this.tableLoading = true
      fetchList({
        page: 1,
        size: 200
      }).then(response => {
        //console.log(response.data)
        if (response.data.data) {
          response.data.data.result = _.map(response.data.data.result, (item) => { item.original_amt = String(item.original_amt / 100); item.amt = String(item.amt / 100); return item })
          let res = response.data.data.result || response.data.records
          //this.tableData = response.data.data.result || response.data.records
          //this.page.total = response.data.data.total_count || response.data.total
          //{"end_station":"公告","start_time":"00:00","line_code":"DDD1","start_station":"访问","name":"发生地方和我","end_time":"00:02","amt":180,"original_amt":200,"id":"23","towards":"上行"},{"end_station":"近江","start_time":"07:00","line_code":"test1","start_station":"西湖","name":"测试1号","end_time":"08:10","amt":100,"original_amt":100,"id":"21","towards":"上行"},{"end_station":"浙大玉泉校区","start_time":"06:20","line_code":"DZ1","start_station":"断桥残雪","name":"定制公交1号线","end_time":"08:00","amt":1,"original_amt":100,"id":"1","towards":"上行"},{"end_station":"断桥残雪","start_time":"17:00","line_code":"DZ1","start_station":"浙大玉泉校区","name":"定制公交1号线","end_time":"18:00","amt":1,"original_amt":1,"id":"2","towards":"下行"},{"end_station":"月球","start_time":"17:00","line_code":"DZ1112","start_station":"地球","name":"宇宙专线","end_time":"18:00","amt":1,"original_amt":1,"id":"3","towards":"下行"}
          let list = []
          res.forEach((t) => {
            let name = t.name + '-' + t.towards
            let towards = t.towards === "上行" ? 0 : 1
            let code = t.line_code + "_" + towards
            let lineCode = t.line_code
            if (code) {
              list.push({ name, code, towards, lineCode })
            }
          })
          this.code1List = list
        } else {
          let msg = response.data.msg || '接口异常'
          this.$message({
            showClose: true,
            message: msg,
            type: 'warning'
          })
        }
        this.tableLoading = false
      })
    },
    currentChange (val) {
      this.page.currentPage = val
      this.listQuery.page = val
      if (this.checkDate()) this.fetch()
    },

    sizeChange (val) {
      this.page.pageSize = val
      this.listQuery.size = val
      if (this.checkDate()) this.fetch()
    },
    checkDate () {
      if (!(this.selectBeginDateValue && this.selectEndDateValue)) {
        this.$message({
          showClose: true,
          message: '请选择时间区间',
          type: 'warning'
        })
        return false
      } else {
        return true
      }
    },
    handleExport () {
      if (this.checkDate()) {
        this.searchData.start_time = moment(this.selectBeginDateValue).format("YYYY-MM-DD")
        this.searchData.end_time = moment(this.selectEndDateValue).format("YYYY-MM-DD")
        this.searchData.phone = this.phone
        let code1 = this.compoundParams.code1
        let line_code
        let towards
        this.code1List.forEach((t) => {
          if (code1 === t.code) {
            line_code = t.lineCode
            towards = t.towards
          }
        })
        this.searchData.line_code = line_code
        this.searchData.toward = towards
        this.searchData.ticket_state = this.compoundParams.code2
        tradeOrderExoprtList(this.searchData)
      }
    },
    handleFetch () {
      if (this.checkDate()) {
        this.searchData.start_time = moment(this.selectBeginDateValue).format("YYYY-MM-DD")
        this.searchData.end_time = moment(this.selectEndDateValue).format("YYYY-MM-DD")
        this.searchData.phone = this.phone
        let code1 = this.compoundParams.code1
        let line_code
        let towards
        this.code1List.forEach((t) => {
          if (code1 === t.code) {
            line_code = t.lineCode
            towards = t.towards
          }
        })
        this.searchData.line_code = line_code
        this.searchData.toward = towards
        this.searchData.ticket_state = this.compoundParams.code2
        //
        //this.searchData.towards = this.phone
        this.fetch()
      }
    },
    fetch () {
      let d = {}
      d = Object.assign(d, this.listQuery)
      d = Object.assign(d, this.searchData)
      let that = this
      tradeOrder(d).then(response => {
        //console.log(response.data)
        if (response.data.data) {
          this.tableData = response.data.data.result || response.data.records
          this.page.total = response.data.data.total_count || response.data.total
        }      })
        .catch(function () {
          //test
          let data = {
            data: {
              result: [
                {
                  "order_no": "20180827204456186ptQAQa",
                  "ticket_state": "待支付",
                  "pay_state": 0,
                  "amount": 300,
                  "trade_time": "2018-08-30 16:35:56",
                  "line": "断桥残雪-浙大玉泉校区",
                  "user_name": "azaag7z",
                  "pay_type": "支付宝APP",
                  "towards": "上行"
                },
                {
                  "order_no": "20180827204456186ptQAQa",
                  "ticket_state": "待支付",
                  "pay_state": 0,
                  "amount": 300,
                  "trade_time": "2018-08-30 16:35:56",
                  "line": "浙大玉泉校区-断桥残雪",
                  "user_name": "azaag7z",
                  "pay_type": "支付宝APP",
                  "towards": "下行"
                },
                {
                  "order_no": "20180828173601653zFpQcN",
                  "ticket_state": "待支付",
                  "pay_state": 0,
                  "amount": 300,
                  "trade_time": "2018-08-28 17:36:01",
                  "line": "断桥残雪-浙大玉泉校区",
                  "user_name": "azaag7z",
                  "pay_type": "支付宝APP",
                  "towards": "上行"
                }
              ],
              "total_count": 306
            },
            "code": "0",
            "message": "Success"
          }
          if (data.data) {
            that.tableData = data.data.result || data.records
            that.page.total = data.data.total_count || data.total
          }
          //test
        })

    },

    /**
     * 刷新回调
     */
    async refreshChange () {
      await this.getList()
      if (this.checkDate()) await this.fetch()
    },
    updateSelectData1 () { }
    ,
    updateSelectData2 () { }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  width: 50%;
}

.option-box {
  margin-left: 0%;
  margin-top: 3rem;
  width: 100%;
  display: float;
  .div-left1 {
    margin-left: 0.5rem;
  }
  .div-left2 {
    margin-left: 0.2rem;
  }
  .el-tag {
    height: 40px;
    line-height: 38px;
  }
}
.div-inline {
  display: inline-block;
}
</style>
