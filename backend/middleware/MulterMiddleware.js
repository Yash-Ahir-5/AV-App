const multer = require('multer');
const path = require('path');
const fs = require('fs');

const createDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = 'uploads';

        if (file.fieldname === 'profilePic') {
            uploadPath = 'uploads/profilepic';
        } else if (file.fieldname === 'thumbnail') {
            uploadPath = 'uploads/thumbnails';
        } else if (file.fieldname === 'audioFile') {
            uploadPath = 'uploads/audios';
        }

        createDirectory(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const rename = Date.now() + "-" + file.originalname;
        cb(null, rename);
    }
});

// const checkFileType = (file, cb) => {
//     let filetypes;

//     if (file.fieldname === 'profilePic' || file.fieldname === 'thumbnail') {
//         filetypes = /jpeg|jpg|png|jfif/;
//     } else if (file.fieldname === 'audioFile') {
//         filetypes = /mp3/;
//     } else {
//         return cb(new Error('Error: Invalid file type'));
//     }

//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
//     if (extname && mimetype) {
//         console.log("in if");
//         return cb(null, true);
//         console.log("after if");
//     } else {
//         console.log("in else");
//         cb(new Error(`Error: Only ${filetypes.toString()} files are allowed!`));
//     }
// };

function checkFileType(file, cb) {
    // Define allowed file types
    const allowedTypes = {
        "image/jpeg": ["jpg", "jpeg"],
        "image/jpg": ["jpg"],
        "image/webp": ["webp"],
        "image/png": ["png"],
        "audio/mp3": ["mp3"],
        "audio/mpeg": ["mp3"],
        "video/mp4": ["mp4"],
    };

    // Get the file extension and remove the leading dot
    const extname = path.extname(file.originalname).toLowerCase().slice(1);

    // Log file MIME type and extension for debugging
    console.log(`MIME type: ${file.mimetype}`);
    console.log(`File extension: ${extname}`);

    // Check if file's MIME type is in the allowed types
    if (allowedTypes[file.mimetype]) {
        // Check file extension against expected extensions for the MIME type
        if (allowedTypes[file.mimetype].includes(extname)) {
            cb(null, true); // File type is allowed
        } else {
            cb(
                new Error(
                    `Error: Invalid file extension for ${file.fieldname
                    }. Expected ${allowedTypes[file.mimetype].join(
                        " or "
                    )}, but got ${extname}.`
                )
            );
        }
    } else {
        cb(new Error(`Error: Unsupported file type for ${file.fieldname}`));
    }
}

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

module.exports = upload;