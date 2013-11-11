#!/bin/sh

# compile the coffeescript files in this example project
./node_modules/.bin/coffee --compile www/*.coffee &&\

# compile the coffeescript files in celestrium
./node_modules/.bin/coffee --compile -o www/celestrium/core/ www/celestrium/core-coffee/ &&\

# statically serve files out of ./www/
python server.py 5000
