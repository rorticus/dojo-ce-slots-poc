import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import { customElement } from '@dojo/framework/widget-core/decorators/customElement';
import ThemedMixin from '@dojo/framework/widget-core/mixins/Themed';

export interface MyWidgetProperties {
    title?: string;
    slot?: DNode;
}

@customElement<MyWidgetProperties>({
    tag: 'my-widget',
    attributes: ['title'],
    properties: ['slot']
})
export class MyWidget extends ThemedMixin(WidgetBase)<MyWidgetProperties> {
    render() {
        const { title, slot } = this.properties;

        return v('div', {}, [
            `'Title: ${title}, `,
            'slot is ',
            slot
        ]);
    }
}
export default MyWidget;