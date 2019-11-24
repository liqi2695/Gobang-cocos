window.chessbox=new Array()
window.chess_score=new  Array()

cc.Class({
    extends: cc.Component,

    properties: {
        whiteSpriteFrame:{//白棋的图片
            default:null,
            type:cc.SpriteFrame
        },
        chessman:{
            type:cc.Prefab,
            default:null,
        },
        blackSpriteFrame:{//黑棋的图片
            default:null,
            type:cc.SpriteFrame
        },

        chesslist:{
            default:[],
            type:[cc.node]
        },
        chessbox:{
            type:[cc.node],
            default:[],
        },

        fiveGroup:[],//五元组
        
        fiveGroupScore:[],//五元组分数

        
    },
    judgeOver:function(){
        var action=cc.moveTo(0.25,0,0)
        var actionback=cc.moveTo(0.25,0,850)    //定义动作
        cc.log("panduan")
        //判断行
        for(var i=0;i<11;i++)
        {
            for(var j=0;j<15;j++)
            {
               // cc.log(this.chesslist[112].getComponent(cc.Sprite).spriteFrame)
                if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame == this.whiteSpriteFrame &&
                this.chesslist[(i+1+j*15)].getComponent(cc.Sprite).spriteFrame == this.whiteSpriteFrame &&
                this.chesslist[(i+2+j*15)].getComponent(cc.Sprite).spriteFrame == this.whiteSpriteFrame 
                && this.chesslist[(i+3+j*15)].getComponent(cc.Sprite).spriteFrame == this.whiteSpriteFrame
                && this.chesslist[(i+4+j*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame)
                    {
                        cc.log("jinruchenggong")
                        var Over=cc.find("Canvas/background_1")
                        
                        
                        cc.log("dssss")
                        //结束弹窗跳出
                        Over.runAction(action)
                        cc.find("Canvas/background_1/black_win").active=false
                    }
                else if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame == this.blackSpriteFrame &&
                    this.chesslist[(i+1+j*15)].getComponent(cc.Sprite).spriteFrame == this.blackSpriteFrame &&
                    this.chesslist[(i+2+j*15)].getComponent(cc.Sprite).spriteFrame == this.blackSpriteFrame 
                    && this.chesslist[(i+3+j*15)].getComponent(cc.Sprite).spriteFrame == this.blackSpriteFrame
                    && this.chesslist[(i+4+j*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame)
                    {
                        var Over=cc.find("Canvas/background_1")
                        cc.log("sdfs")
                        //结束弹窗跳出
                        Over.runAction(action)
                        cc.find("Canvas/background_1/white_win").active=false
                    }
               

                
            }
        }
        //判断列

        for(var i=0;i<15;i++)
        {
            for(var j=4;j<15;j++)
            {
                //判断是否有五个棋子连在一起

                if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                 && this.chesslist[(i+(j-1)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                && this.chesslist[(i+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                 && this.chesslist[(i+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                && this.chesslist[(i+(j-4)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                {

                        
                    //结束弹窗跳出
                    Over.runAction(action)
                    cc.find("Canvas/background_1/black_win").active=false
                    cc.log("made")

                }
                else if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                 && this.chesslist[(i+(j-1)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                && this.chesslist[(i+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                 && this.chesslist[(i+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                && this.chesslist[(i+(j-4)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
               {
                var Over=cc.find("Canvas/background_1")
                 //结束弹窗跳出
                Over.runAction(action)
                cc.find("Canvas/background_1/white_win").active=false
                cc.log("madeadfad")
                   
               }
            }
        }
        //判断右斜方向
        for(var i=0;i<11;i++)
        {
            for(var j=4;j<15;j++)
            {
                if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i+4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame) 
                {
                    var Over=cc.find("Canvas/background_1")
                    Over.runAction(action)
                    cc.log("右斜")

                        //结束弹窗跳出
                    
                    cc.find("Canvas/background_1/black_win").active=false


                    
                }
                else if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                && this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame  ==this.blackSpriteFrame
               && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame  ==this.blackSpriteFrame
                && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame  ==this.blackSpriteFrame
               && this.chesslist[(i+4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame  ==this.blackSpriteFrame)
               {
                var Over=cc.find("Canvas/background_1")
                //结束弹窗跳出
                Over.runAction(action)
                cc.find("Canvas/background_1/white_win").active=false

               }

            }
        }
        //判断左斜方向
        for(var i=4;i<15;i++)
        {
            for(var j=4;j<15;j++)
            {
                if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                 && this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                 && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                && this.chesslist[(i-4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame) 
                {
                    var Over=cc.find("Canvas/background_1")
                    Over.runAction(action)

                    //结束弹窗跳出
                    
                    cc.find("Canvas/background_1/black_win").active=false                  

                }
                else if(this.chesslist[(i+j*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                && this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
               && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
               && this.chesslist[(i-4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame) 
               {
                var Over=cc.find("Canvas/background_1")
                //结束弹窗跳出
                Over.runAction(action)
                cc.find("Canvas/background_1/white_win").active=false

               }

            }
        }

    },
    chessBoard:function(){
        //将chess预制体铺满棋this.chessBoard()盘，然后点击时出发点击事件显示图片
        for(var i=7;i>-8;i--)
     {
        for(var j=-7;j<8;j++)
        {
        //创建一个新的棋盘，将225个空棋子放入
        var newCode=cc.instantiate(this.chessman)
        cc.find("Canvas/back").addChild(newCode)
        newCode.setPosition(cc.v2(60*j,60*i))
        //鼠标监听事件，每次下棋时进行一次判断
        var self=this

        
        newCode.on(cc.Node.EventType.TOUCH_END,function(event)
        {
            self.judgeOver()
            if(gamestate=='white' && newCode.getComponent(cc.Sprite).spriteFrame==null)
            {
                cc.find("Canvas/player/white_player").active=true
                cc.find("Canvas/player/black_player").active=false
            }
            /*else
            {
                cc.find("Canvas/player/white_player").active=false
                cc.find("Canvas/player/black_player").active=true

            }*/
                                
        });   
                                                  
        this.chesslist.push(newCode)
        }
     }  
    
    },


    onLoad () {
        this.chessBoard()
    },

    ai_chess:function(){
        
             for(var m=0;m<225;m++)
            {
                chess_score[m]=0
                
                    //四个
                    //行
                    for(var i=4;i<15;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-3+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-4+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    chess_score[i+j*15]+=50000
                                }
                                
                                
                            }
                            else if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-3+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-4+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }

                        }
                    }
                    for(var i=0;i<11;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+3+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+4+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    chess_score[i+j*15]+=50000
                                }
                                
                                
                            }
                            else if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+3+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+4+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }

                        }
                    }
                    //列
                    for(var i=0;i<15;i++)
                    {
                        for(var j=4;j<15;j++)
                        {
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-3)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-4)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50000
                                }
                            }
                            else if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-3)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-4)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }
                        }
                    
                    }
                    for(var i=0;i<15;i++)
                    {
                        for(var j=0;j<11;j++)
                        {
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+3)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+4)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50000
                                }
                            }
                            else if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+3)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+4)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }
                        }
                    
                    }
                    //右斜
                    for(var i=0;i<11;i++)
                    {
                     for(var j=4;j<15;j++)
                    {
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i+4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=50000
                        }

                     }
                     else if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i+4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=60000
                        }
                     }

                    }
                    }
                    //
                    for(var i=4;i<15;i++)
                    {
                     for(var j=0;j<11;j++)
                    {
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i-3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i-4+(j+4)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=50000
                        }

                     }
                     else if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i-3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i-4+(j+4)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame)
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=60000
                        }
                     }

                    }
                    }
                    //左斜
                    for(var i=4;i<15;i++)
                    {
                        for(var j=4;j<15;j++)
                        {
                            if(
                             this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50000
                                }

                            }
                            else if(
                            this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-4+(j-4)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }
                        }
                    }
                    //
                    for(var i=0;i<11;i++)
                    {
                        for(var j=0;j<11;j++)
                        {
                            if(
                             this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+4+(j+4)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50000
                                }

                            }
                            else if(
                            this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+4+(j+4)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=60000
                                }
                            }
                        }
                    }
                    //三个
                    //行
                    for(var i=3;i<15;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-3+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i-4>0){
                                        chess_score[i+j*15]+=10000
                                    }
                                    else {
                                        chess_score[i+j*15]+=5000                                       
                                }
                                
                            }
                            else if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-3+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i-4>0){
                                        chess_score[i+j*15]+=15000
                                    }
                                    else{
                                        chess_score[i+j*15]+=7500
                                    }

                                
                                }
                            }

                        }
                    }
                }

                    for(var i=0;i<12;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+3+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i+4<=14){
                                        chess_score[i+j*15]+=10000
                                    }
                                    else {
                                        chess_score[i+j*15]+=5000    
                                   }
                                }
                                
                            }
                            else if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+3+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i+4<=14){
                                        chess_score[i+j*15]+=15000
                                    }
                                    else {
                                        chess_score[i+j*15]+=7500    
                                }
                            }

                        }
                    }
                }
                    //列
                    for(var i=0;i<15;i++)
                    {
                        for(var j=3;j<15;j++)
                        {
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-3)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(j-4>=0)
                                    {
                                        chess_score[i+j*15]+=10000
                                    }
                                    else{
                                        chess_score[i+j*15]+=5000
                                    }

                                
                                }
                            }
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-3)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(j-4>=0)
                                    {
                                        chess_score[i+j*15]+=15000
                                    }
                                    else{
                                        chess_score[i+j*15]+=7500
                                    }
                                }
                            }
                        }
                    
                    }
                    //
                    for(var i=0;i<15;i++)
                    {
                        for(var j=0;j<12;j++)
                        {
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+3)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(j+4<=14)
                                    {
                                        chess_score[i+j*15]+=10000
                                    }
                                    else{
                                        chess_score[i+j*15]+=5000
                                    }
                                
                                }
                            }
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+3)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(j+4<=14)
                                    {
                                        chess_score[i+j*15]+=15000
                                    }
                                    else{
                                        chess_score[i+j*15]+=7500
                                    }
                                }
                            }
                        }
                    
                    }
                    //右斜
                    for(var i=0;i<12;i++)
                    {
                     for(var j=3;j<15;j++)
                    {
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                            if(i+4<=14 && j-4>=0){
                                chess_score[i+j*15]+=10000
                            }
                            else{
                                chess_score[i+j*15]+=5000
                            }
                        
                        }

                     }
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i+3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                            if(i+4<=14 && j-4>=0){
                                chess_score[i+j*15]+=15000
                            }
                            else{
                                chess_score[i+j*15]+=7500
                            }
                        }
                     }

                    }
                    }

                    for(var i=3;i<15;i++)
                    {
                     for(var j=0;j<12;j++)
                    {
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     && this.chesslist[(i-3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                            if(i-4>=0 && j+4<=14){
                                chess_score[i+j*15]+=10000
                            }
                            else{
                                chess_score[i+j*15]+=5000
                            }
                        }

                     }
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     && this.chesslist[(i-3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                            if(i-4>=0 && j+4<=14){
                                chess_score[i+j*15]+=15000
                            }
                            else{
                                chess_score[i+j*15]+=7500
                            }
                        }
                     }

                    }
                    }
                    //左斜
                    for(var i=3;i<15;i++)
                    {
                        for(var j=3;j<15;j++)
                        {
                            if(
                             this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i-4>=0 && j-4>=0){
                                        chess_score[i+j*15]+=10000
                                    }
                                    else{
                                        chess_score[i+j*15]+=5000
                                    }
                                }

                            }
                            if(
                            this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-3+(j-3)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i-4>=0 && j-4>=0){
                                        chess_score[i+j*15]+=15000
                                    }
                                    else{
                                        chess_score[i+j*15]+=7500
                                    }
                                }
                            }
                        }
                    }
                    //
                    for(var i=0;i<12;i++)
                    {
                        for(var j=0;j<12;j++)
                        {
                            if(
                             this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i+4<15 && j+4<15){
                                        chess_score[i+j*15]+=10000
                                    }
                                    else{
                                        chess_score[i+j*15]+=5000
                                    }
                                }

                            }
                            if(
                            this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+3+(j+3)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                    if(i+4<15 && j+4<15){
                                        chess_score[i+j*15]+=15000
                                    }
                                    else{
                                        chess_score[i+j*15]+=7500
                                    }
                                }
                            }
                        }
                    }
                    //两个
                    //行
                    for(var i=2;i<15;i++)
                    {
                        for(var j=0;j<15;j++)
                        {      
                            if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame                           
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                }                            
                            }
                            else if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i-2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame                           
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    }
                    //
                    for(var i=0;i<13;i++)
                    {
                        for(var j=0;j<15;j++)
                        {      
                            if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame                           
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                }                            
                            }
                            else if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+2+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame                           
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    }
                    //列
                    for(var i=0;i<15;i++)
                    {
                        for(var j=2;j<15;j++)
                        {
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                } 
                            }
                            else if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j-2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    
                    }

                    //
                    for(var i=0;i<15;i++)
                    {
                        for(var j=0;j<13;j++)
                        {
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                } 
                            }
                            else if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            && this.chesslist[i+(j+2)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    
                    }
                    //右斜
                    for(var i=0;i<13;i++)
                    {
                     for(var j=2;j<15;j++)
                    {
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=2000
                        } 

                     }
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i+2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=2500
                        } 
                     }

                    }
                    }
                    //
                    for(var i=2;i<15;i++)
                    {
                     for(var j=0;j<13;j++)
                    {
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=2000
                        } 

                     }
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     && this.chesslist[(i-2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=2500
                        } 
                     }

                    }
                    }
                    //左斜
                    for(var i=2;i<15;i++)
                    {
                        for(var j=2;j<15;j++)
                        {
                            if(
                             this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                } 

                            }
                            if(
                            this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i-2+(j-2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    }
                    //
                    for(var i=0;i<13;i++)
                    {
                        for(var j=0;j<13;j++)
                        {
                            if(
                             this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2000
                                } 

                            }
                            if(
                            this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            && this.chesslist[(i+2+(j+2)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=2500
                                } 
                            }
                        }
                    }
                    //一个
                    //行
                    for(var i=1;i<15;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                                
                            }
                            else if(this.chesslist[i-1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }

                        }
                    }
                    //
                    for(var i=0;i<14;i++)
                    {
                        for(var j=0;j<15;j++)
                        {
                            
                            if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                                
                            }
                            else if(this.chesslist[i+1+j*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }

                        }
                    }
                    //列
                    for(var i=0;i<15;i++)
                    {
                        for(var j=1;j<15;j++)
                        {
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                            }
                            if(this.chesslist[i+(j-1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }
                        }
                    
                    }
                    //
                    for(var i=0;i<15;i++)
                    {
                        for(var j=0;j<14;j++)
                        {
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                            }
                            if(this.chesslist[i+(j+1)*15].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame
                            
                            
                            )
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }
                        }
                    
                    }
                    //右斜
                    for(var i=0;i<14;i++)
                    {
                     for(var j=1;j<15;j++)
                    {
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=20
                        } 

                     }
                     if(this.chesslist[(i+1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=50
                        } 
                     }

                    }
                    }
                    //
                    for(var i=1;i<15;i++)
                    {
                     for(var j=0;j<14;j++)
                    {
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                     
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=20
                        } 

                     }
                     if(this.chesslist[(i-1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                     
                     
                     )
                     {
                        if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                        {
                        chess_score[i+j*15]+=50
                        } 
                     }

                    }
                    }
                    //左斜
                    for(var i=1;i<15;i++)
                    {
                        for(var j=1;j<15;j++)
                        {
                            if(
                             this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             
                             
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                            }
                            if(
                            this.chesslist[(i-1+(j-1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            
                            
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }
                        }
                    }   
                    //
                    for(var i=0;i<14;i++)
                    {
                        for(var j=0;j<14;j++)
                        {
                            if(
                             this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.whiteSpriteFrame
                             
                             
                             ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=20
                                } 
                            }
                            if(
                            this.chesslist[(i+1+(j+1)*15)].getComponent(cc.Sprite).spriteFrame ==this.blackSpriteFrame
                            
                            
                            ) 
                            {
                                if(this.chesslist[i+j*15].getComponent(cc.Sprite).spriteFrame==null)
                                {
                                chess_score[i+j*15]+=50
                                } 
                            }
                        }
                    } 
            }

            var MAX=0
            var position=0
            for(var k=0;k<224;k++)
            {
                if(chess_score[k]>MAX)
                {
                    MAX=chess_score[k]
                    position=(function(x){
                        return x
                    }(k))
                }
            }
            if(this.chesslist[position].getComponent(cc.Sprite).spriteFrame==null)
            {
                this.chesslist[position].getComponent(cc.Sprite).spriteFrame=this.blackSpriteFrame
                cc.log(position)
            }
            this.judgeOver()
            //chessbox.push(this.chesslist[position]) //进栈

    },


    //悔棋但是人机没有悔棋
    regret_chess:function(){
        

        
        var chessman=chessbox.pop()
        cc.log(chessman)
        //var chessmany=chessbox.pop().node.position.y
        var chessmanx=chessman.node.position.y
        var chessmany=chessman.node.position.x
        var regret_chessman=(chessmany/60)+7+(7-chessmanx/60)*15
        //出栈操作，获取最后一个入栈的节点，然后获取其position属性，并将其转换成为第几颗棋子

        if(this.chesslist[regret_chessman].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame)
        {
            gamestate='white'
        }
        else
        {
            gamestate='black'
        }
        //判断最后一个是白棋还是黑棋，然后悔棋后仍然是该棋子下棋

        this.chesslist[regret_chessman].getComponent(cc.Sprite).spriteFrame=null
        //将该棋子变成空
    },

    update (dt) {
        var self=this
        if(gamestate=='black')
        {
            cc.find("Canvas/test").active=true
            setTimeout(function(){
            self.ai_chess()
            cc.find("Canvas/test").active=false
            
            },1000)
            gamestate='white'
            
            
        }
        
    },
});
