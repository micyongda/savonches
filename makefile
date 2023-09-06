load:
	eval "$(ssh-agent -s)" && ssh-add ~/.ssh/savonches

deploy:
	git push origin development

run:
	shopify theme dev --theme=savonches/development
