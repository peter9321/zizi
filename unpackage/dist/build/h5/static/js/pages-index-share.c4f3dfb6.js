(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-share"],{"0372":function(e,t,n){var i=n("24fb"),a=n("1de5"),o=n("4336");t=i(!1);var r=a(o);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-52151be0]{background-color:#fdf2ff}.share-btn[data-v-52151be0]{position:fixed;right:%?20?%;bottom:%?140?%;width:%?108?%;height:%?108?%}.share-btn uni-image[data-v-52151be0]{width:100%;height:100%}.text-box[data-v-52151be0]{background-image:url('+r+");background-size:%?750?% %?307?%;width:%?750?%;height:%?308?%}.code-box[data-v-52151be0]{box-shadow:0 2px 4px 0 rgba(0,0,0,.15);border-radius:10px;padding:%?24?% %?16?%;background-color:#fff;width:%?710?%;margin:%?20?% auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.code-box .qr-box[data-v-52151be0], .code-box .address-box[data-v-52151be0]{width:%?670?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.code-box .qr-box .title[data-v-52151be0], .code-box .address-box .title[data-v-52151be0]{height:%?36?%;font-family:Times-Bold;font-size:%?36?%;color:#29292c;font-weight:700}.code-box .qr-box .link[data-v-52151be0], .code-box .address-box .link[data-v-52151be0]{height:%?36?%;font-size:%?28?%;color:#666;text-align:center;line-height:%?36?%}.code-box .qr-box uni-image[data-v-52151be0], .code-box .address-box uni-image[data-v-52151be0]{width:%?200?%;height:%?200?%;margin-top:%?20?%}.code-box .qr-box .btn[data-v-52151be0], .code-box .address-box .btn[data-v-52151be0]{margin:%?24?% 0;color:#fff;width:%?200?%;height:%?64?%;font-size:%?28?%;line-height:%?64?%;text-align:center;background-image:linear-gradient(113deg,#a700e1,#7285ff);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.3);border-radius:16px;display:flex;flex-direction:row;justify-content:center;align-items:center}.code-box .qr-box[data-v-52151be0]{border-bottom:%?2?% solid #f2f2f2}.code-box .address-box .title[data-v-52151be0]{margin:%?24?% 0}.rule-box[data-v-52151be0]{padding:0 %?20?% %?20?%;width:%?710?%;background-color:#fff;margin:%?20?% auto %?48?%;box-shadow:0 %?4?% %?8?% %?0?% rgba(0,0,0,.15);border-radius:%?20?%;display:flex;flex-direction:column}.rule-box .title[data-v-52151be0]{margin:%?20?% auto;font-weight:700}.rule-box .ruletext[data-v-52151be0]{font-size:%?28?%;color:#29292c;line-height:%?36?%;font-weight:500}body.?%PAGE?%[data-v-52151be0]{background-color:#fdf2ff}",""]),e.exports=t},"03c9":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"share-page"},[i("v-uni-view",{staticClass:"share-btn"},[i("v-uni-image",{attrs:{src:n("5d01"),mode:""}})],1),i("v-uni-view",{staticClass:"text-box"}),i("v-uni-view",{staticClass:"code-box"},[i("v-uni-view",{staticClass:"qr-box"},[i("v-uni-text",{staticClass:"title"},[e._v("Invitation Code")]),i("v-uni-text",{staticClass:"title",staticStyle:{"margin-top":"20rpx"}},[e._v(e._s(e.invitationCode))]),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyCode.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("Copy")])],1)],1),i("v-uni-view",{staticClass:"address-box"},[i("v-uni-text",{staticClass:"title"},[e._v("Share address")]),i("v-uni-text",{staticClass:"link"},[e._v(e._s(e.link))]),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyLink.apply(void 0,arguments)}}},[e._v("Copy Link")])],1)],1),i("v-uni-view",{staticClass:"rule-box"},[i("v-uni-text",{staticClass:"title"},[e._v("Rule")]),i("v-uni-text",{staticClass:"ruletext"},[e._v("After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  \nAfter completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can ..")])],1)],1)},o=[]},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"1ef6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{invitationCode:"",link:"https://dribbble.com/shots/16641974-OpenNFT"}},onLoad:function(){var e=uni.getStorageSync("userInfo");if(e){var t=JSON.parse(e);this.invitationCode=t.invitationCode}else uni.navigateTo({url:"/pages/loginPage/loginPage"})},onTabItemTap:function(e){var t=uni.getStorageSync("userInfo");if(t){var n=JSON.parse(t);this.invitationCode=n.invitationCode}else uni.navigateTo({url:"/pages/loginPage/loginPage"})},methods:{copyLink:function(){uni.setClipboardData({data:this.link,success:function(){uni.showToast({title:"Copy Success",duration:2e3,icon:"none"})}})},copyCode:function(){uni.setClipboardData({data:this.invitationCode,success:function(){uni.showToast({title:"Copy Success",duration:2e3,icon:"none"})}})}}};t.default=i},"2be3":function(e,t,n){"use strict";n.r(t);var i=n("03c9"),a=n("87e3");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("aed3");var r,d=n("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"52151be0",null,!1,i["a"],r);t["default"]=s.exports},4336:function(e,t,n){e.exports=n.p+"static/img/top_bg.8cded547.png"},"5d01":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAbKADAAQAAAABAAAAbAAAAAD529oeAAAPKUlEQVR4Ae1de5AUxRn/evbB7t3tsXeHKD4gFigm+LgTISKoiIkJyqPKKgHzMMEkEB4m0WjFwoqPRMkf8ZEUB8glQUsrpWBiRUETUgZJRTw8wNOAFU+DRiIagdtb7rm3ezud75vdOWa53dmZ2Zne2bvtqq2ZnX59/ftN9/Tj6/4YlJDjnLMN0yNnswE+WWbSZOAwGYBPxCKE8RfC/yFgEOJ0RccYdOGzLnzWhX/pF8Wnh/B/m8TlNu5lbStbaj9mjHEKXwqOuVnITVO5byAZmcYZn4PAz0FUp6O8lTbL3IMgtCCJOxlnO72e2r3L97OEzXnYlpzrCPvtjBO1sVhyMdacBcD5LCSpyrbSGkgIAenGqvkaB/ZCMODZ+t3m0RED0YQFcQVhVJMSyej1nMm3YE2ah2T5hSGgmxGLY83bzrj0lM8TftkNNa+ohG1u6DqtFxK3I0HL8PtUp4tdkT3xO9eO37+mCvA9dmtr6FixxCkKYRtnHD8r2cfuBEZEQUWxCm8lX+zI9AJnTZ4gf3hF85gjVtIoJI5QwjZe0TVW7ut/QObsVvc0e1bhY3GJ8c1ScNR9K14PHbWaitl4Qgjj93Np/Qsdy7HZW4tEURd8GDkWxeZyzaqFNZvY/Ux2umCOE7a+/gR2yxMbsOm7zOnCFDN9bCr3cfCuuK01vM9JORwjTBlD8chaWYY7sFZJThbCPWkzWZLgUS+rXeNUj9IRwjZNjYyPy3wLjqMudw+YAiVhbI9fYouX7689bHeutr/56xo6FiSS/K0RSxYxhC8qYUBYuJqwxksjDwFPvsCB19gtaKmlp2CAWCiY2Ci8LU3iq7O5951opAmFXGqjbMMmKQbsiSnh2mXX7GIDhRaqYMK2zuDBo7H2LdgLnF+oMMM5PvYit40N1C1e1Mz6CilnQYQ9Mbsj3B2Vt2OjPbMQIUZOXLa7KizNW7qrBpd5rDnLnQ6qWWWyzILOZxJmhJ3ZmGp4S4TRN4uawXLNUmE0c+UzCbutN3GPmVhqWEuEKR2M8jdLxdD0lb73R9+P/MZ0RIxgmjDqppZ7g1agzoxDGFrp8pvqdCgDQRxbZGZd/lcQAsyz8LbWmheNpmGYsMaGjgnA5VZ8M0b8oNgouEbC4Ritw+dh9UansQw1iTSRy0F+tkyWEQrMhSFMad6VMDYS0xBhAzjrPqLnBo0gWUgYnHtUMDaQRt4mkdazZBjYM3KWSAyg5kgQXJoB7+Wr3hq9Vy953RpGK8W0+FgmSw9Cu/xSWBPmeinqeqaW9Yf3SrEeOKL9aFWeMNfLN2eTSAozA73xNqxdw0wHA2BUNYP+TrdqZ7Oot8I/OZdiT84aluyL/2w4kkVv77UPVEHVGTmLrveCC/DjYdIsy5VRVqlJbxCr59JckUr9edVYCRZuqIbA6JwNTFGLSGqAxEE2IbISpih5ukZdOpvYhT+rOdcD89aFwBsoPC37U+D+FAdDUx5CGKlPk0bu0KDD78kZF/lg7i9xh5KleXOH8UAOFC5OyWYIYaTrjs1hSalPn1ImU38nzPLDtffZvYPJlAhZAxMHqX0Hmd4ZhKWmR0ZG7dLCcMH8AFzxIze+o3zZqVNWGYQlIXqD23eRaIG28/7SbwWh/hvu+qARF7QNS1vOTMJk+Ztaz5F2P/OOCjh/rku2pqXBV/bMaYgYJIx2PqY202l8R9gtbmpQxmjjZxiaOBeDDm5wVLhJ5zZIWHqbqrteLzGQZOTi8TGY+0gIxk5xS9eR+1PcpMQcJAxnNWxXK85AooT++IIM5q+rhvB4DTxFlf8kN4pESk8EN4AXVSYBmVfUMTjnch8EwvlnOII1EizYWA2Vp+UP67joyI3aW/RSZsrRCoJ36ztdyNCZEpx9mQ/qzvfAmPO8UDfJA8FaczWm+kwPzG+shue/0wnx7uJNFtNJCsQRYva6Qlj6HAynMXQ0fYZcnHGxFz53lR9/SNREpWgF5znmfC/c8KsQvLiyE5LxgpOznIDCkUoYHVpiOaUiRxz7BQ9cuCgA517th2DYXA0yKvpZU31w3S+q4C93daMektFYNodLcfQgw8EZa2xop2N93Dc/k6PMElaeiV/yw8VLAjDuEnFd8IN/iMGuh3pySOX4457VrXUhtn5a+zlygh92PDsbMvCMAqj/elAhqvI0Z2pTPjFbNvVCy+MFbUDJl0VOf8nHxnvpoK2cIVzkcd5X/HDFDysgNK6446Ppyyugt12Gg8/1C0eHuPKmTkUrVsOcv8w0gL3yzkoYVy+u6csn1dV3V0JfhMOhv4nthRBXEnY4XFnD6DtFM+g3PT3aVWQRmUxicN3aKjhrqj090XwvyKA/ciWh5umkwQcuuQmNk+DGzdVAM+g0v+dG5/EzpbtP4zxRjrjCd0U5HFJUnnnzmXitH5ZsGQ20Gux256/C2ZD11UCDdBGOuKKchJ5HqFewhlsCMPfhEIwKiQFATxajfpVj0go9NUJaAnxF0setGhXQqXBfXBmEmbeXzFAwA4bwBA9M+57lXbAZaen+Qa68eIAjnZVbVHflXRVwydcEFNihUh57dwD2NPY6lLomWeRKQmUP5UBjzWOht9QTLGWyOo8kYdvqTkgI4Iu4KurHYvINfqUnKPQNsTGzvg5ZmRTubRfXREnYa6Z5ROHu9Au9MOde1/R3TJc/0cdh+w+6IHpY3KQDcUWdDuGEkYr09Y+GgMYypejkJIcdP+mCzw4WfBKRueIjVxJ2OoQTRt+tYk3emkMoe+hXH+yB//yjCEfbKzUsZTEhu2QOPB3X4IXPL8Rp9xJ1b2zshX/9SfzEbxourGGKeQsx6JEO++x7Kl073ZQPhYN/jMHepuIsraRliyJhaItEkJuEi452Ld0LEnkwmw92xeHva4u2eJmWgx2ibxjushTjLr7ZXarQRkv96dsJ2HE32t0R1yHMLhoZ+SErP9l97X1Kuhcil/Ptkr7jw6TSfU8W7bN1siTElZdMMkHC+YHfBQvE1a7eiAyRD5IQw4FtfxeHeA8uTGDtoDU2j5fBpOtQYQf1DvO57qM4MF7V6Zr90MSVl+xnoRIONc6Ozrw6sdjHZa6MhY61JSHy7wGIHEpCO/5iUf0X8PSLvHkJi3fLsO22Tuj6tNjt4OBr1UNceXGBkDfWH2/BIl4z6GXzDe3ar51oz0IfDVqP7BvA5fl++GBnHPUr9MmxUpQktjgv3dEF7e8lrUR3JA5OMbQQV6k1bjR2hjMejhFGCp6Frhz/70AC3nm+Hz7E3lq+GlQIYqj2B6/8tBuO7BU8i5FPaOIInUIYWabDVv7n+eJY9acaZtUdbo7Dvt/1wSf7xQD42iO98P4Osco1RrAhjiicQhiZEUwk20l73JHZWF/APGHRw0l47WGxU0CtT/XB27+PGcFPaBhEr5s4okyVrpJiJwTNCDolhWeUOcLeeT4GzyyKCp2ve+/P/bD7MQGLWlZARm5UWy6pb5iSCMNTMflXraSXL07nx8Y+3tSh2PlAD7y7Teyg579vJOCVe7vzFaNo/mSPU818cDASCHjwlGy0+eiAoyX0fI666Dvu7hZO1rG2AXj5x10g5xcxXxEc8mdxMp6qJj5ImGJNFQ10qh52XnuOceg+ql/LqGNx6BVH3pecRen8JL28jwNr1zrkRGvpdpAwEpisqTol+D+fyf0xJ70I0RsM+qLp5f3jLiYrCycZhJHpWxwvoTVV+92BLTEgkLK5A8/FhE6sDsTSy/sfZZcnm4zFeEZcECfavDMIS/VEWJM2gF33CVxGojFONnccp5ZEOlox/uyAaz9aGihYk9o7VB9mEEYPyU4xKntkR1aNZfHatr0fXv91sdeUAGgG3u2OOCAuTpVzCGGKUWm0U3xqQLv+v/lkDJpR6ZLm61R3puhdIGrGbr4iB9kMfA8hjMpARqWd6uJT+vuxR/jskhPwyZspRZZLbg4CHclQdioCLJ7iQP1/8poTpfUNxzfi0Oj7J4M6czdhlg8mfdkPFbip4K84DqP1q5HucEvR46tax6zIhkNOwkQf0kwKOhV4jkbPMXf33LKBaO8zi4c006nO2K1cY68wuVPj2A8ok4UfIsQ814nahF7Wb5gKq2KuHS2Aq//LV2cRwJ7hPsJcLxddwtj9TGbctxJ5H+ntlB6GNvmlsCbM9RLUJYwiki0QMteul0jZr3AECON8dlcol7yEUSAvq12Djeseui87BxBAbBWMDSRtiDCaHvFLbDEZJzOQZjmICQQIU8L21CmoXEkYIowikwU5zqRv50qo/NwaAoSpUet8lINhwigw2WpkkrSW7suucAQISzP2LynHnANnPXEa69s3o5bVUr0wZT99BLApfGL1W3W36oca6muqhqnRp4Rrl+GYYZv6v3w1hwBhRxiai5UKbYmwa3axgbGBusVYQXdbyXRkx2G7CTvC0AoOlgijjBY1s76qsDSvTJoZ2NluwoywMxNLG9bSN0ybwNYZPHg01r4FNZzna5+X7zMRoGaQalYhZFGKlmuYKg4JMGV03Y30EVWfla+ZCBA2hFGhZFGqBdcwrWiNl0Ye4rIsbIZfm7db76nrvvrN2nvsks9WwkiodQ0dCxiXn8Ruf41dQpZiOjSDQYNis+OsfGW1nTDKsLGhYwIH+dkRa10d5wYZSEtWt9Z8lI8As/4Ff8OyZUiC+qXaqySJkW6I7nJBtvil+wytnWOZqexOkEW4OFLDtICvrz8xjaytYy/yMu3z4XaPvcB9tHZoZImkkLI7ThgJR+baU1bXOc5DDjdD3ixKy/rK6nyexcdCiFLjCiFMzYwUe8igN9a2pUhcidsqY3GJ8c1ScNR9ejoYatntugolTBWajEordorR9C2S50ZroaqoQ67Y9PUCKnmS3uCK5jFHhgRw+EFRCFPLRHaKU6ZviThepz5345U2JuAnv4nUp7Np5IqSuaiEqYUkY2Zk4TZJRlPR5qN7mkvc4Ij7szyS9LQHwi8ZXRVWy+XE1RWEaQtGBjrT9jgX4DhuFuoBV2n9nb5HQLpRfwX3e7MXaVeqdjOd03kbSd91hGmFppqnWA9kfA7WvDlI3nT0t/vEnh4EoQVr0k46WoF267uhJmlx0N67mjCtoHRPts42TI+cTVZ+UkZ+YDJOgU3CQoTRuwpJDSHwIezIKCeFYwcBj2DDX+rUVdp1jkpEeNwgnYqGB23R2U10HBB+n0pGof//PXohSEzXEtUAAAAASUVORK5CYII="},"6b7a":function(e,t,n){var i=n("0372");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("463f4681",i,!0,{sourceMap:!1,shadowMode:!1})},"87e3":function(e,t,n){"use strict";n.r(t);var i=n("1ef6"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},aed3:function(e,t,n){"use strict";var i=n("6b7a"),a=n.n(i);a.a}}]);