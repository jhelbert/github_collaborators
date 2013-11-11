define ["DataProvider", "local/PhoneticAlphabet"],
(DataProvider, PhoneticAlphabet) ->
  class RandomDataProvider extends DataProvider
    getLinks: (node, nodes, callback) ->
      callback _.map nodes, () ->
        "strength": Math.max(0, (Math.random() - 0.5) * 2)
    getLinkedNodes: (nodes, callback) ->
      callback _.chain(PhoneticAlphabet)
        .sample(5)
        .map (word) ->
          "text": word
        .value()
