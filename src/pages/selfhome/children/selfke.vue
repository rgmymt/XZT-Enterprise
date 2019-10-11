<template>
	<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
		<span style="font-size: 30px;"><b>培训课程</b></span><br>
		<span style="font-size: 17px;line-height: 60px;color:#828282 ;">最新发布的培训课程</span>
		<el-carousel type="card" height="400px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;">
			<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
				<img :src="context.src">
				<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
				<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" >删 除</el-button>
			</el-carousel-item>
		</el-carousel>
		<span style="font-size: 17px;line-height: 60px;color:#828282 ;">发布视频</span>
		<el-row :gutter="20">
  <el-col :span="12">
	  	<el-form :model="form" label-width="100px">
			<el-form-item label="课程名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="主讲教师">
				<el-input v-model="form.teacher"></el-input>
			</el-form-item>
			<el-form-item label="价格">
				<el-input v-model="form.price"></el-input>
			</el-form-item>
			<el-form-item label="课程介绍">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
			</el-form-item>
		</el-form>
  </el-col>
  <el-col :span="12">
	  
  </el-col>
 				<el-button @click="onSubmit" style="border: 1px solid #409EFF;color: #409EFF;font-size: 17px;margin-left:40%;width: 20%;">提交</el-button>
 
</el-row>
	
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					teacher:'',
					price: '',
					desc: ''
				},
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
							
						

			}
		}
	}
</script>

<style>

</style>
