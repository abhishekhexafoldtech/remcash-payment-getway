<template>
  <el-container class="main_wrapper">
    <el-header class="main_header">
      <div class="header_inner">
        <div class="back_btn">
          <el-button><i class="ri-arrow-left-s-line"></i></el-button>
          <label>Back</label>
        </div>
        <el-dropdown>
          <el-icon>
            <i class="ri-menu-line"></i>
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

    <el-container>
      <el-aside class="side_menu">
        <h3>How would you like to pay</h3>
        <el-scrollbar>
          <el-menu default-active="2">
            <el-menu-item index="1">
              <el-icon><i class="ri-cash-line"></i></el-icon>
              <span>MOMO</span>
            </el-menu-item>
            <!-- <el-menu-item index="2">
              <el-icon><i class="ri-cash-line"></i></el-icon>
              <span> MTN</span>
            </el-menu-item> -->
            <el-menu-item index="3">
              <el-icon><i class="ri-bank-card-2-fill"></i></el-icon>
              <span>Credit Card</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><i class="ri-bank-card-2-fill"></i></el-icon>
              <span>Debit Card</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><i class="ri-bank-line"></i></el-icon>
              <span>Internet Banking</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
        <div class="powered_by">
          <p>Powered By</p>
          <img src="../assets/remcash_logo.svg" alt="" />
        </div>
      </el-aside>

      <el-main class="main_content">
        <div class="intro_text">
          <h2>Enter Your MOMO Details</h2>
          <p>You are paying <b>GHs500</b> to <b>Nova Gas Company</b> limited in ghana's northern zone.</p>
        </div>


        <el-form :model="form" label-position="top" class="pay_form">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
              <div class="custom_radio">
                <el-radio-group v-model="radio1">
                  <el-radio label="1" border>
                    <img src="../assets/mtn.png" alt="">
                    <!-- <b>MTN</b> -->
                  </el-radio>
                  <!-- <el-radio label="2" border>
                    <img src="../assets/airtel.png" alt="">
                    <b>Airtel</b>
                  </el-radio>
                  <el-radio label="3" border>
                    <img src="../assets/vodafone.png" alt="">
                    <b>Vodafone</b>
                  </el-radio> -->
                </el-radio-group>
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-form-item class="input_form" label="First Name">
                <el-input v-model="form.name" />
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-form-item class="input_form" label="Last Name">
                <el-input v-model="form.name" />
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24">
              <el-form-item class="input_form" label="Enter your MOMO phone number to pay">
                <el-input placeholder="Eg: 078546xxxxxx" v-model="form.name" />
              </el-form-item>
            </el-col>
          </el-row>
          <div class="form_action">
            <el-button class="pay_btn" @click="onSubmit">Pay GHs500</el-button>
            <el-button>Cancel</el-button>
          </div>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>
  
<script setup>
import { ref, reactive } from 'vue'

const radio1 = ref('1')


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
  
<style scoped></style>
  