<template>
  <div>
    <div class="dz-header">已开通线路列表</div>
    <div class="app-container pull-auto">
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
                       size="small">新 增</el-button>
            <el-button type="primary"
                       @click="handleExport"
                       size="small">导出</el-button>
            <br /><br />
          </template>
          <template slot-scope="scope"
                    menuAlign="left"
                    slot="menu">
            <el-button type="primary"
                      icon="el-icon-edit"
                       size="small"
                       @click="handleEdit2(scope.row,scope.index)">编辑</el-button>
            <el-button type="primary"
                       v-if="permissions.tcapp_custbus_edit"
                       icon="el-icon-check"
                       size="small"
                       plain
                       @click="handleEdit(scope.row,scope.index)">编辑</el-button>
            <el-button type="danger"
                       v-if="permissions.tcapp_custbus_del"
                       icon="el-icon-delete"
                       size="small"
                       plain
                       @click="handleDel(scope.row,scope.index)">删除</el-button>
            <el-button type="danger"
                       icon="el-icon-view"
                       size="small"
                       plain
                       @click="handleMapClick(scope.row,scope.index)">绘制线路</el-button>
            <br /><br />
            <el-button type="primary"
                       icon="el-icon-view"
                       size="small"
                       plain
                       @click="handleClick(scope.row,scope.index)">查看站点</el-button>
            <el-button type="primary"
                       icon="el-icon-view"
                       size="small"
                       plain
                       @click="handleStock(scope.row,scope.index)">查看余票</el-button>
            <el-button type="primary"
                       icon="el-icon-view"
                       size="small"
                       plain
                       @click="handleNoticeClick(scope.row,scope.index)">开通通知</el-button>
          </template>
        </avue-crud>
      </basic-container>
    </div>
    <el-dialog title="新增路线"
               :visible.sync="line">
      <el-form :model="newLine"
               ref="newLine"
               :rules="rules"
               >
      <div class="display">
             <el-form-item label="路线名称"
                      label-width="100px"
                      prop="name">
          <el-input
                    tabindex="0"
                    required
                    class="line-input"
                    v-model="newLine.name"></el-input>
        </el-form-item>
        <el-form-item label="路线编号"
                      label-width="100px"
                      prop="line_code">
          <el-input
                    tabindex="1"
                    required
                    class="line-input"
                    v-model="newLine.line_code"></el-input>
        </el-form-item>
      </div>
      <div class="display">
            <el-form-item label="始发站"
                      label-width="100px"
                      prop="start_station">
                <el-input
                    tabindex="2"
                    required
                    class="line-input"
                    v-model="newLine.start_station"></el-input>
            </el-form-item>
            <el-form-item label="终点站"
                      label-width="100px"
                      prop="end_station">
                <el-input
                    tabindex="3"
                    required
                    class="line-input"
                    v-model="newLine.end_station"></el-input>
            </el-form-item>
      </div>
      <div class="display">
             <el-form-item label="出发时间"
                      label-width="100px"
                      prop="start_time">
          <el-time-select value-format="hh:mm"
                          :picker-options="{start: '00:00',
          step: '00:01',
          end: '23:59'}"
                          required
                          class="line-input"
                          placeholder="选择时间"
                          v-model="newLine.start_time"
                          style="width: 100%;"></el-time-select>
        </el-form-item>
        <el-form-item label="到达时间"
                      label-width="100px"
                      prop="end_time">
          <el-time-select value-format="hh:mm"
                          :picker-options="{start: '00:00',
          step: '00:01',
          end: '23:59'}"
                          required
                          class="line-input"
                          placeholder="选择时间"
                          v-model="newLine.end_time"
                          style="width: 100%;"></el-time-select>
          </el-time-picker>
          <!-- <el-input required class="line-input" v-model="newLine.end_time"></el-input> -->
        </el-form-item>
      </div>
       <div class="display">
           <el-form-item label="方向"
                      label-width="100px"
                      prop="towards">
          <el-select v-model="newLine.towards"
                     placeholder="请选择">
            <el-option v-for="item in direction"
                       :key="item.label"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="票价(元)"
                      label-width="100px"
                      prop="original_amt">
          <el-input
                    tabindex="4"
                    required
                    type="number"
                    class="line-input"
                    v-model="newLine.original_amt"></el-input>
        </el-form-item>
       </div>
        <div class="display">
           <el-form-item label="折扣类型"
                      label-width="100px"
                      prop="amt_type">
          <el-select v-model="newLine.amt_type"
                     placeholder="请选择">
            <el-option v-for="item in valid"
                       :key="item.label"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="折扣"
                      label-width="100px">
          <el-input tabindex="5"
                    required
                    class="line-input"
                    v-model="newLine.discount"></el-input>
        </el-form-item>
        </div>
        <el-form-item label="排序"
                      label-width="100px">
          <el-input tabindex="6"
                    required
                    class="line-input"
                    v-model="newLine.sort"></el-input>
        </el-form-item >
        <el-form-item label="是否开启"  label-width="100px">
          <el-switch v-model="newLine.ticketNotice"></el-switch>
        </el-form-item>
        <el-form-item label="提前几个小时" label-width="120px" prop="departureTime" :rules="newLine.ticketNotice ? rules.departureTime:[{ required: false}]">
              <el-input required v-model="newLine.departureTime"></el-input>
        </el-form-item>
        <el-form-item label="发车人数" label-width="100px" prop="departureNum" :rules="newLine.ticketNotice ? rules.departureNum:[{ required: false}]">
            <el-input required v-model="newLine.departureNum"></el-input>
        </el-form-item>
        <el-form-item label="未达人数是否发车" label-width="150px">
          <el-select v-model="newLine.noNumDeparture">
            <el-option label="不发车" value="0"></el-option>
            <el-option label="发车" value="1"></el-option>
        </el-select>
      </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="handleAddCancle">取 消</el-button>
        <el-button type="primary"
                   @click="submitAddNewLine('newLine')">确 定</el-button>
      </div>
    </el-dialog>
    <!--  编辑路线 -->
    <el-dialog title="编辑路线"
               :visible.sync="isLine">
      <el-form :model="updateLine"
               ref="updateLine"
               :rules="rules"
               >
        <div class="display">
            <el-form-item label="路线名称"
                      label-width="100px"
                      prop="name">
          <el-input
                    tabindex="0"
                    required
                    class="line-input"
                    v-model="updateLine.name"></el-input>
        </el-form-item>
        <el-form-item label="路线编号"
                      label-width="100px"
                      prop="line_code">
          <el-input
                    tabindex="1"
                    required
                    class="line-input"
                    v-model="updateLine.line_code"></el-input>
        </el-form-item>
        </div>
        <div class="display">
            <el-form-item label="始发站"
                      label-width="100px"
                      prop="start_station">
              <el-input
                    tabindex="2"
                    required
                    class="line-input"
                    v-model="updateLine.start_station"></el-input>
            </el-form-item>
            <el-form-item label="终点站"
                      label-width="100px"
                      prop="end_station">
                  <el-input
                    tabindex="3"
                    required
                    class="line-input"
                    v-model="updateLine.end_station"></el-input>
            </el-form-item>
        </div>
        <div class="display">
            <el-form-item label="出发时间"
                      label-width="100px"
                      prop="start_time">
          <el-time-select value-format="hh:mm"
                          :picker-options="{start: '00:00',
          step: '00:01',
          end: '23:59'}"
                          required
                          class="line-input"
                          placeholder="选择时间"
                          v-model="updateLine.start_time"
                          style="width: 100%;"></el-time-select>
        </el-form-item>
        <el-form-item label="到达时间"
                      label-width="100px"
                      prop="end_time">
          <el-time-select value-format="hh:mm"
                          :picker-options="{start: '00:00',
          step: '00:01',
          end: '23:59'}"
                          required
                          class="line-input"
                          placeholder="选择时间"
                          v-model="updateLine.end_time"
                          style="width: 100%;"></el-time-select>
          </el-time-picker>
        </el-form-item>
        </div>
        <div class="display">
             <el-form-item label="方向"
                      label-width="100px"
                      prop="towards">
                <el-select v-model="updateLine.towards"
                     placeholder="请选择">
            <el-option v-for="item in direction"
                       :key="item.label"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="票价(元)"
                      label-width="100px"
                      prop="original_amt">
          <el-input
                    tabindex="4"
                    required
                    type="number"
                    class="line-input"
                    v-model="updateLine.original_amt"></el-input>
        </el-form-item>
        </div>
        <div class="display">
            <el-form-item label="折扣类型"
                      label-width="100px"
                      prop="amt_type">
                <el-select v-model="updateLine.amt_type"
                     placeholder="请选择"
                     :value="updateLine.amt_type">
                <el-option v-for="item in valid"
                       :key="item.label"
                       :label="item.label"
                       :value="item.value">
              </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="折扣"
                      label-width="100px">
                <el-input tabindex="5"
                    required
                    class="line-input"
                    v-model="updateLine.discount"></el-input>
              </el-form-item>
        </div>
        <el-form-item label="排序"
                      label-width="100px">
          <el-input tabindex="6"
                    required
                    class="line-input"
                    v-model="updateLine.sort"></el-input>
        </el-form-item>
       <el-form-item label="是否开启"  label-width="100px">
          <el-switch v-model="updateLine.ticketNotice"></el-switch>
        </el-form-item>
        <el-form-item label="提前几个小时" label-width="100px" prop="departureTime" :rules="updateLine.ticketNotice ? rules.departureTime:[{ required: false}]">
              <el-input required v-model="updateLine.departureTime"></el-input>
        </el-form-item>
        <el-form-item label="发车人数" label-width="100px" prop="departureNum" :rules="updateLine.ticketNotice ? rules.departureNum:[{ required: false}]">
            <el-input required v-model="updateLine.departureNum"></el-input >
        </el-form-item>
        <el-form-item label="未达人数是否发车" label-width="150px">
          <el-select v-model="updateLine.noNumDeparture">
            <el-option label="不发车" value="0"></el-option>
            <el-option label="发车" value="1"></el-option>
        </el-select>
      </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="isLine = false">取 消</el-button>
        <el-button type="primary"
                   @click="handleUpdate('updateLine')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, getObj, addObj, putObj, delObj, noticeOpen, exoprtList, detailObj } from '@/api/custombus/custbus'
