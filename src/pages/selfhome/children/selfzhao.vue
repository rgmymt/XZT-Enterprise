<template>
	<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
		<span style="font-size: 30px;"><b>招聘管理</b></span><br>
		<span style="font-size: 17px;line-height: 60px;color:#828282 ;">最新发布的招聘信息</span>
		<el-row :gutter="20" >
			<el-col :span="8"><img src="../../../assets/t4.jpg" style="width: 100%;height: 230px;"></el-col>
			<el-col :span="16" v-for="context in zhaopinglist" :key="context">
				<el-row :gutter="12" style="margin: 20px;">
					<el-col :span="10">
						<span style="font-size: 28px;line-height: 40px;">{{context.company}}</span>
						<span style="font-size: 28px;margin-left: 20px;line-height: 40px;">{{context.career}}</span>
						<br>
						<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'已报名'+context.baonum+'人'}}</span>
					</el-col>
					<el-col :span="8">
						<span style="font-size: 23px;color:#FF0000 ;line-height: 40px;">{{context.lowsalary+'-'+context.highsalary+'元/月'}}</span><br>
						<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'截止于'+context.deadline}}</span>
					</el-col>
					<el-col :span="6">
						<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;">删 除</el-button>

					</el-col>

				</el-row>
			</el-col>

		</el-row>
		<span style="font-size: 17px;line-height: 60px;color:#828282 ;">添加招聘</span>
		<el-form :model="form" label-width="80px">
			<el-form-item label="职位名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="工作时间">
				<el-input v-model="form.time"></el-input>
			</el-form-item>
			<el-form-item label="资质要求">
				<el-input v-model="form.request"></el-input>
			</el-form-item>
			<el-form-item label="薪资待遇">
				<el-input v-model="form.salary"></el-input>
			</el-form-item>
			<el-form-item label="福利待遇">
				<el-input v-model="form.fuli"></el-input>
			</el-form-item>
			<el-form-item label="工作内容">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="onSubmit" style="border: 1px solid #409EFF;color: #409EFF;font-size: 17px;margin-left:40%;width: 20%;">提交</el-button>

			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					time: '',
					request: '',
					salary: '',
					fuli: '',
					desc: ''
				},
				zhaopinglist: [{
					company: '苏州华硕',
					career: '操作工',
					baonum: 151,
					lowsalary: 3800,
					highsalary: 4700,
					deadline: '03月29日',
				}, {
					company: '苏州华硕',
					career: '操作工',
					baonum: 151,
					lowsalary: 3800,
					highsalary: 4700,
					deadline: '03月29日',
				}],

			}
		}
	}
</script>

<style>

</style>
