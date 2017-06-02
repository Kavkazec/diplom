package com.korkuts.diplom.service;

import com.korkuts.diplom.model.Category;
import com.korkuts.diplom.model.Image;
import com.korkuts.diplom.model.dto.PhotographerCategories;

import java.util.List;
import java.util.Map;

public interface CategoryService {
    List<Category> getAll();

    List<Category> getAllByPhotographerId(Long id);

    Map<String, List<Image>> getImagesByCategoryAndPhotographerId(PhotographerCategories categories);

    Map<String, List<Image>> getImagesByPhotographerId(Long id);
}
