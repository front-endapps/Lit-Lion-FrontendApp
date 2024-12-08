import fs from 'fs/promises';
import path from 'path';

const indexPath = path.join(process.cwd(), 'dist', 'index.html');

async function updateIndexHtml() {
    try {
        await fs.access(indexPath);

        const data = await fs.readFile(indexPath, 'utf8');

        const updatedData = data.replace(
            /<script type="module" src=".*"><\/script>/,
            '<script type="module" src="lit-lion-app.js"></script>'
        );

        await fs.writeFile(indexPath, updatedData, 'utf8');
        console.log('Fișierul index.html a fost actualizat cu succes!');
    } catch (err) {
        console.error('Eroare la procesarea fișierului index.html:', err);
    }
}

updateIndexHtml();
