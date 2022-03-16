import * as imgbbUploader from 'imgbb-uploader/lib/cjs';
import { InternalServerErrorException } from '@nestjs/common';

const uploadImage = async (path: string) => {
  return imgbbUploader({
    apiKey: process.env.IMGBB_KEY,
    imagePath: path,
  })
    .then((result) => {
      console.log(`Handle success: ${result.url}`);
      return result.url;
    })
    .catch((e) => {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    });
};

export default uploadImage;
