IMAGE = substack-pub

build:
	docker build -t $(IMAGE) .

run: build
	docker run --rm \
		-v "$${PWD}/..:/workspace" \
		-w /workspace/bin \
		$(IMAGE) "$${FILE}" $${TITLE:+$${TITLE}}
