import express from 'express';
import path from 'path';

const rootDir = import.meta.dirname;
const server = express();
const PORT = 3000;

// Serve static files from the "public" directory
server.use(express.static(path.join(rootDir, 'public')));

// Serve the main index.html for any route (client-side routing)
server.get('*', (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
