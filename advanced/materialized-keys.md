---
label: Materialized Keys
order: -3
---

# Materialized Keys [Coming Soon]

Materialized keys are the result of calculations on one or multiple existing keys in your events.

---

## Reference

Materialized keys work a lot like Excel functions. A `materialized_key` consists of:

- one or multiple existing `key`s or `materialized_key`s prefixed with `$`. Example: `$@duration`
- a function. Example: `MIN` to compute the minimum between two values
- numbers: Example: `32`

!!!warning
Materialized keys can only take existing `key`s of type `number`.
!!! 

Example `materialized_key`: `LESS(PLUS($@duration, $@initDuration), 100)`. This will return true for every event where the sum of the `@duration` and `@initDuration` is less than `100`.

### List of operators

#### Comparison operators
  - `LESS`: less than
  - `LESSOREQUALS`: less than or equal
  - `GREATER`: greater than
  - `GREATEROREQUALS`: greater than or equal
  - `EQUALS`: equal
  - `NOTEQUALS`: not equal

#### Math operators
  - `MIN`: minimum
  - `MAX`: maximum
  - `PLUS`: sum
  - `MINUS`: subtract
  - `MULTIPLY`: multiply
  - `DIVIDE`: divide
  - `MODULO`: modulo
