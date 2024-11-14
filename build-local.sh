#!/bin/bash
echo 'cleanup ...'
./clean.sh

#build with proper symlinks
echo 'building new one ...'
hugo --environment prod

## misc
#missing customisations of my theme template
# echo "kepa.eu.org" >./public/CNAME

# resolved with ./assets/js/custom.js
# #inject google analytics tag
# GA_TAG_INDEX=$(cat ./static/gtag |awk '{print}' ORS='')

# sed -i "/<\/head>/i $GA_TAG_INDEX " ./public/index.html
# sed -i "/<\/head>/i $GA_TAG_INDEX " ./public/blog/index.html
# sed -i "/<\/head>/i $GA_TAG_INDEX " ./public/about/index.html

#serve to doublecheck locally
python3 -m http.server --directory ./public/
