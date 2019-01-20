# StockPapers Website

> Download StockPapers on the [AppStore](https://get.stockpapers.app)

## Styling
For convenience I've installed [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader) all the files in the `styles/extra` folder will be included in each sass file, so please **DO NOT USE @import METHOD ANYWHERE FOR ANY REASON** to avoid file duplicates in build.

Example:

```scss
/* styles/extra/_mixins.scss */

%backgroundRED {
  background: red;
}
```

```scss
/* styles/myPage.scss */

.redStuff {
  @extend %backgroundRED; // as you can see mixins.scss is not imported

  color: white;
  border-radius: 5px;
}
```

These 2 files above will be compiled in:

```scss
.redStuff {
  background: red;
  color: white;
  border-radius: 5px;
}
```
