const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());
const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server is upp on port:${PORT}`);
});
app.get('/download', (req, res) => {
	const { URL } = req.query;

	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4',
	}).pipe(res);
});
