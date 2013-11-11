Here's an extremely simple interface which uses [Celestrium](https://github.com/jdhenke/celestrium).

## Setup

```bash
git clone --recursive https://github.com/jdhenke/celestrium-example.git
cd celestrium-example
npm install
sh server.sh
```

1. Now, go to [http://localhost:8080/index.html](http://localhost:8080/index.html)
2. Click the node that appears
3. Type `+` to dynamically bring in other nodes.

You should see an example Graph with nodes A, B and C with a strong link between A and B and a weak link between B and C.

## Explanation

- [`server.sh`](./server.sh) starts the server by 
  - compiling coffeescript files in this example repo
  - compiling the coffeescript files in celestrium
  - running a simple node app which staticly serves `www/`
- [`www/celestrium`] is a [git submodule](http://git-scm.com/book/en/Git-Tools-Submodules) of [Celestrium](https://github.com/jdhenke/celestrium).
- [`www/index.html`](./www/index.html) loads Celestrium's default css and the `www/main.js` through [requirejs](http://requirejs.org/).
- [`www/main.coffee`](./www/main.coffee) is responsible for
  - configuring where the celestrium repo is relative to the publicly served directory
  - configuring where plugins defined in this example repo are located relative to the celestrium repo
  - initializing the desired plugins for this example interface
- [`www/ExampleDataProvider.coffee`](./www/ExampleDataProvider.coffee) is the only plugin this example interface defines.
It extends Celestrium's `DataProvider` plugin to tell Celestrium how to dynamically bring in data.

**See the source for more details.**

## Visualization of a Random Graph

Run this repo's server and go to [http://localhost:8080/random.html](http://localhost:8080/random.html) to see a randomly generated graph and use some cool plugins.

![image](https://f.cloud.github.com/assets/1418690/1470986/0924b8ec-45d0-11e3-8fb5-059e00b4a34e.png)

**Hint**: try sliding the white line on the chart as well.

This uses [`www/main-random.coffee`](./www/main-random.coffee).
