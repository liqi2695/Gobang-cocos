window.gamestate='white'  //五子棋的状态
window.color=cc.spriteFrame

cc.Class({
    extends: cc.Component,

    properties: {

        blackSpriteFrame:{//白棋的图片
            default:null,
            type:cc.SpriteFrame
        },
        whiteSpriteFrame:{//白棋的图片
            default:null,
            type:cc.SpriteFrame
        },
        step:Number
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },


    trans:function(){

        //落子的实现
          var test=this
          if(gamestate=='white' && this.getComponent(cc.Sprite).spriteFrame==null) //判断是否有棋子
          {
            this.getComponent(cc.Sprite).spriteFrame=this.whiteSpriteFrame  //将透明棋子变成白字
            gamestate='black'   //每次点击时对棋子状态进行改变
            cc.log(gamestate)
            color=this.whiteSpriteFrame
            chessbox.push(test)    //棋子下棋后入栈

            
          }
        else if(this.gamestate='black' && this.getComponent(cc.Sprite).spriteFrame==null)
          {
            this.getComponent(cc.Sprite).spriteFrame=this.blackSpriteFrame //将透明棋子变成黑字
            gamestate='white'   
            cc.log(gamestate)
            color=this.blackSpriteFrame
            chessbox.push(test)   //棋子下棋后入栈

          }
        else  alert("这里有棋子")
       // this.getComponent(cc.Sprite).spriteFrame=this.blackSpriteFrame

       //将棋子放进数组
    },

    start () {

    },

    // update (dt) {},
});
