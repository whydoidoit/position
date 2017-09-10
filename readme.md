### Introduction

A function that returns the position of an entity if passed one, otherwise a Vec3 world coordinate
in PlayCanvas.

### Installation

```language-shell
npm install --save playcanvas-get-position
```

### Usage

```language-javascript
import getPosition from 'playcanvas-get-position'

...

MyPlayer.prototype.goto = function(entityOrPosition) {
    this.targetPoint.copy(getPosition(entityOrPosition));
} 
 

```

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
