<template>
	<div class="messagebox" style="width: 95%;margin: 10px auto;background-color: #FFFFFF;padding: 30px;"> 
					
						<span style="font-size: 30px;"><b>消息</b></span><br>

						<el-table :data="messagelist.slice((pagenow-1)*8,pagenow*8)" tooltip-effect="dark" style="width: 100% ;" >
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
						<div style="background-color: #FFFFFF;">
				<el-pagination background :page-size="8" @current-change="handleCurrentChange" layout="total, prev, pager, next, jumper" :total="400" style="float: right;">
		
				</el-pagination>	
					</div>
		
					
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pagenow: 1,
				form: {
					name: '',
					time: '',
					request: '',
					salary: '',
					fuli: '',
					desc: ''
				},
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
				},{
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
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleCurrentChange(val) {
				this.pagenow = val;
				console.log(`当前页: ${val}`);
			}
		},
		mounted() {
			var body = document.getElementsByClassName('messagebox')[0]
			console.log(body)
			var height = document.documentElement.clientHeight - 180
			console.log(height.toString() + 'px')
			body.style.height = height.toString() + 'px'
			console.log(body.style.height)
		}
	}
</script>

<style>

</style>
