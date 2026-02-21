import type { APIRoute, GetStaticPaths } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const getStaticPaths: GetStaticPaths = () => {
  const artifactsDir = path.join(process.cwd(), 'public/assets/install/artifacts');
  const files = fs.readdirSync(artifactsDir);
  const versions = files
    .filter((f) => f.startsWith('q-tune-') && f.endsWith('.bin'))
    .map((f) => f.replace('q-tune-', '').replace('.bin', ''));

  return versions.map((v) => ({
    params: { version: `manifest-${v}` },
    props: { version: v },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { version } = props;
  const manifest = {
    name: 'Q-Tune',
    version,
    new_install_skip_erase: true,
    new_install_prompt_erase: false,
    builds: [
      {
        chipFamily: 'ESP32-S3',
        parts: [
          { path: `q-tune-${version}.bin`, offset: '0x10000' },
          { path: 'bootloader.bin', offset: '0x0' },
          { path: 'partition-table.bin', offset: '0x8000' },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
