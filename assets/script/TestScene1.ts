/*
 * @Author: zwb
 * @Date: 2021-05-21 17:43:32
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
export default class TestScene1 extends cc.Component {

    @property(cc.Sprite)
    mask1: cc.Sprite = null;
    @property(cc.Sprite)
    mask2: cc.Sprite = null;
    @property(cc.Sprite)
    mask3: cc.Sprite = null;


    @property(cc.Texture2D)
    t2d: cc.Texture2D = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // initDefaultOnLoad();
    }

    start () {
    //    this.sp.getMaterial(0).setProperty("texture2", this.t2d)
    // this.mask2.node.zIndex = 102;
    // this.mask3.node.zIndex = 102;
    // this.mask2.node.setSiblingIndex(2);
    // this.mask3.node.setSiblingIndex(2);
        this.mask2.getMaterial(0).setProperty("is_water", 1);
        this.mask3.getMaterial(0).setProperty("is_water", 1);
    }

    // update (dt) {}
}
