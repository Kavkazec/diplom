package com.korkuts.diplom.service.impl;

import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.service.PhotographerService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PhotographerServiceImpl implements PhotographerService {
    private static final Logger LOGGER = Logger.getLogger(PhotographerServiceImpl.class);

    @Autowired
    private PhotographerDao photographerDao;


    @Override
    public List<Photographer> getAll() {
        try {
            return photographerDao.getAll()
                    .stream()
                    .map(value -> {
                        Photographer photographer = new Photographer(value);
                        try {
                            photographer.setImageAsByte(convertImageToByteArray(photographer.getImageLink()));
                        } catch (Exception e) {
                            LOGGER.error("PhotographerServiceImpl", e);
                        }
                        return photographer;
                    })
                    .collect(Collectors.toList());
        } catch (Exception e) {
            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
        }
        return Collections.emptyList();
    }

    public Photographer getSingle(Long id) {
        try {
            Photographer photographer = new Photographer(photographerDao.getOne(id));
            photographer.setImageAsByte(convertImageToByteArray(photographer.getImageLink()));
            return photographer;
        } catch (Exception e){
            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
        }
        return null;
    }

    private byte[] convertImageToByteArray(String image) throws Exception {
        InputStream is = new FileInputStream(Paths.get(image).toFile());
        BufferedImage img = ImageIO.read(is);
        ByteArrayOutputStream bao = new ByteArrayOutputStream();
        ImageIO.write(img, "jpg", bao);
        return bao.toByteArray();
    }
}
