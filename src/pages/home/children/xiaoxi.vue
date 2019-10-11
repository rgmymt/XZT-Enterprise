<template>
	<div>
						<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新消息</h1>
						<el-card style="width: 90%;margin: 20px auto;margin-bottom: 80px;">
							<el-table :data="messagelist" tooltip-effect="dark" style="width: 100%" >
								<el-table-column type="selection" width="55" >
								</el-table-column>
								<el-table-column prop="title" show-overflow-tooltip>
									<template slot="header" slot-scope="scope">
										<span style="font-size: 20px;line-height: 40px;">全选</span>
									</template>
								</el-table-column>
								<el-table-column prop="static" width="120">
									<template slot="header" slot-scope="scope">
										<i class="iconfont icon-yidu " style="font-size: 40px;color:#6d6d6d;line-height: 40px;"></i>
									</template>
								</el-table-column>
								<el-table-column prop="work" width="200">
									<template slot="header" slot-scope="scope">
		
										<i class="el-icon-delete" style="font-size: 40px;color:#409EFF;line-height: 40px;"></i>
									</template>
									<template slot-scope="scope">
										<el-button style="border: 1px solid #409EFF;width: 80%;color: #409EFF;font-size: 17px;margin-top: 20px;" disabled>删除</el-button>
		
									</template>
								</el-table-column>
							</el-table>
						</el-card>
	</div>
</template>

<script>
	export default {
			data() {
					return {
					
						messagelist: [{
							title: '“操作工”职位招聘信息上传成功',
							static: '未读'
						}, {
							title: '小型招聘会发布成功',
							static: '未读'
						}, {
							title: '电工培训课程上传成功',
							static: '已读'
						}, {
							title: '是否参加xx大型招聘会？',
							static: '已读'
						}],
					}
				}
	}
</script>

<style>

</style>
