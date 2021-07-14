/*
 * @Author: zwb
 * @Date: 2021-05-20 17:06:43
 * @Description: file content
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Cutscene extends cc.Component {

    onLoad () {
        this.node.getComponent(cc.Sprite).getMaterial(0).setProperty("width", Math.floor( this.node.width  ) )

        this.node.getComponent(cc.Sprite).getMaterial(0).setProperty("isBegin", true  )
        this.node.getComponent(cc.Sprite).getMaterial(0).setProperty("beginTime", cc.director.getTotalTime()  )
    }

    start () {
        

    }
}
