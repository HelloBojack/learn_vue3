<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { ElForm } from "element-plus";
import { useUserStore } from "@/store/user";
import { ElMessage } from "element-plus";

const userStore = useUserStore();

const ruleFormRef = ref<InstanceType<typeof ElForm>>();

const checkUsername = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [{ validator: checkUsername, trigger: "blur" }],
  password: [{ validator: validatePass, trigger: "blur" }],
});

const submitForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        // 登录 & Token
        await userStore.login(ruleForm);
        // 用户信息
        await userStore.userInfo();
      } catch (err) {
        ElMessage.error(err);
      }
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<template>
  <div>
    <div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="ruleForm.username" type="text"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Submit
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
