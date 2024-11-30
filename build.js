import esbuild from 'esbuild';
import htmlPlugin from 'esbuild-plugin-html';

esbuild
  .build({
    entryPoints: ['index.html'], 
    bundle: true,
    outdir: 'docs', 
    loader: {
      '.js': 'jsx', 
    },
    plugins: [htmlPlugin()],
  })
  .catch(() => process.exit(1));
