<template>
<div>
   <div class="dz-header">包车旅游</div>
    <div class="app-container pull-auto">
      <basic-container>
        <avue-crud ref="crud"
                  :page="page"
                  :data="hireBus"
                  :table-loading="tableLoading"
                  :option="tableOption"
                  @current-change="currentChange"
                  @refresh-change="refreshChange"
                  @size-change="sizeChange"
                  @row-update="handleUpdate"
                  @row-save="handleSave"
                  @row-del="rowDel">
          <!-- <template slot="menuLeft">
            <el-button type="primary"@click="handleAdd" size="small">新 增</el-button>
            <br /><br />
          </template> -->
          <template slot-scope="scope" menuAlign="left"
                    slot="menu">
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
          </template>
        </avue-crud>
      </basic-container>
    </div>
</div>
</template>

<script>
  import { fetchList, getObj, putObj } from '@/api/hirebus'
  import { tableOption } from '@/const/crud/hirebus'
  import { mapGetters } from 'vuex'
  export default {
    name: 'custbus',
    data() {
      return {
        line: false,
        isLine: false,
        hireBus: [],
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
    created() {
      this.getList()
    },
    mounted: function() { },
    computed: {
      ...mapGetters(['permissions'])
  },
  methods: {
    // 获取包车旅游列表
    getList() {
      this.tableLoading = true
      fetchList(this.listQuery).then(response => {
        // console.log(response)
        this.hireBus = response.data.data.result || response.data.records
        this.page.total = +response.data.data.total_count|| +response.data.total
        this.tableLoading = false
      }).catch( err => {
        this.tableLoading = false
      })
    },
    currentChange(val) {
      this.page.currentPage = val
      this.listQuery.page = val
      this.getList()
    },
    // 查看余票
    handleStock (e) {
      // console.log(e)
      location.href =  `#/custombus/stock?id=${e.id}`
    },
    handleClick (e) {
      // console.log(e)
      location.href =  `#/custombus/custbusdetail?id=${e.id}`
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
      this.line = true
      // this.$refs.crud.rowAdd()
    },
    handleCell (row, index) {
      this.updateLine = row
      this.isLine = true
      // console.log(this.$refs.crud)
    },
    handleEdit(row, index) {
      // console.log(this.$refs.crud)
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
      }).then(function() {
          return delObj(row.id)
      }).then(data => {
        _this.tableData.splice(index, 1)
        _this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
      })
      .catch(function(err) {
      })
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
        // this.isLine = false
        this.refreshChange()
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        })
        done()
    })
    },
    /**
     * @title 路线数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave: function(row, done) {
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
    refreshChange() {
      this.getList()
    }
  }
  }
</script>

<style lang="scss" scoped>
.el-form-item{
  width: 50%;
}
</style>
