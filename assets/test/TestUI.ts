import { _decorator, Button, Component, EditBox, Label, Node, Sprite } from 'cc';
import ComponentFindUtils from './ComponentFindUtils';
const { ccclass, property } = _decorator;

@ccclass('TestUI')
export class TestUI extends Component {
    private get lblT(): Label { return ComponentFindUtils.find<Label>("top/lblT", Label, this); }
    private get node1(): Node { return ComponentFindUtils.findNode("top/node1", this); }
    private get imgSprite(): Sprite { return ComponentFindUtils.find<Sprite>("bottom/imgSprite", Sprite, this); }
    private get eb(): EditBox { return ComponentFindUtils.find<EditBox>("bottom/eb", EditBox, this); }
    private get btn(): Button { return ComponentFindUtils.find<Button>("bottom/btn", Button, this); }

    start() {
        this.lblT.string = "1";
        this.imgSprite.spriteFrame = null;
        this.eb.string = "Hello";
        this.btn.node.on(Button.EventType.CLICK, this.onClick, this);
    }

    private onClick(): void {
        this.lblT.string = "点击了按钮";
    }

    update(deltaTime: number) {

    }

    protected onDestroy(): void {
        ComponentFindUtils.destroy(this);
    }
}


