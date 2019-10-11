<template>
	<div>
		<el-container>
			<el-header style="background-color: #4a4c5b;">
				<el-row style="float: left;">
					<el-col :span="1/2"> <img src="../../assets/icon/logo.png" style="margin: 10px auto;"></el-col>
					<el-col :span="4"> <span style="font-size: 25px;color: #FFFFFF;margin-left: 20px;line-height: 60px;white-space: nowrap;"><b>新职通</b></span></el-col>
				</el-row>
			</el-header>
			<el-main class="loginmainbox" style="padding-top: 20px;">
				<div style="width: 400px;background-color: #FFFFFF;padding: 20px;margin-left: auto;margin-right: auto;margin-top: 10%;">
					<div style="text-align: center;font-size: 30px;line-height: 80px;font-family: Hiragino Sans GB;">找回密码</div>
					<el-steps :active="active" style="width: 85%;margin: 5px auto;">
						<el-step title="信息验证"></el-step>
						<el-step title="修改密码"></el-step>
						<el-step title="完成修改"></el-step>
					</el-steps>
					
					<div v-if="active==1">
					<el-row :gutter="12" style="margin-bottom: 20px;margin-top: 20px;">
						<el-col :span="9">
							<el-select v-model="value">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-col>
						<el-col :span="15">
							<el-input placeholder="请输入手机号" v-model="username"> </el-input>
						</el-col>
					</el-row>
					<el-input placeholder="请输入内容" v-model="yzm">

						<el-button v-show="!showtime" slot="append" @click="getyzm">获取短信验证码</el-button>
						<el-button v-show="showtime" slot="append">{{count}}s</el-button>
					</el-input>
					</div>
					
					<div v-else-if="active==2">
						<el-input placeholder="请设置您的密码" v-model="password" show-password style="margin-top: 20px;"></el-input>
						
						<el-input placeholder="请再次确认您的密码" v-model="checkpassword" show-password style="margin-top: 20px;"></el-input>
					</div>
					<div v-else style="text-align: center;padding: 40px;">
						<i class="el-icon-success" style="font-size: 80px;color: #36c626;"></i>
						<div style="line-height: 60px;color:#777578;font-size: 13px;">密码已重新设置，自动登录中…</div>
					</div>
					<el-button v-if="active!=3" type="info" plain style="border: 0px;width: 100%;background-color: #ebebeb;margin-top: 40px;line-height: 30px;"
					 @click="next">下一步</el-button>

				</div>
			</el-main>
			<el-footer style="text-align: center;width: 100%;white-space: nowrap;color: #A7A7A7;font-size: 10px;line-height: 60px;">
				<div>www. xinzhitong. com版权所有新职通一新时期务工人员转 型升级助推者备案号粤ICP备10054973号-5</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				checkpassword:'',
				yzm: '',
				active: 1,
				showtime: false,
				count: '',

				options: [{
					value: '中国大陆 +86',
					label: '中国大陆 +86'
				}, {
					value: '1',
					label: '1'
				}, {
					value: '2',
					label: '2'
				}],
				value: '中国大陆 +86'
			}
		},
		methods: {
			getyzm() {
				console.log('a')
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.showtime = true;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.showtime = false;
							clearInterval(this.timer);
							this.timer = null
						}
					}, 1000)
				}
			},
			next() {
				console.log('a')
				this.active++;
				if (this.active == 3) {
					setTimeout(() => {
						this.$router.push('/home/selfinfo')
					}, 2000)
				}
			},
		},
		mounted() {
			var body = document.getElementsByClassName('loginmainbox')[0]
			console.log(body)
			var height = document.documentElement.clientHeight - 120
			console.log(height.toString() + 'px')
			if (height <= 700)
				height = 700
			body.style.height = height.toString() + 'px'
			console.log(body.style.height)



		}
	}
</script>

<style>
	.el-input__inner {
		border-radius: 0px;
		padding-left: 10px !important;
	}

	.loginmainbox {

		background-image: url(../../assets/loginbgi.jpg);
		background-size: cover;
	}

	.el-step__head.is-finish {
		color: #fc975c;
		border-color: #fc975c;
	}

	.el-step__title.is-finish {
		color: #fc975c;
	}

	.el-step__head.is-process {
		color: #C0C4CC;
		border-color: #C0C4CC;
	}

	.el-step__title.is-process {
		color: #C0C4CC;
		font-weight: 500;
	}

	.loginbox {
		width: 500px;
		margin-top: 10%;
		margin-left: 60%;
	}

	.loginbox .el-tabs__item {
		width: 250px;
		text-align: center;
		font-size: 17px;
		line-height: 60px;
		height: auto;
	}

	.el-step__icon {
		width: 40px;
		height: 40px;

	}

	.el-step__icon.is-text {
		border: 1px solid;
	}

	.el-step__title {
		font-size: 13px;
	}

	.el-step.is-horizontal .el-step__line {
		top: 20px;
		left: 50px;
		right: 10px;
	}
</style>
