<template>
	<div>
		<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新发布的招聘信息</h1>
		<el-row :gutter="20" style="width: 90%;margin: 80px auto;padding-left: 40px;">
			<el-col :span="7"><img src="../../../assets/t4.jpg" style="width: 100%;height: 250px;"></el-col>
			<el-col :span="17" v-for="context in zhaopinglist" :key="context">
				<el-row :gutter="12" style="margin: 20px;">
					<el-col :span="8">
						<span style="font-size: 28px;line-height: 40px;">{{context.company}}</span>
						<span style="font-size: 28px;margin-left: 20px;line-height: 40px;">{{context.career}}</span>
						<br>
						<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'已报名'+context.baonum+'人'}}</span>
					</el-col>
					<el-col :span="8">
						<span style="font-size: 23px;color:#FF0000 ;line-height: 40px;">{{context.lowsalary+'-'+context.highsalary+'元/月'}}</span><br>
						<span style="font-size: 18px;color:#6d6d6d ;line-height: 40px;">{{'截止于'+context.deadline}}</span>
					</el-col>
					<el-col :span="8">
						<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;"
						 disabled>删 除</el-button>

					</el-col>

				</el-row>
			</el-col>

		</el-row>

		<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新发布的招聘会信息</h1>
		<el-carousel type="card" height="350px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;margin: 80px auto;">
			<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
				<img :src="context.src">
				<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
				<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" disabled>删
					除</el-button>
			</el-carousel-item>
		</el-carousel>

		<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新发布的培训视频</h1>
		<el-carousel type="card" height="350px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;margin: 80px auto;">
			<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
				<img :src="context.src">
				<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
				<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" disabled>删
					除</el-button>
			</el-carousel-item>
		</el-carousel>
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
						<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;"
						 disabled>删 除</el-button>

					</el-col>

				</el-row>
			</div>
		</el-card>
		<!-- <el-card style="width: 90%;margin: 20px auto;margin-bottom: 80px;">
	  
					</el-card> -->
		<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新消息</h1>
		<el-card style="width: 90%;margin: 20px auto;margin-bottom: 80px;">
			<el-table :data="messagelist" tooltip-effect="dark" style="width: 100%">
				<el-table-column width="55">
					<template slot="header" slot-scope="scope">
					<img src="../../../assets/kuang.png" style="width: 15px;">
					</template>
					<template slot-scope="scope">
					<img src="../../../assets/kuang.png" style="width: 15px;">
					</template>
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

				zhaopinghuilist: [{
					src: './static/img/t1.png',
					des: '河南愽太建筑工程有限公司主要经营:等产品。公司尊崇“踏实、拼搏、责任”的企业精神，并以诚信信、共贏、开创经营理念·创造良好的企业环境·以全新的管理模式,完善的技术，周到的服务，卓越的品质为生存根本。',
				}, {
					src: './static/img/t2.png',
					des: '河南愽太建筑工程有限公司主要经营:等产品。公司尊崇“踏实、拼搏、责任”的企业精神，并以诚信信、共贏、开创经营理念·创造良好的企业环境·以全新的管理模式,完善的技术，周到的服务，卓越的品质为生存根本。',

				}, {
					src: './static/img/t3.png',
					des: '河南愽太建筑工程有限公司主要经营:等产品。公司尊崇“踏实、拼搏、责任”的企业精神，并以诚信信、共贏、开创经营理念·创造良好的企业环境·以全新的管理模式,完善的技术，周到的服务，卓越的品质为生存根本。',

				}],
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
	.el-carousel__item {
		color: #475669;
		font-size: 14px;
		height: auto;
		margin: 0;
	}
</style>
