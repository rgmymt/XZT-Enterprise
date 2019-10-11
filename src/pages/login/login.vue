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
				<el-tabs type="border-card" class="loginbox">
					<el-tab-pane label="密码登录" style="width: 85%;margin:20px auto;">
						<el-row :gutter="12" style="margin-bottom: 20px;">
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
						<el-input placeholder="请输入您的密码" v-model="password" show-password></el-input>
						<div style="float: right;color: #a2999e;line-height: 30px;" @click="$router.push('/forget')">忘记密码？</div>
						<el-button type="info" plain style="border: 0px;width: 100%;background-color: #ebebeb;margin-top: 20px;line-height: 30px;"@click="mmlogin">登录</el-button>
					</el-tab-pane>
					<el-tab-pane label="短信验证码登录" style="width: 85%;margin:20px auto;">
						<el-row :gutter="12" style="margin-bottom: 20px;">
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
						<el-input placeholder="请输入验证码" v-model="yzm" >

							<el-button  v-show="!showtime" slot="append" @click="getyzm">获取短信验证码</el-button>
						<el-button  v-show="showtime" slot="append" >{{count}}s</el-button>
						</el-input>
						<el-button type="info" plain style="border: 0px;width: 100%;background-color: #ebebeb;margin-top: 40px;line-height: 30px;" @click="yzlogin">登录</el-button>

					</el-tab-pane>
				</el-tabs>
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
				yzm:'',
			
				showtime:false,
				count:'',
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
			getyzm(){
				console.log('a')
				const TIME_COUNT=60;
				if(!this.timer){
					this.count=TIME_COUNT;
					this.showtime=true;
					this.timer=setInterval(()=>{
						if(this.count>0&&this.count<=TIME_COUNT){
							this.count--;
						}else{
							this.showtime=false;
							clearInterval(this.timer);
							this.timer=null
						}
					},1000)
				}
			},
			mmlogin(){
				this.$router.push('/home/selfinfo')
			},
			yzlogin(){
				this.$router.push('/home/selfinfo')
			},
		},
		mounted() {
			var body = document.getElementsByClassName('loginmainbox')[0]
			console.log(body)
			var height = document.documentElement.clientHeight - 120
			console.log(height.toString() + 'px')
			if(height<=700)
				height=700
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
</style>
