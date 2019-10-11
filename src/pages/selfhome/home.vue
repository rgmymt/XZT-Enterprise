<template>
	<div>
		<el-container>
			<el-container>
				<el-aside class="selfaside" style="width: 200px;background-color: #32323a;">
					<el-row style="margin:10px 10px;">
						<el-col :span="2"> <img src="../../assets/icon/logo.png" style="margin: 10px auto;"></el-col>
						<el-col :span="4"> <span style="font-size: 25px;color: #FFFFFF;margin-left: 20px;line-height: 60px;white-space: nowrap;"><b>新职通企业版</b></span></el-col>
					</el-row>
					<el-menu :default-active="$route.path" style="width: 100%;border: none;background-color: #32323a;color: #FFFFFF;" router>

						<el-menu-item index="/home/selfinfo">
							<i class="iconfont icon-shouye" style="font-size: 25px;"></i>
							<span slot="title">首页</span>
						</el-menu-item>
						<el-menu-item index="/home/selfzhao">
							<i class="iconfont icon-zhaopin" style="font-size: 25px;"></i>
							<span slot="title">招聘管理</span>
						</el-menu-item>
						<el-menu-item index="/home/selfhui">
							<i class="iconfont icon-renshu" style="font-size: 25px;"></i>
							<span slot="title">招聘会</span>
						</el-menu-item>
						<el-menu-item index="/home/selfke">
							<i class="iconfont icon-peixun1" style="font-size: 25px;"></i>
							<span slot="title">培训课程</span>
						</el-menu-item>
						<el-menu-item index="/home/selfpei">
							<i class="iconfont icon-if__" style="font-size: 25px;"></i>
							<span slot="title">申请委培</span>
						</el-menu-item>
						<el-menu-item index="/home/selfmessage">
							<i class="iconfont icon-xinfeng" style="font-size: 25px;"></i>
							<span slot="title">消息</span>
						</el-menu-item>

					</el-menu>
				</el-aside>
				<el-container style="background-color: #FFFFFF;">
					<el-header style="background-color: #FFFFFF;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
						<el-row style="width: 90%;float: left;line-height: 60px;">
							<el-col :span="7"> <span style="font-size: 25px;margin-left: 20px;white-space: nowrap;"><b>杭州润实互联网科技</b></span></el-col>

							<el-col :span="1/2"> <span style="background-color: #fc3a0f;margin-left: 20px;color: #FFFFFF;padding: 5px 10px;">未认证</span></el-col>

						</el-row>
						<el-button type="text" @click="$router.push('/login')" style="float: right;margin-left: 15px;">
							<i class="iconfont icon-tuichu" style="font-size: 25px;line-height: 40px;color: #000000;"></i>
							
							<span style="color: #000000;font-size: 20px;margin-left: 5px;"><b>退出</b></span>
						</el-button>
						
					</el-header>
					<el-main style="padding-top: 20px;background-color: #efefef;">
						<router-view></router-view>
					</el-main>

				</el-container>
			</el-container>
			<el-footer style="text-align: center;width: 100%;white-space: nowrap;overflow: hidden;color: #FFFFFF;background-color: #5e5e5e;font-size: 7px;line-height: 40px;height: 40px;">
				<div>www. xinzhitong. com版权所有新职通一新时期务工人员转 型升级助推者备案号粤ICP备10054973号-5</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.selfaside .el-menu-item,
	.el-submenu__title {
		font-size: 18px !important;
		padding-left: 50px !important;
	}

	.selfaside .el-menu-item {
		color: #FFFFFF;
	}

	.selfaside .el-menu-item i {
		color: #FFFFFF;
	}

	.selfaside .el-menu-item.is-active i {
		color: #409EFF;
	}

	.selfaside .el-menu-item.is-active {
		color: #409EFF;
	}
</style>
