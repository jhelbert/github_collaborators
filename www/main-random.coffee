requirejs.config
  baseUrl: "/celestrium/core/"
  paths:
    local: "../../"

require ["Celestrium", "local/PhoneticAlphabet"],
(Celestrium, PhoneticAlphabet) ->

  plugins =
    "Layout":
      el: document.querySelector "body"
    "KeyListener":
      document.querySelector "body"
    "GraphModel":
      nodeHash: (node) -> node.text
      linkHash: (link) -> link.source.text + link.target.text
    "GraphView": {}
    "NodeSelection": {}
    "Sliders": {}
    "ForceSliders": {}
    "LinkDistribution": {}
    "NodeSearch":
      local: PhoneticAlphabet
    "local/RandomDataProvider": {}

  Celestrium.init plugins
