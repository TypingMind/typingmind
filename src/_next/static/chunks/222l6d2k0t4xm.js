(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,660354,t=>{"use strict";var e=t.i(588774),a=t.i(198216);t.s(["channel",0,(t,r)=>e.default.lang.round(a.default.parse(t)[r])],660354)},693248,t=>{"use strict";var e=(0,t.i(86647).__name)(()=>`
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`,"getIconStyles");t.s(["getIconStyles",0,e])},746400,t=>{"use strict";var e=t.i(325465),a=t.i(86647),r=t.i(565167);t.i(112057);var i=t.i(30834),s=(0,a.__name)((t,e)=>{let a=t.append("rect");if(a.attr("x",e.x),a.attr("y",e.y),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("width",e.width),a.attr("height",e.height),e.name&&a.attr("name",e.name),e.rx&&a.attr("rx",e.rx),e.ry&&a.attr("ry",e.ry),void 0!==e.attrs)for(let t in e.attrs)a.attr(t,e.attrs[t]);return e.class&&a.attr("class",e.class),a},"drawRect"),l=(0,a.__name)((t,e)=>{s(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,stroke:e.stroke,class:"rect"}).lower()},"drawBackgroundRect"),n=(0,a.__name)((t,a)=>{let r=a.text.replace(e.lineBreakRegex," "),i=t.append("text");i.attr("x",a.x),i.attr("y",a.y),i.attr("class","legend"),i.style("text-anchor",a.anchor),a.class&&i.attr("class",a.class);let s=i.append("tspan");return s.attr("x",a.x+2*a.textMargin),s.text(r),i},"drawText"),o=(0,a.__name)((t,e,a,i)=>{let s=t.append("image");s.attr("x",e),s.attr("y",a);let l=(0,r.sanitizeUrl)(i);s.attr("xlink:href",l)},"drawImage"),d=(0,a.__name)((t,e,a,i)=>{let s=t.append("use");s.attr("x",e),s.attr("y",a);let l=(0,r.sanitizeUrl)(i);s.attr("xlink:href",`#${l}`)},"drawEmbeddedImage"),c=(0,a.__name)(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),x=(0,a.__name)(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj"),g=(0,a.__name)(()=>{let t=(0,i.select)(".mermaidTooltip");return t.empty()&&(t=(0,i.select)("body").append("div").attr("class","mermaidTooltip").style("opacity",0).style("position","absolute").style("text-align","center").style("max-width","200px").style("padding","2px").style("font-size","12px").style("background","#ffffde").style("border","1px solid #333").style("border-radius","2px").style("pointer-events","none").style("z-index","100")),t},"createTooltip");t.s(["createTooltip",0,g,"drawBackgroundRect",0,l,"drawEmbeddedImage",0,d,"drawImage",0,o,"drawRect",0,s,"drawText",0,n,"getNoteRect",0,c,"getTextObj",0,x])},297,t=>{"use strict";var e=t.i(325465),a=t.i(443004),r=t.i(86647),i=(0,r.__name)((t,r,i,n)=>{t.attr("class",i);let{width:o,height:d,x:c,y:x}=s(t,r);(0,e.configureSvgSize)(t,d,o,n);let g=l(c,x,o,d,r);t.attr("viewBox",g),a.log.debug(`viewBox configured: ${g} with padding: ${r}`)},"setupViewPortForSVG"),s=(0,r.__name)((t,e)=>{let a=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:a.width+2*e,height:a.height+2*e,x:a.x,y:a.y}},"calculateDimensionsWithPadding"),l=(0,r.__name)((t,e,a,r,i)=>`${t-i} ${e-i} ${a} ${r}`,"createViewBox");t.s(["setupViewPortForSVG",0,i])},271059,t=>{"use strict";var e=t.i(86647);t.i(112057);var a=t.i(30834),r=(0,e.__name)((t,e)=>{let r;return"sandbox"===e&&(r=(0,a.select)("#i"+t)),("sandbox"===e?(0,a.select)(r.nodes()[0].contentDocument.body):(0,a.select)("body")).select(`[id="${t}"]`)},"getDiagramElement");t.s(["getDiagramElement",0,r])},855937,t=>{"use strict";var e=t.i(567846);t.i(271059),t.i(297),t.i(792532),t.i(299381),t.i(403835),t.i(746400),t.i(646980),t.i(791811),t.i(159592),t.i(102392),t.i(354298),t.i(308852),t.i(241565),t.i(560434),t.i(485091),t.i(325465),t.i(443004);var a=(0,t.i(86647).__name)(t=>`${(0,e.styles_default)(t)}
  .swimlane.cluster:not([data-color-id]) rect {
    stroke: ${t.clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`,"getStyles"),r=(0,e.createFlowDiagram)({styles:a});t.s(["diagram",0,r])}]);