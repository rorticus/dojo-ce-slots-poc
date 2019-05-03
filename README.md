# POC w/ using named slots with Dojo Custom Elements

This project gives a small example of using named slots with Dojo's custom elements. **In order for this to work, you need to have a version of @dojo/framework that has named slot support!**

Named slots are automatically provided as properties to the underlying dojo widget. For example,

```html
<my-tab-controller disabled="true">
  <div slot="title">
    This is the title
  </div>
  <div slot="tabs" slot-array="true">
    <my-tab title="Tab 1">Tab 1 content</my-tab>
    <my-tab title="Tab 2">Tab 2 content</my-tab>
  </div>
</my-tab-controller>
```

This HTML will provide the following properties to the `MyTabController` widget,

```
{
  "disabled": "true",
  "title": <div slot="title">This is the title</div>,
  "tabs": [
  	<my-tab title="Tab 1">Tab 1 content</my-tab>,
    <my-tab title="Tab 2">Tab 2 content</my-tab>
  ]
}
```