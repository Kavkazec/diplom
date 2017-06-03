package com.korkuts.diplom.dao;

import com.korkuts.diplom.model.Category;

import java.util.List;

public interface CategoryDao {

    List<Category> getAll();

    List<Category> getAllByNamesAndPhotographerIds(String ids, String names);

    List<Category> getAllByPhotographerIds(String ids);

    List<Category> getAllByPhotographerId(Long id);

    List<Category> getAllByNamesAndPhotographerId(Long id, String names);
}
