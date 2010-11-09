/*
---
description:     Dotter

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Dotter
...
*/
var Dotter=new Class({Implements:[Options,Events],options:{delay:1000,dot:".",message:"Loading",numDots:3,property:"text",reset:false,onDot:function(){},onStart:function(){},onStop:function(){}},initialize:function(a,b){this.setOptions(b);this.container=document.id(a);this.dots=0;this.running=false;},dot:function(){if(this.running){var a=this.container.get(this.options.property);this.dots++;this.container.set(this.options.property,(this.dots%this.options.numDots!=0?a:this.options.message)+""+this.options.dot);}return this;},load:function(){this.loaded=true;this.dots=0;this.dotter=function(){this.dot();this.fireEvent("dot");}.bind(this);this.periodical=this.dotter.periodical(this.options.delay);this.container.set(this.options.property,this.options.message+""+this.options.dot);return this;},start:function(){if(!this.loaded||this.options.reset){this.load();}this.running=true;this.fireEvent("start");return this;},stop:function(){this.running=this.loaded=false;clearInterval(this.periodical);this.fireEvent("stop");return this;}});