IMAGE := personal-website-jekyll
PORT := 4000

.PHONY: build serve build-site shell clean

build:
	docker build -t $(IMAGE) .

serve: build
	docker run --rm -it \
		-p $(PORT):4000 -p 35729:35729 \
		-v "$(PWD):/srv/jekyll" \
		$(IMAGE)

# One-off static build into ./_site
build-site: build
	docker run --rm \
		-v "$(PWD):/srv/jekyll" \
		$(IMAGE) bundle exec jekyll build

shell: build
	docker run --rm -it \
		-v "$(PWD):/srv/jekyll" \
		$(IMAGE) bash

clean:
	rm -rf _site .jekyll-cache .sass-cache
