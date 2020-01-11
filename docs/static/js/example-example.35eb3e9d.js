(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./example/Example.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/extends.js"),r=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("react"),A=t.n(o),c=t("./node_modules/_@mdx-js_react@1.5.1@@mdx-js/react/dist/index.es.js"),s=t("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),i=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/toConsumableArray.js"),u=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/_antd@3.25.0@antd/es/card/index.js"),d=t("./node_modules/_antd@3.25.0@antd/es/button/index.js"),g=t("./node_modules/_antd@3.25.0@antd/es/input/index.js"),m=t("./example/store.ts"),b=(t("./example/index.css"),t("./node_modules/_antd@3.25.0@antd/dist/antd.css"),function(e){});function p(){var e=Object(m.b)(),n=e.state.count,t=e.dispatch,a=Object(o.useCallback)((function(){return t({type:"add"})}),[]);return b("\u8ba1\u6570\u5668\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\ud83d\ude80"),A.a.createElement(l.a,{hoverable:!0,style:{marginBottom:24}},A.a.createElement("h1",null,"\u8ba1\u6570\u5668"),A.a.createElement("div",{className:"chunk"},A.a.createElement("div",{className:"chunk"},"store\u4e2d\u7684count\u73b0\u5728\u662f ",n),A.a.createElement(d.a,{onClick:a},"add")))}function B(){var e=Object(m.b)(),n=e.state.message,t=e.dispatch,a=Object(o.useState)(""),r=Object(u.a)(a,2);r[0],r[1];b("\u804a\u5929\u5ba4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\ud83d\udc90");return A.a.createElement(l.a,{hoverable:!0,style:{marginBottom:24}},A.a.createElement("h1",null,"\u804a\u5929\u5ba4"),"\u5f53\u524d\u6d88\u606f\u662f: ",n,A.a.createElement(g.a,{onChange:function(e){t({type:"chat",payload:e.target.value})},placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f"}))}function h(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1];return b=function(e){return a((function(n){return[e].concat(Object(i.a)(n))}))},A.a.createElement(l.a,{hoverable:!0},A.a.createElement("h1",null,"\u63a7\u5236\u53f0"),A.a.createElement("div",{className:"logs"},t.map((function(e,n){return A.a.createElement("p",{className:"log",key:n},e)}))))}var j=Object(m.a)((function(){return A.a.createElement("div",{className:"flex"},A.a.createElement("div",{className:"left"},A.a.createElement("div",{className:"count"},A.a.createElement(p,null)),A.a.createElement("div",{className:"chat"},A.a.createElement(B,null))),A.a.createElement("div",{className:"right"},A.a.createElement(h,null)))}));t.d(n,"default",(function(){return E}));var O={},f="wrapper";function E(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(f,Object(a.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)("p",null,"\u7531\u4e8e Context \u7684\u7279\u6027\uff0c\u5728\u4e0b\u9762\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u9700\u8981\u624b\u52a8\u7528 useMemo \u8fdb\u884c\u4f18\u5316\u3002"),Object(c.b)("p",null,"\u8be6\u89c1 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/context.html#contextprovider"}),"https://zh-hans.reactjs.org/docs/context.html#contextprovider"),"  "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5f53 Provider \u7684 value \u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5b83\u5185\u90e8\u7684\u6240\u6709\u6d88\u8d39\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002Provider \u53ca\u5176\u5185\u90e8 consumer \u7ec4\u4ef6\u90fd\u4e0d\u53d7\u5236\u4e8e shouldComponentUpdate \u51fd\u6570\uff0c\u56e0\u6b64\u5f53 consumer \u7ec4\u4ef6\u5728\u5176\u7956\u5148\u7ec4\u4ef6\u9000\u51fa\u66f4\u65b0\u7684\u60c5\u51b5\u4e0b\u4e5f\u80fd\u66f4\u65b0")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useState, useCallback } from 'react';\nimport { Card, Button, Input } from 'antd';\nimport { connect, useStore } from './store';\nimport './index.css';\nimport 'antd/dist/antd.css';\n\nlet addLogHack = (val: string) => {};\n\nfunction Count() {\n  const {\n    state: { count },\n    dispatch,\n  } = useStore();\n  // \u540c\u6b65\u7684add\n  const add = useCallback(() => dispatch({ type: 'add' }), []);\n\n  addLogHack('\u8ba1\u6570\u5668\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\ud83d\ude80');\n\n  return (\n    <Card hoverable style={{ marginBottom: 24 }}>\n      <h1>\u8ba1\u6570\u5668</h1>\n      <div className=\"chunk\">\n        <div className=\"chunk\">store\u4e2d\u7684count\u73b0\u5728\u662f {count}</div>\n        <Button onClick={add}>add</Button>\n      </div>\n    </Card>\n  );\n}\n\nfunction Chat() {\n  const {\n    state: { message },\n    dispatch,\n  } = useStore();\n  const [value, setValue] = useState('');\n\n  addLogHack('\u804a\u5929\u5ba4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\ud83d\udc90');\n\n  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    dispatch({\n      type: 'chat',\n      payload: e.target.value,\n    });\n  };\n\n  return (\n    <Card hoverable style={{ marginBottom: 24 }}>\n      <h1>\u804a\u5929\u5ba4</h1>\n      \u5f53\u524d\u6d88\u606f\u662f: {message}\n      <Input onChange={onChange} placeholder=\"\u8bf7\u8f93\u5165\u6d88\u606f\" />\n    </Card>\n  );\n}\n\nfunction Logger() {\n  const [logs, setLogs] = useState<string[]>([]);\n  addLogHack = (log: string) => setLogs(prevLogs => [log, ...prevLogs]);\n  return (\n    <Card hoverable>\n      <h1>\u63a7\u5236\u53f0</h1>\n      <div className=\"logs\">\n        {logs.map((log, idx) => (\n          <p className=\"log\" key={idx}>\n            {log}\n          </p>\n        ))}\n      </div>\n    </Card>\n  );\n}\n\nexport default connect(() => {\n  return (\n    <div className=\"flex\">\n      <div className=\"left\">\n        <div className=\"count\">\n          <Count />\n        </div>\n        <div className=\"chat\">\n          <Chat />\n        </div>\n      </div>\n      <div className=\"right\">\n        <Logger />\n      </div>\n    </div>\n  );\n});\n")),Object(c.b)("h3",{id:"\u6548\u679c"},"\u6548\u679c"),Object(c.b)(s.c,{__position:0,__code:"<Example />",__scope:{props:this?this.props:t,Playground:s.c,Example:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYzywb0yW6I1ZXaD0fxIyRCOI30VVQPD1XYQNJXQ8jTUVMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBneSABZVPYAA2VT1PWMBgIAMW9aBEnk_hnEOBEHUwGChH4JYiGoSg4C0hEzOrCyaGcCAsMudgAEY9I0-RuN4qYAEE5jE9gIyg8gbCgdAw1QjkxLEVLoxkdgUREmBuGAbChLKuB5C3GtgAy6BsuCAAyVrxkSeZKGaJqspy7hBrlMBkMlAZUHadgAH4NmasMIzyq4-pa1BYurKQZCrN8zBhZjMDAMIoCmBb8sK9akuXasE1YggcEszIUivAh6prWtaN_dhNxXKQbruh6nvqqQLq2swvxAKjYBoojfxwAg4CwQDdBAgwwKY-0bqWKC8hgISsiWbH7HiKAPAlXY0LIk1NVwiCJIcVwBEWdhr3CCJUCWBpUBmcJUPYuV3AIdBqfw2ndGdSV8bgHGIi6HmKYoyQUSFGAheY-XVGwD44DgFX7Xafn0B3FFJH1zXtYYsxYCmbSABlKBSAAJUmUojVh4iuFFpxSPLuAK4B5HN1ARp47tzEcZCCBOyTq3iiSVxRLIrnStpMyUFcWF86IMo0iw0PE7GhKVhaGIsR52EAGBVAFNrQAQt209YY-0lKCaJkmdgjE6feOWwtIIDK0s6-Z5O0yb5A5JYAG0AF0P24iwbbtx3W_aQBC6MAB1NAAs1QARv0AN7lAFnEwAG00AJjtAGXzQBeDcAAL3XwDiwugIPpzCjK7V3pnJhlYDJXA8WASuE2AKqg6TZLXhEBEIgVwABMelUJ1RXAmPAEUxCrzXhWeBMDazFXIHBLWAA5b05V-AZWQtscQqCEzoMwXAHBR4-A6DwIQ8QisuiAFo5KuVBw6AAbnQAFOqAHozCSrCaDyA2rGEhtZmY3GZNQewUBYjbAqtpOq2kpCiNZi9GsgjZDfUkITBm9Vp6rW4kHMazJ7CTEjnXagfEo6vXjrQRO7Ajxa1cGkVC2cazp27lndYudciSwLl0IuZjUB8THq7KADIliSwIAANXiAyCejcfEECyI-S-M8Qidltg7Umj5ABSAYASk1AAl2tvfex8T6AASdlJ_po7mIOKgYx7gnHiQjOFX6dSZwwDPG_GgjB7aWD1NbDmXNzyXn0GIb2vs05d0zngNKqDhIDzlBlaIAVXoWC0iJSgHYrh_kSTJUcOAQkMhXCPTxqSb53zOq9RgWiX6UDfpkT-3RSq_2AP_emgDgGRHAZA-Q0DH6wPgXk_JyCVEWEAMr6gBZJUABG2gB7Ay4YnexFQ0hrRWaogZ3MJF-DaRVDF9SYBoTJBKGAwwsoZGoYAd-jADJ8YAU0UYX8E-ioqQ1ydEMTWmYAxId2AZLSAIUxVTAlTDHlAO2cBwmjgyXAOJecElZEYB7Aok8GyT10bPdJ88naNKFSkd2qIChjJKmK4VEZ-wwFYOK06gq7ZLBwNa41prhVT2LhOUc5yH6XOub4W578HkgtrHAsQgBy40AGxKgAH5WBagmMHAMH-Aobg6hmq4DEL-Q1eNOAogzDbpqpYXAsB6tdSi1RMwejkMoXgkAmq6XbBgIkCq2bfn5pWcATVyL621kkJdetHIOTNsuTudRj9GXP2ZWYVlzosDC32odKYostgR3buM6sZyBD32-mQ6NJbqFgFgFgRNKKI1FrXbG_gsAwCiBAD60hbB93YMPUBcOO6W1XOTlML6SbtybWEXuqN16qH4MmPe-tVzJj0o_b2n1aiwOru_aW_oKRCD_pWYwLlGRgNJvAxo991ZdEjwYmDCGMAFbS22VoCgwF9CGEkN_JW_4E2MRpmgF4vjSJugoh6OAAhyB-jMDHEYrhxyNJiEeK4qBQhEECAIPVzoxjQRlNSCMXQ4CUCgG_U6ETLD8hgPsOT8BFNvyWAJmAnaA67XtDHJOqAxYEAllLJWPNxL0YIIxmZ1ZS6AFwlQA05qADanQAgAbrFPBzBjiSbGpVzZYmsfCCBXAUi4iwCLHHhXaPbecQrlk1njVcSeIRCQ6pnJPFxI8XGl0roAWZNAA68uwQAo_qAG8MwAK_GAD21axMAq6AHejQAuLGAB4FKS4RojjXuLHR-pdACitq1hrK5tIRga3lULr1F3mB1B4dQM6cDRogCkVAaUlDfzxiLJ92qsgfCfewAA1JFXKjqc7RY2NEcbgWYCeXgIi8KcqZyTdQTNvr9brU4Aaxd16sW0g_dQmd5xK5NXXa22soVmzv6exe0mt7U2Vmfe-8ItL7Ax4Q42YzJHN2cDxongD_2Ry8sFYo4AIH0K6lcADD_gBTo0AJDmbiplV0AOZGgAZCMAMLm6wzQ9cTqNuAiQeKZf5-QBKnY-4M57ngcJN2linloAIOwG2Mcdlhyi1wPHxzq4jhFBSOvlUrPF73KCcz4tD1O6g0udWq5tcAFjygBqiMAKDKgBPiKrv2SI1InUKaU4yOHzql3jDRDAIHqdqzB5LhRpegB070AHo6gByA3YIATgtAB2xg1wAM4lW8ABVKXnI_rFLhwwArhmACN0xhSeGttaroADeVABoyoAGADM9V986OOXvWEfhdgnkHUzowe0BVyst7DX9vhyO5FIPxPh26Nw9Dai6tcBnGI0BPQoEQA4E3dgd7ndfJwTsoaLdLLuK45gCetfbjN9XBX1gR1Z_LQQC6IYuShZQlEFQI6zYK3CBXAAOwKVYHgC_W7zQk3yF6wAFYFIABSR1ABNAc0GDN_SKMBVSXfSpffQ_AfTMULS_AA2wK4JMPSb_CAt5KArwMRUBdgMBb_YdPfY9KYVA6gkYTIGYDSZA6g8LdgJbGgc0OIBmNfF_WDCLSKHXcAqSAg1Af_D5EgiKeA8_CgpAqg1gxZSCcyP_TA3rHAvA6QswJguQoDHAOg2YRg2Qj4bQ_mDg5-bgmAV_Pg7XMAxAjQmAhQwKLdK4CKZ_cw3gj_L_H_dQ1AUMCw1g3Qhg2w3wtgi0TgnIULHg2AqwwQvRJAuw1g4w0ItfT1AQTdUYc0LfMICIGw7wxI0LSAkQogkBbAkyKQmIjQzVNffI0Q4gpwyQxAsGNjcgSQafWGeGRGUjRfNGDUM0XmeUM0HWKYYYWwBzQLWIOwOWIYlEc0VAagaAzUc0axMYgYvsAcSwLqeAXo13GYc0Y3M2W0ZiULBoXGWgFxBoAAcUbwyBFXBFtg7AKD1D0PBB1BmBDmuOrAaEcHMxnVOK1EmQlwShkjeIsAaF-Izgl1OM-NoCwEs3BD1C61eOiVCVu2HV6I9F2M4x4mqVpmxjFHQFCARAECs0hOwEs28RgD1BgC8lsxYk1AYlLlNCwCuEAGwlQAL71AAAOUACo5QAeB1ABo9SrgYW92MymAnVCCOkNFGg5Xs0Y0YHWGOO6BJLoHQDsD9hcThNGPMQAGkq1oRoTFSstPYXELibgritTkgFSMB9SCgXEEpb84BTSdSQIlTocCgzAGxKAXiesporgGhnjXjGA5Slg1TutNSq0lgjSm9TSlgbTXjTTRk19TMVw_NGIRishnY9VkJ9o0BsgLsiB4SesUo_ZMsaSqAGZGAgyYzQzGhyyetESGR_SbsxAxALsudzErhMgRhoz8zxIVTEzLj5c2y1dwyriCy0J_BGghz5d6ytsJy7Sq0mzPEUp3TXj2AAAfFciSQnSpGLCALANAas8xCMXM9UwJXRAJPiLoPEgk52BrK4AMkIW_b00E9xPAAElIOAMsvMkMxIOMjuFvLEo3dY0keCSHHILxFsp_FcGOI84M8wcSaC14seY3CeIHUuQACldAA4uUAAB9QAReVAB650AGCNQAN9NAAF40AC5PQAH6NABMxUAExUwAe-jKdAB75UAFO5QAWDkl4qVABpW0AFXowAMMjAA1t0AHDnFcYwTgeOVADwUUzgVbGzCAZoHkFcWS1KY3HqOxT88wAAQiGnaHZXGlfDX1emNzPAECEB5WNz1xzhXDe3gvGi71uz7GAsxz103IsBjmJOhJSl-nIFNFoDcoIBlMfg-NI2hMYCOJuynJOPYE7K_KbPYH3MCUjPYBnISqivirnPWAbGEwXEdRjmk1uS4GQ0aS2N6yRD1T_P5RFkyhWmpKKqBxjjHm-3X2fMlTJNxPxMjAvLasJNyHDEgGdEZiTICyyHMs-nDwjzZMACijT4QZbISCrEqa8IbIGc-JckykygNuPVezCc8KuypKucuTQcvskVTbbvceVBZHR-B1YSijQASujwK4BWdwVAA4FUAE5TcvECl0x-euW05aikryda06ezFKuAfajs20pYA3PAUeNHS6z6rEiGlKn61avNV6OdTgZMp8qZFKiMCGpYO6qXLbea2gdAGc0eVBMePGwsAUBa4mw6_G2gfHFcYa0ueG2_QAQptABVm0AC0FQABiVABUfVQsAF35QAQGMWLy92BAABIyYsACBjbmiGwAKDkrr2BABN-MAHYLVCwAdiNAB_eVQuxjPDADABnXGohpK0AC45QAXPlAA1WPYEAEYdFi63QAAgTAAEI0AAPTQABTTAAXsz3lmvKvzDwAxv-IfMaH9oyg_OPNnMSCjNtNjJSghqLKRCB19uDpfNvyW1vxjr-IyhSqvhrFLh3kAF8VQAWBUGt2AMLAAufUDUAArjQAWtNABvHx5O9vPOyE6rlO9LlO2sjorO_JSmLrHPjsVsAE2_d6mcB4mYQAAqU5a2TABsuVmAgAbqmDoExQRHQDlJSgXvcARFuJ0hSBHvbsiqjr2o6oJLlOGre2RtUV8pwFytYHyoEGEQOXKheWEQsBvOhFQEXuyADKfsaqmSuETozuTpDgB1ellyuKWkdGppnKAagVQXPV4UqrDG7VUU0SCtuivpvpUScuzrQanBwC2LWPmDsG7MgvgboCuDwfWLgBwHnEpOPFsDFAAEdQhr9szPFs6Y5p1JRvTPiLMUo1xqAXRfy572AAB1eg4R3EbBgq1KIqq4Eq06M-hMSRgQWBx9dMF0YAT7IqtCF9XdSQJRjB7OsPdgce4_eCEtRW1rQATXSvNY9LLfdzA3kRN9BITeNnQeVRHZhxGJglGlg-GMwCBMHUkY585CM0zToCYUGIxfK9d4dCwvjxYyTGNAcvDXL7YEosEzizwAB9a2HUBKLUBoDJlKdoAAARKcWTaU3oKDlL9FLlHqpVeqHpSG8yrkAE7TdmtlCU8aOxHcvctS4G6y8xHvN7ObBbSUJbLWFbNbQZwJTGFcMeewNJjJ7J3J_Jwps4ieWyoC9ZZXfSsLf8-8kOBK2wKpmcaqhyjsIHFyg5ppke6khrK5uJviSTU57e2YAs4RT7W5x419NHcC00ieK4E5zHK01BZy3vexvZ16bHPGFHEF4e2YITGAEYV5kegnEfTxLDbiUuQALATABx-MAABzPefkm7cakBgQSPQAL8VABTc06eDm6c2r7N3t2rNN1ItOdJnAbHWHbJnO9JnOZcOtjJcRfs_vfHjKxPJcIY3KLPOMOoFeNPl1jOyqxJ5b7NNKldGcW0rUSGBtVYVbgBiYOoVfVeXyFDPAlGmT1bl3tMEdhvKqtakYdflzHidYBdqpVfgFFKmHEiddsuGslZdaNetarWavky9cdWw25chcleyNLkAGqlIWwAfOVaca5b92n2AOFwKHrHr3bnqmnvM6W07AbbSQagbwb_6e92HMU0hXnnZ_nKzgW7jnt8oJkwTDdZl1irhFn0nMmcm8mCmMmAcld0AedfnG2t6oH62I6wWLtI2-U-I7qRzlX7W1cUr1WUpNXxntXdXV3bTDXQajmq1KGLIBBzXe52y13tTbXXo7rA2D3xoAWUp_AhdUpPtwLXyDXToEcXLq2YBXnS3b8ErUQGRhrrn7XPWxTxI1deMpgL3bS73L3EhNm33b8P3QPLtKn4WUgAPD2I7DR4hJZ0O3sw2jog8I3TyF1IW7rY2KNY67q092mzALdatXciBqRC3JT0b_6sacbDmes6a7LJXhnIW-5jdtmQLcoW3H5JM3I3dJY255MdM7KugxmAmv3UFFKIxlLmhb2kKxItKdLqA9Lv2axdP1jNmoJeOGrJXnF7Kdn0AORYZNg1tFOvd0O0J5xJYoWaxDLjKhQtP1j3OjksXKlDPzA16eI_2sOd67ygb7TzSnSnsUguXqwX7QqZVYv97vyNIORW6wrMvO750LBNOJs9nNP1L-9vmZge8rEccquRy47UBEgjkhGoJ6uvEHmQdovZg2DkhxJt31Ok0BvxIATMhEgcBbBRv4IIxt28oZoBv0tt3kLXtIXt2vtIgYAZur2Cp1L1Kqux5tWYbXpwXr5IXOuQ8vCwv-52k_PTLAu18JghAxgZOjKTKIxigMgTK-PmRjdEAAASYAY3eQYoELjj7p08J8zfEtCMDxuYbIPx_QYT2-P3WH-YdABHmgHAUxxIEtVc9c1H-Hx0fhzH1AXBPHuUAn9Hon_xv0EdK7xxp6FxrMnlJntxpYSnjHtT0LUufu7eQAPI1R7sfzHqxWeMgseu4oeyfxJihHMAeIeJezHcEYf6C0fOeu0ORihHVS4BeHdHdt4q5-b1hReBAcAOfqeBGRGVfCe1GaBHU3tJiUyYgzgongJXGMh2ereqebeAn6ilAQBGjJBdjmjwxcA4Z2iF8UZwJhYjAiybpejOIXwjMx1mI0A5cDpnIGg4q4BayYBtqivUoRXpc7OQLZGmvcv2A5TsihS0a0_CVxzDqc-8-19bLbybty--6yjR1hZjdGg26Cuet4u2XEvstkuUoV6OpQsqvvTUXZhGA4u5yWUk_u_1jGgZ-Zg5-suHS9SOXR_xIxQSz0AN_O6lgvBFNxRUACoJ_OcmurgtudWrh5_kh1zH-lVTpT_yQILVoA5U-Mh0_ugGgUqvlfyhYFFYWAs-kZdYCyy37ssku1pTfgl0tIzhXSa-QvlkEdSSsrg-_IUIfxZbswZyjfOUo2UdQQ1Hy_9UOjBXDod0B-C_LwtXx74ADbSvpcaMAIr7S51g4A7UggJ36GlBWnAofogJSBwDO60A4fp7GQF78tg2AlgY_xcRn0kYJJb0oAJQa70OBeHXAXvUK4XZh2pfadphlOi5U2OksRgEiCrBiAl-KfPQCkTr4-kPS5iFgaANir9NB-jpAQTwP1bODt-sA9YI_xEECDkBoWAao73Cio1K-nWMOpgMkGllVB7MLPgQIbJmCG8-rPlnKzvIssEh1YO6ooMYG2DUAKgpwZWXUGP90hI6avj_ysEZ9uGM6ZvpzwiFmgcAnPfBrnxMHl9folkewFX2T72gyhf_IOtx0BLkDCuD3Tto4LDqmlHUw7L0iECa4dDhY3Q6wUnRSofsj-1AruqFl-4aCVh4wi5ugEmEd8ShnQqYPQKToDCVhVA6Kh5U1A4BjhIJPoW-ROHRVL-a-cCrfzeS9YbhbbABuNCWFFC9UBg6kMYKa7FDzB9oegfy1SG8DWWLgnfgVAkEH9GA6g2VvqziFZAiB3EUoZYJ6GBU9AwVWUmwOrDRDIBEI3wdwO8HwD-BO_fwesBIG9CPh9w1KnhyKGOo0uffIvoyMSFN5kh-reVhGRoExEwYfkbYHFmozUBw-yMBgKFn4Ck8jw_AK4PgiLB_BSw5oPDB5HWD8A7k-QagDKPYD8AFIOAXUQpBVHVh-A5QLyhAByFaj-ACUEqHhC_h4ZjgMAMkJQESC5g8gBQJ1GaA4LyjiQoIEAC4n4BRA0AFolQCH2oyGiLAxoh0YqXhAQB4AWohHPwAT5BiAAehFCMg4AIoEUPUWGJrD8B9YyYpMDgDARAEsxvolcPwAd7TFZiCfBYqMTOD5icABYg0aWMfj8AtiOxChsmIijFj38hY7MeGMEDzErQnYtMRmJLEnJVoDRBUTPmoCQAUgwo1AKKLIxgRJIIAWgD6CyAyj8E3lGAHMQ9GzAZg_AeQAoB-RAA",mdxType:"Playground"},Object(c.b)(j,{mdxType:"Example"})),Object(c.b)("h3",{id:"\u4f18\u5316\u65b9\u6848"},"\u4f18\u5316\u65b9\u6848"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function Chat() {\n  const {\n    state: { message },\n    dispatch,\n  } = useStore();\n\n  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    dispatch({\n      type: 'chat',\n      payload: e.target.value,\n    });\n  };\n\n  return React.useMemo(\n    () => {\n      addLogHack('\u804a\u5929\u5ba4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\ud83d\udc90');\n      return (\n        <Card hoverable style={{ marginBottom: 24 }}>\n          <h1>\u804a\u5929\u5ba4</h1>\n          \u5f53\u524d\u6d88\u606f\u662f: {message}\n          <Input onChange={onChange} placeholder=\"\u8bf7\u8f93\u5165\u6d88\u606f\" />\n        </Card>\n      )\n    },\n    [message],\n  )\n}\n")),Object(c.b)("p",null,"\u6ce8\u610f\u8fd9\u79cd\u4f18\u5316\u4e0b\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"Chat"),"\u7ec4\u4ef6\u8fd8\u4f1a\u91cd\u65b0\u8fd0\u884c\uff0c\u4f46\u662freturn\u7684jsx\u5728",Object(c.b)("inlineCode",{parentName:"p"},"message"),"\u4e0d\u53d1\u751f\u6539\u53d8\u7684\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u6539\u53d8\uff0c\u6240\u4ee5\u4e5f\u4e0d\u4f1a\u6709\u8017\u8d39\u6027\u80fd\u7684reconciler\u6d41\u7a0b\u4e86\u3002"))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"example/Example.mdx"}}),E.isMDXComponent=!0},"./example/index.css":function(e,n,t){},"./example/store.ts":function(e,n,t){"use strict";var a=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/regenerator/index.js"),r=t.n(a),o=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/asyncToGenerator.js"),A=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/toConsumableArray.js"),c=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/defineProperty.js"),s=t("./node_modules/_@babel_runtime@7.7.1@@babel/runtime/helpers/esm/slicedToArray.js"),i=t("react"),u=t.n(i),l=t("./node_modules/_hoist-non-react-statics@3.3.0@hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),d=t.n(l);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=u.a.useReducer,p=u.a.useContext,B=u.a.useMemo;function h(e){var n=e||{},t=n.getInitState,a=void 0===t?function(){}:t,A=n.mutations,i=void 0===A?{}:A,l=n.actions,g=void 0===l?{}:l,h=n.getters,f=void 0===h?{}:h;!function(e){Object.assign(e,Object(c.a)({},j,(function(e,n){var t=n.actionKey,a=n.isLoading,r=m({},e.loadingMap,Object(c.a)({},t,a));return m({},e,{loadingMap:r})})))}(i);var E=function(e,n){var t=n.type,a=n.payload,r=i[t];return"function"!==typeof r&&O(t),r(e,a)},C=u.a.createContext(null),y=function(e){var n=e.children,t=b(E,void 0,a),A=Object(s.a)(t,2),c=A[0],i=A[1],l=B((function(){return function(e,n){var t={};return Object.keys(e).forEach((function(a){var r=(0,e[a])(n);t[a]=r})),t}(f,c)}),[c]),d=B((function(){return function(e,n){var t=function(e,t){return n({type:j,payload:{isLoading:t,actionKey:e}})},a={};return Object.keys(e).forEach((function(n){a[n]=Object(o.a)(r.a.mark((function a(){var o,A=arguments;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(n,!0),a.next=3,e[n].apply(e,A);case 3:return o=a.sent,t(n,!1),a.abrupt("return",o);case 6:case"end":return a.stop()}}),a)})))})),a}(g,i)}),[]),m=B((function(){return function(e,n,t,a){return function(r){var o=r.type,A=r.payload;return new Promise((function(r,c){"function"===typeof n[o]?n[o]({dispatch:e,state:t,getters:a},A).then(r):O(o)}))}}(i,d,c,l)}),[d,l,c]),p=i;p.action=m;var h=function(e){if(e){e.loadingMap||(e.loadingMap={});var n=e.loadingMap;return n.any=function(e){return(e=Array.isArray(e)?e:[e]).some((function(e){return!!n[e]}))},e}}(c);return u.a.createElement(C.Provider,{value:{state:h,dispatch:p,getters:l}},n)};return{connect:function(e){var n,t;return(n=function(n){return u.a.createElement(y,null,u.a.createElement(e,n))}).displayName="Store(".concat(function(e){return e.displayName||e.name||"WrappedComponent"}(t=e),")"),n.WrappedComponent=t,d()(n,t)},useStore:function(){return p(C)}}}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initStore",filename:"src/index.tsx"}});var j="@@changeLoadingState";function O(e){throw new Error("error action type:".concat(e))}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return v}));var C,y=function(e){return new Promise((function(n){return setTimeout(n,e)}))},x=h({getInitState:function(){return{count:0,message:"Hello",logs:[]}},mutations:{add:function(e){return Object.assign({},e,{count:e.count+1})},chat:function(e,n){return E({},e,{message:n})},log:function(e,n){return E({},e,{logs:[n].concat(Object(A.a)(e.logs))})}},actions:{asyncAdd:(C=Object(o.a)(r.a.mark((function e(n,t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,n.state,n.getters,e.next=3,y(1e3);case 3:return a({type:"add"}),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)}))),function(e,n){return C.apply(this,arguments)})},getters:{countPlusOne:function(e){return e.count+1}}}),w=x.connect,v=x.useStore;"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStore",filename:"example/store.ts"}}),"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"connect",filename:"example/store.ts"}})}}]);