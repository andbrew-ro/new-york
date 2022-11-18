# new-york

Web API built with [Nest](https://github.com/nestjs/nest) for anagrams.

## Usage
```https://ars-magna.herokuapp.com```

### Routes

```/anagram```

GET this route to discover new anagrams

```bash
$ curl --request GET \
  --url 'https://ars-magna.herokuapp.com/anagram?page=1'
```

Did you find an anagram? POST this route

```bash
$ curl --request POST \
  --url https://ars-magna.herokuapp.com/anagram \
  --header 'Content-Type: application/json' \
  --data '{
	"a": "anagrams",
	"b": "ars magna"
  }'
```
