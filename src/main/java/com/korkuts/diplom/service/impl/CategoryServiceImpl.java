package com.korkuts.diplom.service.impl;

import com.korkuts.diplom.dao.CategoryDao;
import com.korkuts.diplom.dao.ImageDao;
import com.korkuts.diplom.model.Category;
import com.korkuts.diplom.model.Image;
import com.korkuts.diplom.model.dto.PhotographerCategories;
import com.korkuts.diplom.service.CategoryService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import static com.korkuts.diplom.Utils.convertImageToByteArray;

import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    private static final Logger LOGGER = Logger.getLogger(CategoryServiceImpl.class);

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private ImageDao imageDao;

    @Override
    public List<Category> getAll() {
        try {
            return categoryDao.getAll();
        } catch (Exception e) {
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }
        return Collections.emptyList();
    }

    @Override
    public List<Category> getAllByPhotographerId(Long id) {
        try {
            return categoryDao.getAllByPhotographerId(id);
        } catch (Exception e) {
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }
        return Collections.emptyList();
    }

    @Override
    public Map<String, List<Image>> getImagesByCategoryAndPhotographerId(final PhotographerCategories categories) {
        Map<String, List<Image>> data = new LinkedHashMap<>();
        try {
            if (!CollectionUtils.isEmpty(categories.getCategories())) {
                final String categoryNames = StringUtils.join(categories.getCategories()
                        .stream()
                        .map(value -> "'" + value + "'")
                        .collect(Collectors.toList()), ",");
                categoryDao.getAllByNamesAndPhotographerId(categories.getId(), categoryNames)
                        .stream()
                        .map(Category::getName)
                        .forEach(category -> data.put(category,
                                imageDao.getAllByCategoryAndPhotographerId(categories.getId(), "'" + category + "'")
                                        .stream()
                                        .filter(image -> Paths.get(image.getImageLink()).toFile().exists())
                                        .map(image -> {
                                            try {
                                                return new Image(image, convertImageToByteArray(image.getImageLink()));
                                            } catch (Exception e) {
                                                LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
                                            }
                                            return null;
                                        })
                                        .filter(Objects::nonNull)
                                        .collect(Collectors.toList()))
                        );
            }
        } catch (Exception e) {
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }

        return data;
    }

    @Override
    public Map<String, List<Image>> getImagesByPhotographerId(Long id) {
        Map<String, List<Image>> data = new LinkedHashMap<>();
        final String categoryNames = StringUtils.join(
                categoryDao.getAllByPhotographerId(id)
                        .stream()
                        .map(category -> "'" + category.getName() + "'")
                        .collect(Collectors.toList()), ",");
        try {
            categoryDao.getAllByNamesAndPhotographerId(id, categoryNames)
                    .stream()
                    .map(Category::getName)
                    .forEach(category ->
                            data.put(category,
                                    imageDao.getAllByCategoryAndPhotographerId(id, "'" + category + "'")
                                            .stream()
                                            .filter(image -> Paths.get(image.getImageLink()).toFile().exists())
                                            .map(image -> {
                                                try {
                                                    return new Image(image, convertImageToByteArray(image.getImageLink()));
                                                } catch (Exception e) {
                                                    LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
                                                }
                                                return null;
                                            })
                                            .filter(Objects::nonNull)
                                            .collect(Collectors.toList()))
                    );
        } catch (Exception e) {
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }

        return data;
    }
}
