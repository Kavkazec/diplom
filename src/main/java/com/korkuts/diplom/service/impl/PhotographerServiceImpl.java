package com.korkuts.diplom.service.impl;

import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.service.PhotographerService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PhotographerServiceImpl implements PhotographerService {
    private static final Logger LOGGER = Logger.getLogger(PhotographerServiceImpl.class);

    @Autowired
    private PhotographerDao photographerDao;


    @Override
    public List<Photographer> getAll() {
        try {
            return photographerDao.getAll();
        } catch (Exception e) {
            LOGGER.error("PhotographerServiceImpl :: Can't get all photographers.  ");
        }
        return Collections.emptyList();
    }
}
