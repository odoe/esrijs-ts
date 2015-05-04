import Map = require('esri/map');
import dojoDeclare = require('dojo/_base/declare');
import _WidgetBase = require('dijit/_WidgetBase');
import _TemplatedMixin = require('dijit/_TemplatedMixin');

var Widget:any = dojoDeclare([_WidgetBase, _TemplatedMixin], {
  templateString: '<div></div>',
  postCreate() {
    var map:Map = new Map(this.domNode, this.get('mapOptions'));
    this.set('map', map);
  }
});

export = Widget;
