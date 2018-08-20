# materialCategory10
Material Design version of D3's schemeCategory10.

## Usage

### As a drop-in replacement for `d3.schemeCategory10`

```js
import materialCategory10 from 'materialCategory10';

const materialColorScale = d3.scaleOrdinal(materialCategory10);

console.log(materialColorScale(0)); // "#2196F3"
console.log(materialColorScale(1)); // "#FF9800"
```

### Without D3

It's just an array of 10 values:

```js
import materialCategory10 from 'materialCategory10';

console.log(materialCategory10[0]); // "#2196F3"
console.log(materialCategory10[1]); // "#FF9800"
```

You can make a simple chromatic scale function:

```js
function materialColorScale(i) {
    return materialCategory10[i % 10];
}

console.log(materialColorScale(0)); // "#2196F3"
console.log(materialColorScale(1)); // "#FF9800"
```
