window.__require=function t(o,n,e){function i(s,c){if(!n[s]){if(!o[s]){var l=s.split("/");if(l=l[l.length-1],!o[l]){var u="function"==typeof __require&&__require;if(!c&&u)return u(l,!0);if(r)return r(l,!0);throw new Error("Cannot find module '"+s+"'")}s=l}var d=n[s]={exports:{}};o[s][0].call(d.exports,function(t){return i(o[s][1][t]||t)},d,d.exports,t,o,n,e)}return n[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<e.length;s++)i(e[s]);return i}({Bingo:[function(t,o,n){"use strict";cc._RF.push(o,"57beeXoIUxGOZgHIroY5xdZ","Bingo");var e,i=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])})(t,o)},function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),r=this&&this.__decorate||function(t,o,n,e){var i,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,n,e);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,n,s):i(o,n))||s);return r>3&&s&&Object.defineProperty(o,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("./sound"),c=cc._decorator,l=c.ccclass,u=c.property,d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.box_B1=null,o.b1_Prefab=null,o.box_B2=null,o.b2_Prefab=null,o.box_B3=null,o.b3_Prefab=null,o.box_B4=null,o.b4_Prefab=null,o.box_B5=null,o.b5_Prefab=null,o.box_I1=null,o.i1_Prefab=null,o.box_I2=null,o.i2_Prefab=null,o.box_I3=null,o.i3_Prefab=null,o.box_I4=null,o.i4_Prefab=null,o.box_I5=null,o.i5_Prefab=null,o.box_N1=null,o.n1_Prefab=null,o.box_N2=null,o.n2_Prefab=null,o.box_N3=null,o.n3_Prefab=null,o.box_N4=null,o.n4_Prefab=null,o.box_N5=null,o.n5_Prefab=null,o.box_G1=null,o.g1_Prefab=null,o.box_G2=null,o.g2_Prefab=null,o.box_G3=null,o.g3_Prefab=null,o.box_G4=null,o.g4_Prefab=null,o.box_G5=null,o.g5_Prefab=null,o.box_O1=null,o.o1_Prefab=null,o.box_O2=null,o.o2_Prefab=null,o.box_O3=null,o.o3_Prefab=null,o.box_O4=null,o.o4_Prefab=null,o.box_O5=null,o.o5_Prefab=null,o.box_TimePlayGame=null,o.box_Result=null,o.box_ResultLetter=null,o.box_ShowResult=null,o.musicSlider=null,o.soundSlider=null,o.winAnimation=null,o.coin_Pre=null,o.background_music=null,o.setting=null,o.timeStart=5,o.listResult=[],o.num1=[],o.listWin=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],o.musicSound=[],o.sfxSound=[],o}return i(o,t),o.prototype.onLoad=function(){this.PlaySFX("startsound"),this.PlayMusic("musicsound")},o.prototype.start=function(){var t=this;this.timeToPlayGame(),this.randomNumberBingoBoard(),this.box_B1.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[0])){t.b1_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(655.484,1089.522),t.b1_Prefab=o,t.listWin[0][0]=1,t.gameWin()}}),this.box_B2.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[1])){t.b2_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(655.484,931.852),t.b2_Prefab=o,t.listWin[1][0]=1,t.gameWin()}}),this.box_B3.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[2])){t.b3_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(655.484,772.657),t.b3_Prefab=o,t.listWin[2][0]=1,t.gameWin()}}),this.box_B4.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[3])){t.b4_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(655.484,613.626),t.b4_Prefab=o,t.listWin[3][0]=1,t.gameWin()}}),this.box_B5.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[4])){t.b5_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(655.484,456.235),t.b5_Prefab=o,t.listWin[4][0]=1,t.gameWin()}}),this.box_I1.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[5])){t.i1_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(809.484,1087.522),t.i1_Prefab=o,t.listWin[0][1]=1,t.gameWin()}}),this.box_I2.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[6])){t.i2_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(809.484,929.852),t.i2_Prefab=o,t.listWin[1][1]=1,t.gameWin()}}),this.box_I3.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[7])){t.i3_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(809.484,773.657),t.i3_Prefab=o,t.listWin[2][1]=1,t.gameWin()}}),this.box_I4.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[8])){t.i4_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(809.484,613.626),t.i4_Prefab=o,t.listWin[3][1]=1,t.gameWin()}}),this.box_I5.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[9])){t.i5_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(809.484,454.235),t.i5_Prefab=o,t.listWin[4][1]=1,t.gameWin()}}),this.box_N1.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[10])){t.n1_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(965.484,1085.522),t.n1_Prefab=o,t.listWin[0][2]=1,t.gameWin()}}),this.box_N2.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[11])){t.n2_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(965.484,933.852),t.n2_Prefab=o,t.listWin[1][2]=1,t.gameWin()}}),this.box_N3.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[12])){t.n3_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(965.484,771.657),t.n3_Prefab=o,t.listWin[2][2]=1,t.gameWin()}}),this.box_N4.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[13])){t.n4_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(965.484,611.626),t.n4_Prefab=o,t.listWin[3][2]=1,t.gameWin()}}),this.box_N5.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[14])){t.n5_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(965.484,454.235),t.n5_Prefab=o,t.listWin[4][2]=1,t.gameWin()}}),this.box_G1.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[15])){t.g1_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1122.764,1086.522),t.g1_Prefab=o,t.listWin[0][3]=1,t.gameWin()}}),this.box_G2.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[16])){t.g2_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1122.764,934.852),t.g2_Prefab=o,t.listWin[1][3]=1,t.gameWin()}}),this.box_G3.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[17])){t.g3_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1122.764,772.657),t.g3_Prefab=o,t.listWin[2][3]=1,t.gameWin()}}),this.box_G4.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[18])){t.g4_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1122.764,614.524),t.g4_Prefab=o,t.listWin[3][3]=1,t.gameWin()}}),this.box_G5.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[19])){t.g5_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1122.764,457.133),t.g5_Prefab=o,t.listWin[4][3]=1,t.gameWin()}}),this.box_O1.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[20])){t.o1_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1275.484,1087.522),t.o1_Prefab=o,t.listWin[0][4]=1,t.gameWin()}}),this.box_O2.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[21])){t.o2_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1275.484,935.852),t.o2_Prefab=o,t.listWin[1][4]=1,t.gameWin()}}),this.box_O3.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[22])){t.o3_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1275.484,773.657),t.o3_Prefab=o,t.listWin[2][4]=1,t.gameWin()}}),this.box_O4.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[23])){t.o4_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1275.484,613.626),t.o4_Prefab=o,t.listWin[3][4]=1,t.gameWin()}}),this.box_O5.node.on(cc.Node.EventType.TOUCH_START,function(){if(t.PlaySFX("soundnumber"),-1!=t.listResult.indexOf(t.num1[24])){t.o5_Prefab.destroy();var o=cc.instantiate(t.coin_Pre);t.node.addChild(o),o.setPosition(1275.484,456.235),t.o5_Prefab=o,t.listWin[4][4]=1,t.gameWin()}})},o.prototype.gameWin=function(){this.gameWinning()&&(this.box_ResultLetter.string="You",this.box_Result.string="Win",this.unschedule(this.startTimePlay),this.PlaySFX("soundwin"),this.winAnimation.play())},o.prototype.startTimePlay=function(){if(this.timeStart--,console.log("Time Start: "+this.timeStart),this.box_TimePlayGame.string=this.timeStart.toString(),0==this.timeStart){this.timeStart=5,this.box_TimePlayGame.string=this.timeStart.toString();for(var t=this.getRandomNumberResult();;){if(-1==this.listResult.indexOf(t)){this.listResult.push(t);var o=this.getRandomLetterResult(t);console.log("Result: "+o+" -- "+t),this.box_ResultLetter.string=o,this.box_Result.string=t.toString(),this.box_ShowResult.string=o+"-"+t+",  "+this.box_ShowResult.string,console.log("List Result: "+this.listResult),74==this.listResult.length&&console.log("Game Finish!!!!!!!!!!");break}t=this.getRandomNumberResult()}}},o.prototype.timeToPlayGame=function(){this.schedule(this.startTimePlay,1)},o.prototype.randomNumberBingoBoard=function(){var t,o;this.num1=[];for(var n=0;n<5;n++){t=15*n+1,o=15*(n+1);for(var e=1;e<=5;e++)for(var i=this.getRandomNumber(t,o);;){if(-1==this.num1.indexOf(i)){this.num1.push(i);break}i=this.getRandomNumber(t,o)}}console.log("num1: "+this.num1),this.box_B1.string=this.num1[0].toString(),this.box_B2.string=this.num1[1].toString(),this.box_B3.string=this.num1[2].toString(),this.box_B4.string=this.num1[3].toString(),this.box_B5.string=this.num1[4].toString(),this.box_I1.string=this.num1[5].toString(),this.box_I2.string=this.num1[6].toString(),this.box_I3.string=this.num1[7].toString(),this.box_I4.string=this.num1[8].toString(),this.box_I5.string=this.num1[9].toString(),this.box_N1.string=this.num1[10].toString(),this.box_N2.string=this.num1[11].toString(),this.box_N3.string=this.num1[12].toString(),this.box_N4.string=this.num1[13].toString(),this.box_N5.string=this.num1[14].toString(),this.box_G1.string=this.num1[15].toString(),this.box_G2.string=this.num1[16].toString(),this.box_G3.string=this.num1[17].toString(),this.box_G4.string=this.num1[18].toString(),this.box_G5.string=this.num1[19].toString(),this.box_O1.string=this.num1[20].toString(),this.box_O2.string=this.num1[21].toString(),this.box_O3.string=this.num1[22].toString(),this.box_O4.string=this.num1[23].toString(),this.box_O5.string=this.num1[24].toString()},o.prototype.getRandomNumber=function(t,o){return Math.floor(Math.random()*(o-t+1))+t},o.prototype.getRandomNumberResult=function(){return this.getRandomNumber(1,75)},o.prototype.getRandomLetterResult=function(t){return t<=15?"B":t<=30?"I":t<=45?"N":t<=60?"G":"O"},o.prototype.getSortArray=function(){var t=[18,80,13,70,980];console.log(t);var o=t.sort();console.log(o)},o.prototype.restartGame=function(){cc.director.loadScene("Bingo"),this.PlaySFX("soundclick")},o.prototype.BackToLoading=function(){this.PlaySFX("soundclick"),cc.director.loadScene("loading"),cc.audioEngine.stopMusic()},o.prototype.gameWinning=function(){for(var t=0,o=0;o<5;o++){t=0;for(var n=0;n<5;n++)t+=this.listWin[o][n];if(console.log("Row Win: "+t),5==t)return console.log("Hello Row win."),!0}for(o=0;o<5;o++){for(t=0,n=0;n<5;n++)t+=this.listWin[n][o];if(console.log("Column win: "+t),5==t)return console.log("Hello Column win."),!0}return t=this.listWin[0][0]+this.listWin[1][1]+this.listWin[2][2]+this.listWin[3][3]+this.listWin[4][4],console.log("Cross Down win: "+t),5==t?(console.log("Cross Down win."),!0):(t=this.listWin[4][0]+this.listWin[3][1]+this.listWin[2][2]+this.listWin[1][3]+this.listWin[0][4],console.log("Cross Up win: "+t),5==t?(console.log("Cross Up win."),!0):void 0)},o.prototype.showSetting=function(){this.PlaySFX("soundclick"),this.setting.setPosition(0,0)},o.prototype.hideSetting=function(){this.PlaySFX("soundclick"),this.setting.setPosition(1e4,0)},o.prototype.PlayMusic=function(t){var o=this.musicSound.find(function(o){return o.name==t});null==o?console.log("Music Sound Not Found"):(this.musicSource.clip=o.clip,this.musicSource.play())},o.prototype.StopMusic=function(t){var o=this.musicSound.find(function(o){return o.name==t});null==o?console.log("Music Sound Not Found"):(this.musicSource.clip=o.clip,this.musicSource.stop())},o.prototype.PlaySFX=function(t){var o=this.sfxSound.find(function(o){return o.name==t});null==o?console.log("SFX Sound Not Found"):(this.sfxSource.clip=o.clip,this.sfxSource.play())},o.prototype.onMusicSliderChange=function(){this.musicSource.volume=this.musicSlider.progress},o.prototype.onSoundSliderChange=function(){this.sfxSource.volume=this.soundSlider.progress},r([u(cc.Label)],o.prototype,"box_B1",void 0),r([u(cc.Node)],o.prototype,"b1_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_B2",void 0),r([u(cc.Node)],o.prototype,"b2_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_B3",void 0),r([u(cc.Node)],o.prototype,"b3_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_B4",void 0),r([u(cc.Node)],o.prototype,"b4_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_B5",void 0),r([u(cc.Node)],o.prototype,"b5_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_I1",void 0),r([u(cc.Node)],o.prototype,"i1_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_I2",void 0),r([u(cc.Node)],o.prototype,"i2_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_I3",void 0),r([u(cc.Node)],o.prototype,"i3_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_I4",void 0),r([u(cc.Node)],o.prototype,"i4_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_I5",void 0),r([u(cc.Node)],o.prototype,"i5_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_N1",void 0),r([u(cc.Node)],o.prototype,"n1_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_N2",void 0),r([u(cc.Node)],o.prototype,"n2_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_N3",void 0),r([u(cc.Node)],o.prototype,"n3_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_N4",void 0),r([u(cc.Node)],o.prototype,"n4_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_N5",void 0),r([u(cc.Node)],o.prototype,"n5_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_G1",void 0),r([u(cc.Node)],o.prototype,"g1_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_G2",void 0),r([u(cc.Node)],o.prototype,"g2_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_G3",void 0),r([u(cc.Node)],o.prototype,"g3_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_G4",void 0),r([u(cc.Node)],o.prototype,"g4_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_G5",void 0),r([u(cc.Node)],o.prototype,"g5_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_O1",void 0),r([u(cc.Node)],o.prototype,"o1_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_O2",void 0),r([u(cc.Node)],o.prototype,"o2_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_O3",void 0),r([u(cc.Node)],o.prototype,"o3_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_O4",void 0),r([u(cc.Node)],o.prototype,"o4_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_O5",void 0),r([u(cc.Node)],o.prototype,"o5_Prefab",void 0),r([u(cc.Label)],o.prototype,"box_TimePlayGame",void 0),r([u(cc.Label)],o.prototype,"box_Result",void 0),r([u(cc.Label)],o.prototype,"box_ResultLetter",void 0),r([u(cc.Label)],o.prototype,"box_ShowResult",void 0),r([u(cc.Slider)],o.prototype,"musicSlider",void 0),r([u(cc.Slider)],o.prototype,"soundSlider",void 0),r([u(cc.Animation)],o.prototype,"winAnimation",void 0),r([u(cc.Prefab)],o.prototype,"coin_Pre",void 0),r([u(cc.AudioClip)],o.prototype,"background_music",void 0),r([u(cc.Node)],o.prototype,"setting",void 0),r([u(s.default)],o.prototype,"musicSound",void 0),r([u(cc.AudioSource)],o.prototype,"musicSource",void 0),r([u(s.default)],o.prototype,"sfxSound",void 0),r([u(cc.AudioSource)],o.prototype,"sfxSource",void 0),r([l],o)}(cc.Component);n.default=d,cc._RF.pop()},{"./sound":"sound"}],click_sound:[function(t,o,n){"use strict";cc._RF.push(o,"9f4bduWUVRI6YQDV91wzRU7","click_sound");var e,i=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])})(t,o)},function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),r=this&&this.__decorate||function(t,o,n,e){var i,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,n,e);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,n,s):i(o,n))||s);return r>3&&s&&Object.defineProperty(o,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,l=s.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.soundClip=null,o}return i(o,t),o.prototype.onLoad=function(){this.node.getComponent(cc.Button).node.on("click",this.playSound,this)},o.prototype.playSound=function(){cc.audioEngine.playEffect(this.soundClip,!1)},r([l(cc.AudioClip)],o.prototype,"soundClip",void 0),r([c],o)}(cc.Component);n.default=u,cc._RF.pop()},{}],loading:[function(t,o){"use strict";cc._RF.push(o,"aaf22juwChA5b4NufswUhQH","loading"),cc.Class({extends:cc.Component,properties:{button:{default:null,type:cc.Node},quit:{default:null,type:cc.Node},laodingsound:{default:null,type:cc.AudioClip}},onLoad:function(){this.button.on(cc.Node.EventType.TOUCH_START,this.loadingFun,this),this.quit.on(cc.Node.EventType.TOUCH_START,this.quitFun,this),cc.audioEngine.setLoop(!0),cc.audioEngine.playMusic(this.laodingsound,!0)},loadingFun:function(){cc.director.loadScene("Bingo"),cc.audioEngine.stopAll()},quitFun:function(){cc.game.end()},start:function(){}}),cc._RF.pop()},{}],sound:[function(t,o,n){"use strict";cc._RF.push(o,"59440Iip+VMhYdixeFnPpbV","sound");var e=this&&this.__decorate||function(t,o,n,e){var i,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,n,e);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,n,s):i(o,n))||s);return r>3&&s&&Object.defineProperty(o,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=i.property,c=function(){function t(){this.name=""}return e([s(cc.String)],t.prototype,"name",void 0),e([s(cc.AudioClip)],t.prototype,"clip",void 0),e([r],t)}();n.default=c,cc._RF.pop()},{}]},{},["Bingo","click_sound","loading","sound"]);