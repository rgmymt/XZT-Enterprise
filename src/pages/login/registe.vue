<template>
	<div class="registepage">
		<el-container>
			<el-aside style="width: 60%;">

			</el-aside>
			<el-container style="background-color: #FFFFFF;">
				<el-header style="background-color: #FFFFFF;">
					<el-row style="float: left;">
						<el-col :span="1/2"> <img src="../../assets/icon/logo.png" style="margin: 10px auto;"></el-col>
						<el-col :span="4"> <span style="font-size: 25px;color: #6b6b6b;margin-left: 20px;line-height: 60px;white-space: nowrap;"><b>新职通企业版</b></span></el-col>
					</el-row>
				</el-header>
				<el-main class="loginmainbox" style="padding-top: 20px;background-color: #FFFFFF;">
					<div style="width: 80%;margin: 20px auto;">
						<span style="font-size: 50px;">企业注册</span><br>
						<span style="font-size: 25px;line-height: 60px;color:#828282 ;">新时期务工人员转型升级助推者</span>
						<el-input class="registeinput" placeholder="手机号" v-model="username" > </el-input>
						<el-input class="registeinput" placeholder="验证码" v-model="yzm">

							<el-button v-show="!showtime" slot="append" @click="getyzm">获取短信验证码</el-button>
							<el-button v-show="showtime" slot="append">{{count}}s</el-button>
						</el-input>
						<el-input class="registeinput" placeholder="企业名称" v-model="companyname"> </el-input>
						<el-select class="registeinput" v-model="value" placeholder="企业规模">
							<el-option v-for="item in guimo" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-input class="registeinput" placeholder="邮箱" v-model="email"> </el-input>
						 <div class="registeinput">
						 <i class="el-icon-success" style="color: #26bd1c;font-size: 20px;"></i>
						 <span style="color: #828282;font-size: 12px;">我已同意《新职通企业版服务协议》</span>
						 </div>
						 <el-button class="registeinput" type="primary" @click="registe">立即注册</el-button>
					</div>
				</el-main>
				<el-footer style="text-align: center;width: 100%;white-space: nowrap;overflow: hidden;color: #A7A7A7;font-size: 7px;line-height: 60px;">
					<div>www. xinzhitong. com版权所有新职通一新时期务工人员转 型升级助推者备案号粤ICP备10054973号-5</div>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				yzm: '',
				companyname: '',
				email: '',
				showtime: false,
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
				value: ''

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
			registe(){
				this.$router.push('/home/selfhome')
			},
		},
		mounted() {




		}
	}
</script>

<style>
	.registepage {
		background-image: url(../../assets/headerbgi.jpg);
		background-size: cover;
	}
	.registeinput{
		margin-top: 30px;
		width: 100%;
	}
</style>
