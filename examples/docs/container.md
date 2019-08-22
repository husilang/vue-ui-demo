## Container
---
<br>
1
<br>
<zm-container>
    <zm-header style="background: #abcdef;">header</zm-header>
    <zm-container>
    <zm-aside style="background: pink;height:80px;">aside</zm-aside>
    <zm-main style="background: yellow;height:80px;">main</zm-main>
    </zm-container>
    <zm-footer style="background: #e8e8e8;">footer</zm-footer>
</zm-container>

::: demo
```html
<zm-container>
    <zm-header style="background: #abcdef;">header</zm-header>
    <zm-container>
    <zm-aside style="background: pink;height:80px;">aside</zm-aside>
    <zm-main style="background: yellow;height:80px;">main</zm-main>
    </zm-container>
    <zm-footer style="background: #e8e8e8;">footer</zm-footer>
</zm-container>
```
:::
<br>
<br>
2
<br>
<zm-container>
    <zm-aside style="background: pink;">aside</zm-aside>
    <zm-container>
        <zm-header style="background: #abcdef;">header</zm-header>
        <zm-main style="background: yellow;height:80px;">main</zm-main>
        <zm-footer style="background: #e8e8e8;">footer</zm-footer>
    </zm-container>
</zm-container>

::: demo
```html
<zm-container>
    <zm-aside style="background: pink;">aside</zm-aside>
    <zm-container>
        <zm-header style="background: #abcdef;">header</zm-header>
        <zm-main style="background: yellow;height:80px;">main</zm-main>
        <zm-footer style="background: #e8e8e8;">footer</zm-footer>
    </zm-container>
</zm-container>
```
:::