<template>
	<div>
		<el-container>
			<el-header class="homeheader" style="height: 450px;">
				<el-row style="width: 90%;float: left;">
					<el-col :span="1/2"> <img src="../../assets/icon/logo.png" style="margin: 10px auto;"></el-col>
					<el-col :span="5"> <span style="font-size: 25px;color: #FFFFFF;margin-left: 20px;line-height: 60px;white-space: nowrap;"><b>新职通企业端</b></span></el-col>
					<el-col :span="17">
						<el-menu :default-active="$route.path" background-color="#0000" text-color="#fff" active-text-color="#409EFF"
						 mode="horizontal" router>
							<el-menu-item index="/shouye">首页</el-menu-item>
							<el-menu-item index="/zhaoping">招聘管理</el-menu-item>
							<el-menu-item index="/zhaopinghui">招聘会</el-menu-item>
							<el-menu-item index="/kecheng">培训课程</el-menu-item>
							<el-menu-item index="/weipei">申请委培</el-menu-item>
							<el-menu-item index="/xiaoxi">消息</el-menu-item>
						</el-menu>

					</el-col>

				</el-row>
				<el-button type="text" @click="$router.push('/registe')" style="float: right;margin-left: 15px;">
					<span style="color: #FFFFFF;font-size: 15px;margin-left: 5px;">注册</span>
				</el-button>
				<el-button type="text" @click="$router.push('/login')" style="float: right;">
					<span style="color: #FFFFFF;font-size: 15px;margin-left: 5px;">登录</span>
				</el-button>

			</el-header>
			<el-main>
				<el-dialog  :visible.sync="showtabel" style="width: 700px;margin-left: auto;margin-right:auto;overflow:hidden">
					<div style="text-align: center;font-size: 20px;margin-bottom: 20px;">我们的成长,离不开您的支持</div>
					<el-form :model="form" >
						<el-form-item  :label-width="formLabelWidth">
							<el-input v-model="form.name" placeholder="您的企业名称(必填)" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item :label-width="formLabelWidth">
							<el-input v-model="form.name" placeholder="您的称呼(必填)" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item :label-width="formLabelWidth">
							<el-input v-model="form.name" placeholder="您的手机号(必填)" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item  :label-width="formLabelWidth">
							<el-input v-model="form.name" placeholder="您的邮箱" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item  :label-width="formLabelWidth">
							<el-input v-model="form.name" placeholder="请您填写合作意向或建议" autocomplete="off"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" style="text-align: center;" >
					
						<el-button type="primary" @click="showtabel = false" style="width: 250px;">确 定</el-button>
					</div>
				</el-dialog>
				<router-view></router-view>
			</el-main>
			<el-footer style="width: 100%;white-space: nowrap;background-color: #f4f4f4;height: 150px;">
				<el-row :gutter="20" style="margin: 50px 20px;margin-bottom: 0px;">
					<el-col :span="12">
						<el-breadcrumb separator="|" style="margin-top: 20px ;">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
							<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
							<el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
							<el-breadcrumb-item></el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="12">
						<el-row :gutter="20">
							<el-col :span="12"><span style="color: #6f6f6f;font-size: 10px;">电子邮箱：xinzhitong@163.com</span><br><span style="color: #6f6f6f;font-size: 10px;line-height: 80px;">杭州润实互联网科技有限公司版权所有.All
									rights reserd.网站建设：杭州润实</span></el-col>
							<el-col :span="1">
								<i class="el-icon-phone" style="font-size: 40px;line-height: 40px;color: #4d494a;"></i>
							</el-col>
							<el-col :span="11">
								<h1 style="margin: 0px 10px;color: #4d494a;">400-006-7933</h1>
							</el-col>

						</el-row>

					</el-col>
				</el-row>

				<!-- <div>www. xinzhitong. com版权所有新职通一新时期务工人员转 型升级助推者备案号粤ICP备10054973号-5</div> -->
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
			
				showtabel:false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '0px'
			}
		},
		methods: {

		},
		mounted() {
			setTimeout(() => {
				this.showtabel=true
			}, 6000)
		}
	}
</script>

<style>
	.homeheader .el-menu-item,
	.el-submenu__title {
		height: auto !important;
		width: 120px;
		margin: 10px 0px;
	}





	.homeheader {
		background-image: url(../../assets/headerbgi.jpg);
		background-size: cover;
	}

	.homeheader .el-menu-item {
		font-size: 15px;
	}

	.homeheader .el-menu.el-menu--horizontal {
		border: 0px;
	}
</style>
