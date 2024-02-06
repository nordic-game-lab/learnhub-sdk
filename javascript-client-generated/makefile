all: build_cjs build_esm generate_types

build_esm:
	npx tsc -b ./tsconfig.esm.json

build_cjs:
	npx tsc -b ./tsconfig.cjs.json

generate_types:
	npx tsc -b ./tsconfig.types.json