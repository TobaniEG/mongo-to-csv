# Mongo To CSV

A simple JS script to convert mongodb data to csv and allow it to be easily imported into excel.

## Installation

```bash
git clone https://github.com/tobanieg/mongo-to-csv.git
cd mongo-to-csv
pnpm install
```

## Usage

Set the `MONGO_URI` environment variable in your `.env` file. And run:

```bash
pnpm run start
```

Or run:

```bash
MONGO_URI="<mongo uri>" pnpm run start
```

## Testing

```bash
pnpm run test
```
