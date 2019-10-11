<template>
	<div>
						<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">定向委培</h1>
						<el-card style="width: 90%;margin: 80px auto;">
							<div v-for="context in zhaopinglist" :key="context">
								<el-row :gutter="12" style="margin: 20px;">
									<el-col :span="5">
										<span style="font-size: 28px;line-height: 40px;">{{context.company}}</span>
										<span style="font-size: 28px;margin-left: 20px;line-height: 40px;">{{context.career}}</span>
									</el-col>
									<el-col :span="9">
										<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'已报名'+context.baonum+'人'}}</span>
									</el-col>
									<el-col :span="6">
										<span style="font-size: 23px;color:#FF0000 ;line-height: 40px;">{{context.lowsalary+'-'+context.highsalary+'元/月'}}</span><br>
										<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'截止于'+context.deadline}}</span>
									</el-col>
									<el-col :span="4">
										<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" disabled>删 除</el-button>
		
									</el-col>
		
								</el-row>
							</div>
						</el-card>
	</div>
</template>

<script>
	export default {
			data() {
					return {
					
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
