#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "larajobs",
  boardId: "larajobs-official",
  domain: "larajobs.com",
  npmName: "zc-larajobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
