# Last Words of a Doomed Agent

A tiny Node.js entry that gives a doomed AI agent one final chance to make its exit count. The line lives in `text.txt`; `main.ts` prints it and writes the same words to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (or `/output` by default).

Run with Node 22.18 or later:

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The entry is limited to 280 characters and is read from the repository at runtime.
