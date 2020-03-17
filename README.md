# Issue
https://github.com/material-components/material-components-web/issues/5720

Cannot make works together:

 - Create React App
 - @material SASS

## Error

Always getting errors:

**Using @import**
```
SassError: Two forwarded modules both define a variable named $mdc-feature-mdc-feature-all-features.
  ╷
3 │ @forward "@material/feature-targeting/variables" as mdc-feature-*;
  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ original @forward
4 │ @forward "@material/feature-targeting/mixins" as mdc-feature-*;
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new @forward
```
**Using @use**

```
SassError: Undefined function.
   ╷
72 │ @mixin common($query: feature-targeting-functions.all()) {
   │                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```


## Things I did

 - Create an app using `Create React App`
 - Adding [`sass` (and not `node-sass`)](https://github.com/material-components/material-components-web/issues/5502#issuecomment-590974715)
 - I added an `.env` file containing `SASS_PATH=./node_modules`
 - I tried all combinaison with(out) `~` and using `@import` or `@use`
