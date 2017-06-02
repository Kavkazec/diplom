package com.korkuts.diplom.service.impl;

import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.service.PhotographerService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static com.korkuts.diplom.Utils.convertImageToByteArray;

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
                    .filter(value -> Paths.get(value.getImageLink()).toFile().exists())
                    .map(value -> {
                        try {
                            return new Photographer(value, convertImageToByteArray(value.getImageLink()));
                        } catch (Exception e) {
                            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
                        }
                        return null;
                    })
                    .filter(Objects::nonNull)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
        }
        return Collections.emptyList();
    }

    public Photographer getSingle(Long id) {
        try {
            Photographer photographer = photographerDao.getOne(id);
            return new Photographer(photographer,convertImageToByteArray(photographer.getImageLink()));
        } catch (Exception e){
            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
        }
        return null;
    }
}
