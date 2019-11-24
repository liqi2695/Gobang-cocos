window.name="";
cc.Class({
    extends: cc.Component,

    properties: {
 
    },



    start () {

    },

    insert_information:function(){
      var insert=cc.find("Canvas/enter_personalName")
      name=insert.getComponent(cc.EditBox).string;
      var m=register(name,1);
      if(m==1000){
          var action=cc.moveTo(0.25,-550,750)
          insert.runAction(action)
      }
      else   
      {
          insert.getChildByName("wrong").active=true;
      }

    },


});
