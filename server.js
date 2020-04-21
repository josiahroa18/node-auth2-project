const express = require('express');
const authRouter = require('./api/auth/authRouter');
const userRouter = require('./api/users/userRouter');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.listen(port, () => console.log(`Server listening on port ${port}`));