import multer from "multer";
import multerS3 from "multer-s3"
import aws from "aws-sdk"



aws.config.update({
    region:"us-east-1",
    secretAccessKey: "yCGT34nZw6AXXKdwvG2sfddvhG4n9ybmYQDu87XO",
    accessKeyId: "AKIAUOKS4THPL6Y4YNWQ"
})

 const s3 = new aws.S3()
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'twitterbucketjdjd',
      acl:'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

export default upload;