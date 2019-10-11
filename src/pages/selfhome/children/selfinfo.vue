<template>
	<div>
	<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
		<span style="font-size: 30px;"><b>基本信息</b></span>
		<el-button v-show="!edit" type="text" style="margin-left: 200px;font-size: 15px;color: #3367ff;" @click="edit=true"><b>编辑</b></el-button>
		<br>
		<el-form v-show="!edit" :model="form" label-width="100px" style="margin-top: 20px;">
					<el-form-item label="企业名称">
						<span>{{form.name}}</span>
					</el-form-item>
					<el-form-item label="中文简称">
						<span>{{form.zwjian}}</span>
					</el-form-item>
					<el-form-item label="联系人">
						<span v-if="form.people==null">未填写</span>
						<span v-if="form.people!=null">{{form.people}}</span>
					</el-form-item>
					<el-form-item label="联系电话">
						<span v-if="form.phone==null">未填写</span>
						<span v-if="form.phone!=null">{{form.phone}}</span>
					</el-form-item>
					<el-form-item label="联系邮箱">
						<span>{{form.email}}</span>
					</el-form-item>
					<el-form-item label="英文简称">
						<span v-if="form.ywjian==null">未填写</span>
						<span v-if="form.ywjian!=null">{{form.ywjian}}</span>
					</el-form-item>
					<el-form-item label="所属行业">
						<span v-if="form.sshy==null">未填写</span>
						<span v-if="form.sshy!=null">{{form.sshy}}</span>
					</el-form-item>
					<el-form-item label="人员规模">
						<span v-if="form.guimo==null">未填写</span>
						<span v-if="form.guimo!=null">{{form.guimo}}</span>
					</el-form-item>
				
		</el-form>
		<el-form v-show="edit" :model="form" label-width="100px" style="margin-top: 20px;width: 70%;">
					<el-form-item label="企业名称"  :rules="{
      required: true, message: '企业名称不能为空', trigger: 'blur'
    }">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="中文简称" :rules="{
      required: true, message: '中文简称不能为空', trigger: 'blur'
    }">
						<el-input v-model="form.zwjian"></el-input>
					</el-form-item>
					<el-form-item label="联系人">
						<el-input v-model="form.people"></el-input>
					</el-form-item>
					<el-form-item label="联系电话">
						<el-input v-model="form.phone"></el-input>
					</el-form-item>
					<el-form-item label="联系邮箱"    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]">
						<el-input v-model="form.email" ></el-input>
					</el-form-item>
					<el-form-item label="英文简称">
						<el-input v-model="form.ywjian"></el-input>
					</el-form-item>
					<el-form-item label="所属行业">
						<el-select  v-model="form.sshy" style="width: 100%;">
							<el-option v-for="item in hangye" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="人员规模">
						<el-select  v-model="form.guimo" style="width: 100%;">
							<el-option v-for="item in guimo" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
				<el-form-item>
						<el-button @click="save" style="border: 1px solid #409EFF;background-color: #409EFF;color: #FFFFFF;font-size: 17px;width: 20%;" >保存修改</el-button>
						<el-button @click="quxiaosave" style="border: 1px solid #409EFF;color: #409EFF;font-size: 17px;width: 20%;" >取消修改</el-button>
						
				</el-form-item>
		</el-form>
	</div>
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
	</div>
	<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
			<span style="font-size: 30px;"><b>招聘会</b></span><br>
			<span style="font-size: 17px;line-height: 60px;color:#828282 ;">最新发布的招聘会信息</span>
			<el-carousel type="card" height="400px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;">
				<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
					<img :src="context.src">
					<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
					<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" >删 除</el-button>
				</el-carousel-item>
			</el-carousel>
			
		</div>
		<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
			<span style="font-size: 30px;"><b>培训课程</b></span><br>
			<span style="font-size: 17px;line-line: 60px;color:#828282 ;">最新发布的培训课程</span>
			<el-carousel type="card" height="400px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;">
				<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
					<img :src="context.src">
					<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
					<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" >删 除</el-button>
				</el-carousel-item>
			</el-carousel>
			</div>
			<div style="width: 95%;margin: 20px auto;background-color: #FFFFFF;padding: 30px;">
							
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
							
								</div>
									<div class="messagebox" style="width: 95%;margin: 10px auto;background-color: #FFFFFF;padding: 30px;"> 
													
														<span style="font-size: 30px;"><b>消息</b></span><br>
														<span style="font-size: 17px;line-line: 60px;color:#828282 ;">最新消息</span>
														<el-table :data="messagelist" tooltip-effect="dark" style="width: 100% ;" >
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
													
										
													
									</div>
	</div>
</template>

<script>
	export default {
			data() {
					return {
						edit:false,
						form: {
							name: '杭州润实互联网科技',
							zwjian: '润实',
							email: '1152257234@qq.com'
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
											static: '未读'
										}],
									guimo: [{
										value: '1-50人',
										label: '1-50人'
									}, {
										value: '51-100人',
										label: '51-100人'
									}, {
										value: '101-300人',
										label: '101-300人'
									}, {
										value: '301-500人',
										label: '301-500人'
									}, {
										value: '501-1000人',
										label: '501-1000人'
									}, {
										value: '1001-3000人',
										label: '1001-3000人'
									}, {
										value: '3000人以上',
										label: '3000人以上'
									}],
									hangye: [{
										value: '互联网',
										label: '互联网'
									}, {
										value: '建筑',
										label: '建筑'
									}, {
										value: '机械',
										label: '机械'
									}, {
										value: '餐饮',
										label: '餐饮'
									}, {
										value: '交通',
										label: '交通'
									}],
								
		
					}
				},
				methods: {
				save(){
					this.edit=false
				},
				quxiaosave(){
					this.edit=false
				},
				},
	}
</script>

<style>

</style>
