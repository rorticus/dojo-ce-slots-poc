import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import { customElement } from '@dojo/framework/widget-core/decorators/customElement';
import ThemedMixin, { theme } from '@dojo/framework/widget-core/mixins/Themed';
import * as css from './styles/Header.m.css';

export interface HeaderProperties {
    title: string;
    trailing?: DNode;
    menuItems?: DNode[];
}

@customElement<HeaderProperties>({
    tag: 'demo-header',
    attributes: ['title'],
    properties: ['trailing', 'menuItems']
})
@theme(css)
export class Header extends ThemedMixin(WidgetBase)<HeaderProperties> {
    render() {
        const { title, trailing, menuItems = [] } = this.properties;

        console.log(menuItems);

        return v('div', {
            classes: this.theme(css.root)
        }, [
            v('h1', { classes: this.theme(css.title)}, [title ]),
            v('div', { classes: this.theme(css.menuItems)}, menuItems.map(item => v('div', { classes: this.theme(css.menuItem) }, [item]))),
            trailing && v('div', { classes: this.theme(css.trailing)}, [trailing])
        ]);
    }
}
export default Header;