import { tableOption, DIC } from '@/const/crud/custombus/custbus'
import { mapGetters } from 'vuex'
export default {
  name: 'custbus',
  data () {
    return {
      line: false,
      isLine: false,
      tableData: [],
      direction: DIC.direction,
      valid: DIC.VAILD,
      newLine: {
        name: '',
        line_code: '',
        start_station: '',
        end_station: '',
        start_time: '',
        end_time: '',
        towards: 0,
        original_amt: '',
        amt_type: '',
        sort: 0,
        departureTime: "",
        ticketNotice: false,
        noNumDeparture: "0",
        departureNum: "",
      },
      updateLine: {
        name: '',
        line_code: '',
        start_station: '',
        end_station: '',
        start_time: '',
        end_time: '',
        towards: 0,
        original_amt: '',
        amt_type: '',
        sort: 0,
        departureTime: "",
        ticketNotice: false,
        noNumDeparture: "0",
        departureNum: "",
      },
      rules: {
        name: [
          { required: true, message: '请输入路线名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        line_code: [
          { required: true, message: '请输入路线编号', trigger: 'blur' }
        ],
        start_station: [
          { required: true, message: '请输入起始站', trigger: 'blur' }
        ],
        end_station: [
          { required: true, message: '请输入终点站', trigger: 'blur' }
        ],
        start_time: [
          { required: true, message: '请选择出发时间', trigger: 'blur' }
        ],
        end_time: [
          { required: true, message: '请选择到达时间', trigger: 'blur' }
        ],
        original_amt: [
          { required: true, message: '请输入原始票价', trigger: 'blur' }
        ],
        amt_type: [
          { required: true, message: '请输入折扣类型', trigger: 'blur' }
        ],
        sort: [
          { required: false, message: '排序', trigger: 'blur' }
        ],
        departureTime: [
          { required: true, message: '提前多少个小时发车不能为空！', trigger: 'blur' }
        ],
        departureNum: [
          { required: true, message: '发车人数不能为空！', trigger: 'blur' }
        ],
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
    canSubmit () {
      // console.log(this.newLine)
      if (this.newLine.name.length && this.newLine.line_code.length &&
        this.newLine.start_station.length && this.newLine.end_station.length
        && this.newLine.start_time.length && this.newLine.end_time.length &&
        this.newLine.amt_type &&
        this.newLine.original_amt.length) return true
      return false
    }
  },
  methods: {
    needAmt () {
      if (!this.newLine.original_amt) {
        this.$message({
          showClose: true,
          message: '请填写原始票价',
          type: 'warning'
        })
      }
    },
    needEndStation () {
      if (!this.newLine.end_station) {
        this.$message({
          showClose: true,
          message: '请填写终点站',
          type: 'warning'
        })
      }
    },
    needStartStation () {
      if (!this.newLine.start_station) {
        this.$message({
          showClose: true,
          message: '请填写始发站',
          type: 'warning'
        })
      }
    },
    needStart () {
      if (!this.newLine.start_time) {
        this.$message({
          showClose: true,
          message: '请选择出发时间',
          type: 'warning'
        })
      }
    },
    needEnd () {
      if (!this.newLine.end_time) {
        this.$message({
          showClose: true,
          message: '请选择到站时间',
          type: 'warning'
        })
      }
    },
    needLineCode () {
      if (!this.newLine.line_code) {
        this.$message({
          showClose: true,
          message: '请填写路线名称',
          type: 'warning'
        })
      }
    },
    needLineName () {
      if (!this.newLine.name) {
        this.$message({
          showClose: true,
          message: '请填写路线名称',
          type: 'warning'
        })
      }
    },
    // 获取已开通列表
    getList () {
      this.tableLoading = true
      fetchList(this.listQuery).then(response => {
        // console.log(response.data.data)
        if (response.data.data) {
          response.data.data.result = _.map(response.data.data.result, (item) => { item.original_amt = String(item.original_amt / 100); item.amt = String(item.amt / 100); return item })
          this.tableData = response.data.data.result || response.data.records
          this.page.total = response.data.data.total_count || response.data.total
        }
        this.tableLoading = false
      })
    },
    currentChange (val) {
      this.page.currentPage = val
      this.listQuery.page = val
      this.getList()
    },
    // 查看余票
    handleStock (e) {
      // console.log(e)
      location.href = `#/custombus/stock?id=${e.id}`
    },
    handleClick (e) {
      // console.log(e)
      location.href = `#/custombus/custbusdetail?id=${e.id}`
    },
    // /webapi/custbus/open/notice/{busId}
    handleNoticeClick (row, index) {
      noticeOpen(row)
    },
    sizeChange (val) {
      this.page.pageSize = val
      this.listQuery.size = val
      this.getList()
    },
    /**
     * @title 打开新增窗口
     * @detail 调用crud的handleadd方法即可
     *
     **/
    handleAdd: function () {
      this.line = true
      // this.$refs.crud.rowAdd()
    },
    handleExport: () => {
      exoprtList()
    },
    handleAddCancle(){
      this.$refs['newLine'].resetFields()
      this.line = false;
    },
    async submitAddNewLine(formName) {
      const data = JSON.parse(JSON.stringify(this.newLine))
      data.ticketNotice ? data.ticketNotice = 1 : data.ticketNotice = 0;
       this.$refs[formName].validate((valid) => {
          if (valid) {
            // const res = addObj(data)
            this.line = false
            addObj(data).then(data => {
                    // this.isLine = false
                    this.getList()
                    this.$message({
                    showClose: true,
                    message: '新增成功',
                    type: 'success'
                })
              this.$refs['newLine'].resetFields()
              this.isLine = false;
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      // if (this.canSubmit) {
      //   const res = await addObj(data)
      //   this.getList()
      //   this.line = false
      // } else {
      //   this.$message({
      //     showClose: true,
      //     message: '请填写正确的数据',
      //     type: 'warning'
      //   })
      // }
    },
    handleCell (row, index) {
      this.updateLine = row
      this.isLine = true
    },
    handleEdit (row, index) {
      // console.log(this.$refs.crud)
      this.$refs.crud.rowEdit(row, index)
    },
     handleEdit2 (row, index) {
      this.isLine = true;
      detailObj(row.id).then(data => {
        this.updateLine = JSON.parse(JSON.stringify(data.data.data))
        this.updateLine.original_amt = Number(this.updateLine.original_amt )/ 100
        if (this.updateLine.amt_type === 3)  {
          this.updateLine.discount = Number(this.updateLine.discount) /100
        }
        this.updateLine.amt_type = Number(this.updateLine.amt_type)
        this.updateLine.towards = Number(this.updateLine.towards)
        this.updateLine.ticketNotice === 1 ? this.updateLine.ticketNotice = true : this.updateLine.ticketNotice = false;
        this.updateLine.noNumDeparture = this.updateLine.noNumDeparture.toString();
      })
    },
    handleDel (row, index) {
      this.$refs.crud.rowDel(row, index)
    },
    handleMapClick (row, index) {
      location.href = `#/custombus/map?id=${row.id}`
    },
    rowDel: function (row, index) {
      var _this = this
      this.$confirm('是否确认删除ID为' + row.id, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return delObj(row.id)
      }).then(data => {
        _this.tableData.splice(index, 1)
        _this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        })
      })
        .catch(function (err) {
        })
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate: function (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                const data = JSON.parse(JSON.stringify(this.updateLine))
                data.ticketNotice ? data.ticketNotice = 1 : data.ticketNotice = 0;
                putObj(data).then(data => {
                    // this.isLine = false
                    this.refreshChange()
                    this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                })
              this.isLine = false;
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    /**
     * @title 路线数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave: function (row, done) {
      row.city_code = '610300'
      row.original_amt = row.original_amt * 100
      if (row.towards === '上行') row.towards = 0
      else if (row.towards === '下行') row.towards = 1
      let flag = false
      if (row.amt_type === 2 && +row.discount) {
        row.discount = +row.discount
        flag = true
      } else if (row.amt_type === 3 && +row.discount) {
        row.discount = +row.discount
        flag = true
      } else if (row.amt_type === 1 && !row.discount) {
        flag = true
      }

      if (flag) {
        addObj(row).then(data => {
          this.tableData.push(Object.assign({}, row))
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          })
          done()
        })
      }
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
.el-form-item {
  width: 50%;
}
.display{
  display: flex;
}
</style>
