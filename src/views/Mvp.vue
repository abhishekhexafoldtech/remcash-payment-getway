<template>
    <el-container class="layout-container-demo" style="height: 500px">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu >
            <el-sub-menu index="1">
              <template #title>
                MOMO
              </template>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                MTN
              </template>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                Credit card
              </template>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                Debit card
              </template>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                Net Banking
              </template>
            </el-sub-menu>

          </el-menu>
        </el-scrollbar>
      </el-aside>
  
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px">
                    <setting/>
                </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
                
          </div>
        </el-header>
  
        <el-main>
            <el-row >
            <el-col :xs="12" :sm="12" :md="12" :lg="12" style="padding-left: 400px; padding-top:70px;" >
                <span style="font-size: medium;">Powered By</span> <el-button  type="info">Rem Cash</el-button>
                <img src="../assets/logo.png" alt="" style="width:80%; height: 100px;" />
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span><h3>Merchent name</h3></span>
                    </div>
                    </template>
                    <div  class="text item">
                            No. 6, Sixth Street
                            <br>

                            Airport Residential Area
                            <br>
                            Accra
                            <br>
                           Ghana 

                            <br>
                              0302763158


                    </div>
                </el-card>
            </el-col>


            <el-col :xs="12" :sm="12" :md="12" :lg="12">
                <el-form :model="form" label-position="top" style="padding:30px;">
                    <el-row :gutter="10">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <el-form-item label="First name">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <el-form-item label="Last name">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-col>

                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <el-form-item label="Enter your MTN phone number to pay">
                                <el-input placeholder="Eg: 078546xxxxxx" v-model="form.name" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" style="padding:30px;">
                            <el-button type="primary" @click="onSubmit">Pay Ghn500</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
                &nbsp;
            </el-col>
            </el-row>
        </el-main>
      </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
  import { ref, reactive } from 'vue'

  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
  
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
  const tableData = ref(Array.from({ length: 20 }).fill(item))


// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}


</script>
  
<style scoped>

  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
</style>
  