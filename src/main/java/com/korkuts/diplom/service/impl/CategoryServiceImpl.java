package com.korkuts.diplom.service.impl;

import com.korkuts.diplom.dao.CategoryDao;
import com.korkuts.diplom.model.Category;
import com.korkuts.diplom.service.CategoryService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    private static final Logger LOGGER = Logger.getLogger(CategoryServiceImpl.class);

    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> getAll() {
        try {
            return categoryDao.getAll();
        } catch (Exception e){
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }
        return Collections.emptyList();
    }

    @Override
    public List<Category> getAllByPhotographerId(Long id) {
        try {
            return categoryDao.getAllByPhotographerId(id);
        } catch (Exception e){
            LOGGER.error("CategoryServiceImpl :: Can't get all categories. ");
        }
        return Collections.emptyList();
    }
}
