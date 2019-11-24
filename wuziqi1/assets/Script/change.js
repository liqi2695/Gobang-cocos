
cc.Class({
    extends: cc.Component,

    properties: {
        chess_sounds:
        {
            type:cc.AudioSource,
            default:null,
        },
        background_sounds:{
            type:cc.AudioSource,
            default:null,
        },
        gameOver_sounds:{
            type:cc.AudioSource,
            default:null,
        },
        background_active:{
            type:cc.Node,
            default:null
        },




    },


 
    //场景跳转事件
    to_fights:function(){
        cc.director.loadScene("main_game")
    },
    to_aiGame:function(){
        cc.director.loadScene("ai_game")
    },
    to_start:function(){
        cc.director.loadScene("start")
    },

    background_start:function(){
        this.background_sounds.play()
        if(this.background_active!==null){
            this.background_active.active=true

        }
       
    },
    background_pause:function(){
        
        if(this.background_active!==null){
            this.background_active.active=false

        }
        this.background_sounds.pause()
    },


    //音乐播放事件

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        if(this.background_active!==null){
            this.background_sounds.play()

        }
    },

    start () {

    },

    // update (dt) {},
});
