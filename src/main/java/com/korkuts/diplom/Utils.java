package com.korkuts.diplom;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.file.Paths;

public class Utils {

    public static byte[] convertImageToByteArray(String image) throws Exception {
        InputStream is = new FileInputStream(Paths.get(image).toFile());
        BufferedImage img = ImageIO.read(is);
        ByteArrayOutputStream bao = new ByteArrayOutputStream();
        ImageIO.write(img, "jpg", bao);
        return bao.toByteArray();
    }
}
