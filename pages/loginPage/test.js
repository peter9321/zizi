import md5 from "@/utils/md5.js"
import util from '@/utils/util.js'
parameterSetting() {
	let data = {
			"phone": "",
			"password": "123456",
			"areaCode": "+86",
			"invitationCode": "158998523248617"
		},
		ksort = '',
		str = '',
		randomNumber = '';

	ksort = util.ksort(this, data) //参数字典排序

	for (let key in ksort) {
		str += key + ':' + ksort[key]
	}
	console.log(str)
	str = '{' + str + '}'
	randomNumber = parseInt(Math.random() * (str.length + 1), 10)
	console.log(randomNumber);
	str = str.substr(str.length / randomNumber)
	console.log(str)
	data.sign = md5.hex_md5(str) + randomNumber
	console.log(data.sign)
}
