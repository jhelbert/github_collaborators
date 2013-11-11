// Generated by CoffeeScript 1.6.3
/*

This is an example extension of a DataProvider.

You should define this to be backed by your own source of data.
This uses a static graph for the sake of example, but typically
you would make ajax requests and call the callbacks once the data
has been received.

DataProvider extensions need only define two functions

- getLinks(node, nodes, callback) should call callback with
  an array, A, of links st. A[i] is the link from node to nodes[i]
  links are javascript objects and can have any attributes you like
  so long as they don't conflict with d3's attributes and they
  must have a "strength" attribute in [0,1]

- getLinkedNodes(nodes, callback) should call callback with
  an array of the union of the linked nodes of each node in nodes.
  currently, a node can have any attributesyou like so they long
  as they don't conflict with d3's attributes and they
  must have a "text" attribute.

DataProviders are integrated to always be called when a node is
added to the graph to ensure the corresponding links between
all nodes in the graph are added.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["DataProvider"], function(DataProvider) {
    var ExampleProvider, numNodes, _ref;
    numNodes = 25;
    return ExampleProvider = (function(_super) {
      __extends(ExampleProvider, _super);

      function ExampleProvider() {
        _ref = ExampleProvider.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExampleProvider.prototype.init = function(instances) {
        return ExampleProvider.__super__.init.call(this, instances);
      };

      ExampleProvider.prototype.getLinks = function(node, nodes, callback) {
        var data;
        data = {
          node: JSON.stringify(node),
          otherNodes: JSON.stringify(nodes)
        };
        return this.ajax("get_edges", data, function(arrayOfCoeffs) {
          return callback(_.map(arrayOfCoeffs, function(coeffs, i) {
            return {
              coeffs: coeffs
            };
          }));
        });
      };

      ExampleProvider.prototype.getLinkedNodes = function(nodes, callback) {
        var data;
        data = {
          nodes: JSON.stringify(nodes)
        };
        return this.ajax("get_related_nodes", data, callback);
      };

      return ExampleProvider;

    })(DataProvider);
  });

}).call(this);
