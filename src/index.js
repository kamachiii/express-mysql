require('dotenv').config();
const express =  require('express');
const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/log');
const upload = require('./middleware/multer');

const app = express();
const PORT = process.env.APP_PORT || 4000;

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public'));

app.use("/users", userRoutes);
app.use('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'UPLOAD successfully'
    });
});
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server successfully running in ${PORT}`);
})
