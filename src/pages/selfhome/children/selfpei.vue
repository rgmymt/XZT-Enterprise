<template>
	<div style="width: 95%;margin: 10px auto;">
						<el-card >
							<span style="font-size: 30px;"><b>定向委培</b></span><br>
							<div v-for="context in zhaopinglist" :key="context">
								<el-row :gutter="12" style="margin: 20px;">
									<el-col :span="5">
										<span style="font-size: 28px;line-height: 40px;">{{context.career}}</span>
									</el-col>
									<el-col :span="8">
										<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'已报名'+context.baonum+'人'}}</span>
									</el-col>
									<el-col :span="6">
										<span style="font-size: 23px;color:#FF0000 ;line-height: 40px;">{{context.lowsalary+'-'+context.highsalary+'元/月'}}</span><br>
										<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'截止于'+context.deadline}}</span>
									</el-col>
									<el-col :span="5">
										<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" >删 除</el-button>
		
									</el-col>
		
								</el-row>
							</div>
						</el-card>	
		<el-card style="margin-top: 40px;">	
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
		</el-card>	
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
					
					career: '操作工',
					baonum: 151,
					lowsalary: 3800,
					highsalary: 4700,
					deadline: '03月29日',
				}, {
				
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
