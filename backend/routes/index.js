const express = require('express');
const router = express();
const { UserRegistration, UserLogin } = require('../controller/UserController');
const { uploadAudio } = require('../controller/AudioController');
const { schemaValidation } = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../schemas/UserSchema');
const upload = require('../middleware/MulterMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const { audioUploadSchema } = require('../schemas/AudioSchema');

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.post('/create',
    upload.fields([{ name: 'profilePic', maxCount: 1 }]),
    schemaValidation(registerSchema),
    UserRegistration
);

router.post('/login', 
    schemaValidation(loginSchema), 
    UserLogin
);

router.post('/uploadAudio',
    authMiddleware,
    upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'audioFile', maxCount: 1 }]),
    schemaValidation(audioUploadSchema),
    uploadAudio
);

module.exports = router
