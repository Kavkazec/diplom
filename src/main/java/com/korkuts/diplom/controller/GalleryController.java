package com.korkuts.diplom.controller;

import com.korkuts.diplom.dao.CategoryDao;
import com.korkuts.diplom.dao.ImageDao;
import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.model.Category;
import com.korkuts.diplom.model.Image;
import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.model.dto.Gallery;
import com.korkuts.diplom.service.impl.CategoryServiceImpl;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

import static com.korkuts.diplom.Utils.convertImageToByteArray;

@RestController
@RequestMapping(value = "/api")
public class GalleryController {
    private static final Logger LOGGER = Logger.getLogger(GalleryController.class);

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private ImageDao imageDao;

    @Autowired
    private PhotographerDao photographerDao;


    @RequestMapping(value = "/gallery", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Map<String, Object> getDataForGallery() {
        Map<String, Object> map = new LinkedHashMap<>();
        List<Category> categories = Collections.emptyList();
        Map<String,Object> catImg = new LinkedHashMap<>();
        List<Photographer> photographers = photographerDao.getAll();
        String photographerIds = StringUtils.join(photographers
                .stream()
                .map(Photographer::getId)
                .collect(Collectors.toList()), ",");

        if(!CollectionUtils.isEmpty(photographers)) {
            categories = categoryDao.getAllByPhotographerIds(photographerIds);
            List<String> names = categories
                    .stream()
                    .map(Category::getName)
                    .collect(Collectors.toList());
            if(!CollectionUtils.isEmpty(categories)) {
                names.forEach(name ->
                        catImg.put(name,
                                imageDao.getAllByCategoryAndPhotographerIds(photographerIds, "'" + name + "'")
                                        .stream()
                                        .filter(image -> Paths.get(image.getImageLink()).toFile().exists())
                                        .map(image -> {
                                            try {
                                                return new Image(image, convertImageToByteArray(image.getImageLink()));
                                            } catch (Exception e) {
                                                LOGGER.error("GalleryController :: Can't get all images. ");
                                            }
                                            return null;
                                        })
                                        .filter(Objects::nonNull)
                                        .collect(Collectors.toList()))
                );
            }
        }

        map.put("photographers", photographers);
        map.put("categories", categories);
        map.put("images", catImg);
        return map;
    }

    @RequestMapping(value = "/gallery", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Map<String, Object> getDataForGallery(@RequestBody Gallery gallery) {
        Map<String,Object> catImg = new LinkedHashMap<>();
        if(!CollectionUtils.isEmpty(gallery.getCategoryNames()) && !CollectionUtils.isEmpty(gallery.getPhotographerIds())) {
            List<Photographer> photographers = photographerDao
                    .getAllByIds(StringUtils.join(gallery.getPhotographerIds(), ","));
            String photographerIds = StringUtils.join(photographers
                    .stream()
                    .map(Photographer::getId)
                    .collect(Collectors.toList()), ",");

            List<Category> categories = categoryDao
                    .getAllByNamesAndPhotographerIds(
                            photographerIds,
                            StringUtils.join(gallery.getCategoryNames()
                                    .stream()
                                    .map(name -> "'" + name + "'")
                                    .collect(Collectors.toList()), ","));
            List<String> names = categories
                    .stream()
                    .map(Category::getName)
                    .collect(Collectors.toList());

            names.forEach(name ->
                    catImg.put(name,
                            imageDao.getAllByCategoryAndPhotographerIds(photographerIds, "'" + name + "'")
                                    .stream()
                                    .filter(image -> Paths.get(image.getImageLink()).toFile().exists())
                                    .map(image -> {
                                        try {
                                            return new Image(image, convertImageToByteArray(image.getImageLink()));
                                        } catch (Exception e) {
                                            LOGGER.error("GalleryController :: Can't get all images. ");
                                        }
                                        return null;
                                    })
                                    .filter(Objects::nonNull)
                                    .collect(Collectors.toList()))
            );
        }
        return catImg;
    }
}
