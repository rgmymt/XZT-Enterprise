<template>
	<div>
						<h1 style="color: #6d6d6d;text-align: center;font-size: 30px;">最新发布的培训视频</h1>
						<el-carousel type="card" height="350px" :autoplay="false" arrow="always" indicator-position="none" style="text-align: center;margin: 80px auto;">
							<el-carousel-item v-for="context in zhaopinghuilist" :key="context">
								<img :src="context.src">
								<div style="width: 60%;white-space: pre-wrap;margin: 0px auto;">{{context.des}}</div>
								<el-button style="border: 1px solid #409EFF;width: 200px;color: #409EFF;font-size: 17px;margin-top: 20px;" disabled>删 除</el-button>
							</el-carousel-item>
						</el-carousel>
		
					
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
					
					}
				}
	}
</script>

<style>

</style>
